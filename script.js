/* ── Translations (loaded from translates.yml) ── */
let translations = {}; // populated by loadTranslations()

// Share the wiki catalogue request between the dropdown and the wiki page.
// It starts as soon as this script is evaluated and stays in memory for instant navigation.
window.wikiesDataPromise = window.wikiesDataPromise || fetch('wikies.json')
    .then(response => {
        if (!response.ok) throw new Error('Could not load wikies.json');
        return response.json();
    });

/* load translations from /translates.yml using js-yaml and extract langs + translates */
async function loadTranslations() {
    try {
        const res = await fetch('/translates.yml', { cache: 'no-cache' });
        if (!res.ok) throw new Error('Network error loading translates.yml');
        const text = await res.text();
        const jsYaml = await import('https://esm.sh/js-yaml@4.1.0');
        const data = jsYaml.load(text);

        // new expected structure:
        // { langs: { 1: {flag, name, tag}, ... }, translates: { es: {...}, en: {...} } }
        if (data && typeof data === 'object') {
            translations = data.translates || {};
            // build flagMap from langs array/object
            flagMap = {};
            if (data.langs && typeof data.langs === 'object') {
                Object.values(data.langs).forEach(item => {
                    if (item && item.tag) {
                        flagMap[item.tag] = { flag: item.flag || '', name: item.name || item.tag };
                    }
                });
            }
        }
    } catch (e) {
        console.error('Failed to load translations:', e);
        translations = {}; // fallback to empty so applyTranslations can use defaults
        flagMap = {};
    }
}

let flagMap = {}; // populated from translates.yml langs section
let currentLang = 'es';

/* ── Apply translations ── */
function applyTranslations(lang) {
    const dict = (translations && translations[lang]) ? translations[lang] : (translations && translations.es) ? translations.es : {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict && dict[key]) el.textContent = dict[key];
    });
}

/* ── Navigation ── */
function handleNav() {
    const hash = window.location.hash || '#home';
    let id = decodeURIComponent(hash.slice(1));
    if (!['home', 'portfolio', 'wiki'].includes(id)) id = 'wiki';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id) || document.getElementById('home');
    if (target) target.classList.add('active');
    document.body.classList.toggle('wiki-open', id === 'wiki');

    document.querySelectorAll('header .nav-link').forEach(control => {
        const targetId = control.id === 'wiki-btn'
            ? 'wiki'
            : (control.getAttribute('href') || '').replace(/^#/, '');
        const active = targetId === id;
        control.classList.toggle('active', active);
        if (control.tagName === 'A') {
            if (active) control.setAttribute('aria-current', 'page');
            else control.removeAttribute('aria-current');
        }
    });
}

/* ── Language dropdown ── */
function initLangDropdown() {
    const btn      = document.getElementById('lang-current');
    const dropdown = document.getElementById('lang-options');
    const flagImg  = document.getElementById('current-flag');
    const label    = document.getElementById('current-label');

    if (!btn || !dropdown) return;

    // ── Build options dynamically from flagMap (loaded from translates.yml) ──
    dropdown.innerHTML = '';
    // flagMap keys are in insertion order; langs in the YAML are numbered so
    // Object.values(flagMap) keeps the declared order.
    Object.entries(flagMap).forEach(([tag, info], idx) => {
        const li = document.createElement('li');
        li.className = 'lang-option' + (tag === currentLang ? ' active' : '');
        li.setAttribute('data-lang', tag);
        li.setAttribute('role', 'option');

        const isEmoji = info.flag && info.flag.length <= 4;
        if (isEmoji) {
            li.innerHTML = `<span style="font-size:1.1rem;line-height:1">${info.flag}</span> ${info.name}`;
        } else {
            li.innerHTML = `<img src="${info.flag}" alt="" class="lang-flag"> ${info.name}`;
        }
        dropdown.appendChild(li);
    });

    // ── Initialize current-lang button label ──
    const initInfo = flagMap[currentLang];
    if (initInfo) {
        const isEmoji = initInfo.flag && initInfo.flag.length <= 4;
        if (isEmoji) {
            if (flagImg) flagImg.style.display = 'none';
            label.textContent = `${initInfo.flag} ${initInfo.name}`;
        } else {
            if (flagImg) { flagImg.style.display = ''; flagImg.src = initInfo.flag; }
            label.textContent = initInfo.name;
        }
    }

    // ── Toggle open ──
    btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });

    // ── Option click (use delegation so it works with dynamic items) ──
    dropdown.addEventListener('click', e => {
        const opt = e.target.closest('.lang-option');
        if (!opt) return;

        const lang = opt.getAttribute('data-lang');
        currentLang = lang;

        const info = flagMap[lang];
        if (info) {
            const isEmoji = info.flag && info.flag.length <= 4;
            if (isEmoji) {
                if (flagImg) flagImg.style.display = 'none';
                label.textContent = `${info.flag} ${info.name}`;
            } else {
                if (flagImg) { flagImg.style.display = ''; flagImg.src = info.flag; }
                label.textContent = info.name;
            }
        }

        dropdown.querySelectorAll('.lang-option').forEach(o =>
            o.classList.toggle('active', o === opt)
        );

        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        applyTranslations(lang);
    });

    // ── Close on outside click ──
    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    });
}

/* ── Wiki menu ── */
async function initWiki() {
    const btn = document.getElementById('wiki-btn');
    const menu = document.getElementById('wiki-menu');
    if (!btn || !menu) return;
    const list = menu.querySelector('.wiki-list');
    const loading = menu.querySelector('.wiki-loading');
    const err = menu.querySelector('.wiki-error');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-hidden', String(!open));
    });
    document.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
    });

    try {
        const data = await window.wikiesDataPromise;
        list.innerHTML = '';
        let hasAny = false;
        for (const category of data.categories || []) {
            const wikis = category.wikis || [];
            if (!wikis.length) continue;
            const heading = document.createElement('div');
            heading.className = 'wiki-category';
            heading.textContent = category.name;
            list.appendChild(heading);
            for (const wiki of wikis) {
                if (!wiki.id || !wiki.name) continue;
                const link = document.createElement('a');
                link.className = 'wiki-item';
                link.href = '#' + wiki.id;
                link.textContent = wiki.name;
                list.appendChild(link);
                hasAny = true;
            }
        }
        loading.hidden = true;
        if (hasAny) list.hidden = false;
        else { err.hidden = false; err.textContent = 'No wiki entries.'; }
    } catch (error) {
        loading.hidden = true;
        err.hidden = false;
        console.error('Wiki load error', error);
    }
}

/* ── Discord button: open invite directly ── */
function initDiscordToggle() {
    const btn = document.getElementById('discord-btn');
    const urlSpan = document.getElementById('discord-url');
    const invite = 'https://discord.gg/G2k97r2uxc';
    if (!btn) return;

    // ensure the URL span is hidden (UI kept simple)
    if (urlSpan) urlSpan.style.display = 'none';

    // Click opens invite in a new tab
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(invite, '_blank', 'noopener');
    });

    // Enter key while focused also opens invite
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            window.open(invite, '_blank', 'noopener');
        }
    });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
    // Wire navigation synchronously so an early wiki selection cannot be missed
    // while translations are still loading.
    handleNav();
    window.addEventListener('popstate', handleNav);
    window.addEventListener('hashchange', handleNav);

    initWiki();
    initDiscordToggle();

    loadTranslations().then(() => {
        initLangDropdown();
        applyTranslations(currentLang);
    });
});