// currentApis: [{ id, category, name, header_image, description, translates, modules: [mod, ...] }]
    // currentModules: flattened modules, each carrying a back-reference to its parent api ( _api )
    let currentApis = [];
    let currentModules = [];
    let modulesById = new Map();
    let sidebarLinksById = new Map();
    let activeModuleId = null;
    let wikiLang = 'en';

    function t(key, mod) {
      const dict = mod && (mod.translates || (mod._api && mod._api.translates));
      if (dict && dict[key] && dict[key][wikiLang]) {
        return dict[key][wikiLang];
      }
      return key;
    }

    // Deterministic hue from a string, used to build a fallback gradient
    // banner when a wiki/module doesn't define a header_image.
    function hashHue(str) {
      let hash = 0;
      for (let i = 0; i < (str || '').length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash) % 360;
    }

    function renderBanner(el, { image, title, subtitle, seedKey, variant }) {
      el.className = `wiki-banner ${variant}`;
      el.innerHTML = '';

      if (image) {
        const img = document.createElement('img');
        img.className = 'banner-img';
        img.src = image;
        img.alt = title || '';
        img.onerror = () => {
          img.onerror = null;
          img.src = 'assets/wiki-banner.jpg';
        };
        el.appendChild(img);
      } else {
        const hue = hashHue(seedKey);
        el.style.background = `linear-gradient(135deg, hsl(${hue}, 65%, 22%), hsl(${(hue + 60) % 360}, 60%, 14%))`;
      }

      const overlay = document.createElement('div');
      overlay.className = 'banner-overlay';
      overlay.innerHTML = `
        <h2 class="banner-title">${title || ''}</h2>
        ${subtitle ? `<p class="banner-sub">${subtitle}</p>` : ''}
      `;
      el.appendChild(overlay);
    }

    function changeLang() {
      wikiLang = document.getElementById('lang-select').value;

      document.getElementById('lbl-modules').innerText = wikiLang === 'en' ? 'Modules' : 'Módulos';
      document.getElementById('wiki-search').placeholder = wikiLang === 'en' ? 'Search module...' : 'Buscar módulo...';

      renderSidebar();
      const activeLink = document.querySelector('.sidebar-link.active');
      if (activeLink) {
        displayModuleContent(activeLink.dataset.moduleId);
      }
    }

    function formatTextWithCode(text) {
      if (!text) return "";
      const paragraphs = text.replace(/```(\w+)?\n([\s\S]*?)```/g, function(match, lang, code) {
        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const language = lang ? lang : 'code';
        const copyBtnText = wikiLang === 'en' ? 'Copy' : 'Copiar';
        return `<div class="code-container"><div class="code-header"><span class="code-lang">${language}</span><button class="copy-btn" onclick="copyToClipboard(this)">${copyBtnText}</button></div><pre><code>${escapedCode}</code></pre></div>`;
      });
      return paragraphs.replace(/\n(?![^<]*>)/g, '<br>');
    }

    function copyToClipboard(button) {
      const codeContainer = button.parentElement.nextElementSibling;
      const codeText = codeContainer.innerText;

      navigator.clipboard.writeText(codeText).then(() => {
        const originalText = button.innerText;
        button.innerText = wikiLang === 'en' ? "Copied!" : "¡Copiado!";
        button.style.borderColor = "#4ade80";
        button.style.color = "#4ade80";
        
        setTimeout(() => {
          button.innerText = originalText;
          button.style.borderColor = "";
          button.style.color = "";
        }, 2000);
      });
    }

    async function loadWikiData() {
      try {
        const data = await (window.wikiesDataPromise || fetch('wikies.json').then(response => {
          if (!response.ok) throw new Error('Could not load wikies.json');
          return response.json();
        }));
        currentApis = (data.categories || []).flatMap(category =>
          (category.wikis || []).map(api => ({
            ...api,
            category: api.category || category.name
          }))
        );

        currentModules = [];
        modulesById = new Map();
        currentApis.forEach(api => {
          const modEntries = api.modules || {};
          const keys = Object.keys(modEntries).sort((a, b) => Number(a) - Number(b));
          api._orderedModules = keys.map(key => {
            const mod = modEntries[key];
            mod._api = api;
            currentModules.push(mod);
            if (mod.id) modulesById.set(mod.id, mod);
            return mod;
          });
        });

        renderSidebar();
        const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
        const targetApi = currentApis.find(api => api.id === hash);
        const targetModule = modulesById.get(hash);
        if (targetModule) {
          displayModuleContent(targetModule.id);
        } else if (targetApi && targetApi._orderedModules.length) {
          displayModuleContent(targetApi._orderedModules[0].id);
        } else if (currentModules.length > 0) {
          const route = location.hash;
          const isLandingRoute = !route || route === '#home' || route === '#portfolio';
          displayModuleContent(currentModules[0].id, !isLandingRoute);
        }
      } catch (error) {
        console.error(error);
        document.getElementById('active-module-content').innerHTML =
          '<h2 style="color:#fff;">Error 404</h2><p style="color:var(--text-muted);">Could not load wiki data.</p>';
      }
    }

    function renderSidebar() {
      const sidebarMenu = document.getElementById('sidebar-menu');
      sidebarMenu.innerHTML = '';
      sidebarLinksById = new Map();

      const activeLink = document.querySelector('.sidebar-link.active');
      activeModuleId = activeLink ? activeLink.dataset.moduleId : activeModuleId;

      currentApis.forEach((api, apiIdx) => {
        const groupLi = document.createElement('li');
        groupLi.innerHTML = `<div class="sidebar-group-title">${api.name}</div>`;
        sidebarMenu.appendChild(groupLi);

        api._orderedModules.forEach((mod, modIdx) => {
          const li = document.createElement('li');
          li.className = 'sidebar-item';

          const isActive = activeModuleId
            ? activeModuleId === mod.id
            : (apiIdx === 0 && modIdx === 0);

          const a = document.createElement('a');
          a.className = `sidebar-link ${isActive ? 'active' : ''}`;
          a.dataset.moduleId = mod.id;
          a.textContent = t(mod.title, mod);
          a.onclick = event => { event.preventDefault(); displayModuleContent(mod.id); };
          sidebarLinksById.set(mod.id, a);
          li.appendChild(a);
          sidebarMenu.appendChild(li);
        });
      });

      searchModules();
    }

    function displayModuleContent(moduleId, updateUrl = true) {
      const mod = modulesById.get(moduleId);
      if (!mod) return;

      if (activeModuleId !== moduleId) {
        sidebarLinksById.get(activeModuleId)?.classList.remove('active');
        sidebarLinksById.get(moduleId)?.classList.add('active');
        activeModuleId = moduleId;
      }
      const api = mod._api;

      // Page-level banner reflects the API the current module belongs to.
      renderBanner(document.getElementById('page-banner'), {
        image: api.header_image,
        title: api.name,
        subtitle: t(api.description, api),
        seedKey: api.id,
        variant: 'page-banner'
      });

      if (updateUrl) history.replaceState(null, '', `#${moduleId}`);

      const container = document.getElementById('active-module-content');
      container.innerHTML = '';

      const moduleBanner = document.createElement('div');
      container.appendChild(moduleBanner);
      renderBanner(moduleBanner, {
        image: mod.header_image,
        title: t(mod.title, mod),
        subtitle: t(mod.short_desc, mod),
        seedKey: mod.id,
        variant: 'module-banner'
      });

      const body = document.createElement('div');
      body.style.cssText = 'color:#e0e0e0; line-height:1.6; font-size:1.05rem;';
      body.innerHTML = formatTextWithCode(t(mod.content, mod));
      container.appendChild(body);

      const subArea = document.createElement('div');
      subArea.className = 'subsections-area';
      container.appendChild(subArea);

      if (mod.subsections) {
        mod.subsections.forEach((sub, idx) => {
          const subId = `sub-btn-container-${idx}`;
          const subBlock = document.createElement('div');
          subBlock.className = 'sub-block';
          subBlock.innerHTML = `
            <h4>${t(sub.title, mod)}</h4>
            <div class="text-content">${formatTextWithCode(t(sub.content, mod))}</div>
            <div class="btn-container" id="${subId}"></div>
          `;
          subArea.appendChild(subBlock);

          if (sub.buttons) {
            const btnContainer = subBlock.querySelector(`#${subId}`);
            sub.buttons.forEach(btn => {
              const a = document.createElement('a');
              a.href = btn.url;
              a.className = `btn btn-sm ${btn.class}`;
              a.innerText = btn.text;
              if (btn.url.startsWith('http')) a.target = "_blank";
              btnContainer.appendChild(a);
            });
          }
        });
      }
    }

    function searchModules() {
      const query = document.getElementById('wiki-search').value.toLowerCase();

      currentModules.forEach(mod => {
        let matchInSubs = false;
        if (mod.subsections) {
          matchInSubs = mod.subsections.some(s =>
            t(s.title, mod).toLowerCase().includes(query) ||
            t(s.content, mod).toLowerCase().includes(query)
          );
        }

        const matches = t(mod.title, mod).toLowerCase().includes(query) ||
                        t(mod.short_desc, mod).toLowerCase().includes(query) ||
                        matchInSubs;

        const sidebarLink = sidebarLinksById.get(mod.id);
        if (sidebarLink) {
          sidebarLink.parentElement.style.display = matches ? 'block' : 'none';
        }
      });
    }

    document.addEventListener('DOMContentLoaded', loadWikiData);
    window.addEventListener('hashchange', () => {
      const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
      const targetModule = modulesById.get(hash);
      const targetApi = currentApis.find(a => a.id === hash);
      if (targetModule) displayModuleContent(targetModule.id);
      else if (targetApi && targetApi._orderedModules.length) displayModuleContent(targetApi._orderedModules[0].id);
    });