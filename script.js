const questions = [
  { sentence: "El niño ___ su tarea cuidadosamente.", correct: "hizo", options: ["hizo", "izo", "hiso"] },
  { sentence: "Vamos a ___ el examen mañana.", correct: "hacer", options: ["hacer", "aser", "haser"] },
  { sentence: "El cielo está ___ nublado hoy.", correct: "muy", options: ["muy", "mui", "muí"] },
  { sentence: "___ importante estudiar para el examen.", correct: "Es", options: ["Es", "Ez", "Hez"] },
  { sentence: "La ___ del libro es muy interesante.", correct: "historia", options: ["historia", "istoría", "histeria"] },
  { sentence: "Me gusta el ___ de manzana.", correct: "jugo", options: ["jugo", "hugo", "juego"] },
  { sentence: "La ___ de la montaña es impresionante.", correct: "vista", options: ["vista", "bista", "vihta"] },
  { sentence: "___ a la fiesta el sábado.", correct: "Voy", options: ["Voy", "Boi", "Boy"] },
  { sentence: "Necesito ___ agua por favor.", correct: "un vaso de", options: ["un vaso de", "un baso de", "un vaso e"] },
  { sentence: "Ella ___ muy bien el piano.", correct: "toca", options: ["toca", "toka", "tocá"] },
  { sentence: "El ___ de fútbol fue emocionante.", correct: "partido", options: ["partido", "partío", "partdo"] },
  { sentence: "___ el libro que me recomendaste.", correct: "He leído", options: ["He leído", "E leído", "He leido"] },
  { sentence: "La ___ del museo es gratis los domingos.", correct: "entrada", options: ["entrada", "entra", "entradá"] },
  { sentence: "___ frío hoy, necesito abrigo.", correct: "Hace", options: ["Hace", "Ase", "Haze"] },
  { sentence: "El ___ del coche es muy cómodo.", correct: "asiento", options: ["asiento", "aciento", "asiénto"] },
  { sentence: "No me ___ lo que dijiste.", correct: "creo", options: ["creo", "créo", "crio"] },
  { sentence: "¿___ vas a venir a la reunión?", correct: "Cuándo", options: ["Cuándo", "Cuando", "Cúando"] },
  { sentence: "Ellos ya ___ terminado el trabajo.", correct: "han", options: ["han", "an", "ám"] },
  { sentence: "Siempre ___ con respeto a los mayores.", correct: "habla", options: ["habla", "abla", "hablà"] },
  { sentence: "La leche está ___, no la tomes.", correct: "agria", options: ["agria", "agrea", "agría"] },
  { sentence: "___ de casa temprano cada día.", correct: "Salgo", options: ["Salgo", "Saljo", "Zalgo"] },
  { sentence: "No ___ que eso iba a pasar.", correct: "sabía", options: ["sabía", "savía", "sabia"] },
  { sentence: "El perro ___ toda la noche.", correct: "ladró", options: ["ladró", "ladro", "ladru"] },
  { sentence: "¿___ viste mis llaves?", correct: "Has", options: ["Has", "Haz", "As"] },
  { sentence: "Juan ___ una gran presentación.", correct: "hizo", options: ["hizo", "hico", "iso"] },
  { sentence: "___ lo que te dije.", correct: "Recuerda", options: ["Recuerda", "Recuerdas", "Recuérda"] },
  { sentence: "Hoy vamos a ___ un nuevo tema.", correct: "aprender", options: ["aprender", "aprendar", "aprendir"] },
  { sentence: "María ___ una carta a su amiga.", correct: "escribió", options: ["escribió", "escribio", "escrivió"] },
  { sentence: "Este problema es más ___ de lo que parece.", correct: "difícil", options: ["difícil", "dificil", "difísil"] },
  { sentence: "El tren llega a las ocho ___.", correct: "en punto", options: ["en punto", "empunto", "enpunto"] },
  { sentence: "Nos vemos ___ de la escuela.", correct: "fuera", options: ["fuera", "fuerá", "fura"] },
  { sentence: "Paco ___ un sándwich.", correct: "comió", options: ["comió", "comio", "comío"] },
  { sentence: "La película fue muy ___", correct: "aburrida", options: ["aburrida", "aburridá", "aburida"] },
  { sentence: "¿___ ayudás con esto?", correct: "Me", options: ["Me", "Mhe", "Mé"] },
  { sentence: "El examen fue ___ difícil.", correct: "bastante", options: ["bastante", "vastante", "bastanté"] },
  { sentence: "Mañana vamos al ___", correct: "cine", options: ["cine", "sine", "cene"] },
  { sentence: "Ese auto es muy ___", correct: "rápido", options: ["rápido", "rapido", "rapído"] },
  { sentence: "Se me ___ el celular.", correct: "cayó", options: ["cayó", "calló", "caió"] },
  { sentence: "¿A qué hora ___ a casa?", correct: "vuelves", options: ["vuelves", "buélves", "vuelvez"] },
  { sentence: "No ___ nada de eso.", correct: "sabía", options: ["sabía", "sabia", "zavía"] },
  { sentence: "___ que estudiar más.", correct: "Tienes", options: ["Tienes", "Tíenes", "Tienes"] },
  { sentence: "No me gusta esa ___", correct: "respuesta", options: ["respuesta", "respueta", "respuestas"] },
  { sentence: "Hoy es un día muy ___", correct: "especial", options: ["especial", "espesial", "espacial"] },
  { sentence: "El gato se subió al ___", correct: "árbol", options: ["árbol", "arbol", "arvól"] },
  { sentence: "¿___ estás mirando?", correct: "Qué", options: ["Qué", "Que", "Ké"] },
  { sentence: "El jefe me ___ un aumento.", correct: "dio", options: ["dio", "deó", "dió"] },
  { sentence: "Mis abuelos me ___ regalos.", correct: "trajeron", options: ["trajeron", "trageron", "trajierón"] },
  { sentence: "Ese tema ya lo ___.", correct: "estudiamos", options: ["estudiamos", "estudiámos", "estudíamos"] },
  { sentence: "No me ___ la canción.", correct: "gusta", options: ["gusta", "gústa", "gúzta"] }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let questionsOrder = [];
let nextButton = document.getElementById('next-btn');
const totalQuestions = 10;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const questionCountElement = document.getElementById('question-count');
const progressBar = document.getElementById('progress-bar');

function getRandomQuestions() {
  return [...questions].sort(() => Math.random() - 0.5).slice(0, totalQuestions);
}

function initGame() {
  score = 0;
  currentQuestionIndex = 0;
  selectedAnswer = null;
  questionsOrder = getRandomQuestions();
  questionElement.textContent = 'Cargando pregunta...';
  optionsContainer.innerHTML = '';
  feedbackElement.textContent = '';
  feedbackElement.className = 'feedback';
  progressBar.style.width = '0%';
  nextButton.replaceWith(nextButton.cloneNode(true));
  nextButton = document.getElementById('next-btn');
  nextButton.disabled = true;
  nextButton.textContent = 'Siguiente';
  updateScore();
  showQuestion();
}

function showQuestion() {
  const question = questionsOrder[currentQuestionIndex];
  questionElement.textContent = question.sentence.replace("___", "_____");
  optionsContainer.innerHTML = '';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option-btn');
    button.textContent = option;
    button.onclick = () => selectAnswer(option, button);
    optionsContainer.appendChild(button);
  });
  feedbackElement.textContent = '';
  feedbackElement.className = 'feedback';
  nextButton.disabled = true;
  nextButton.textContent = 'Siguiente';
  nextButton.onclick = nextQuestion;
  questionCountElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
}

function selectAnswer(selectedOption, button) {
  if (selectedAnswer !== null) return;
  selectedAnswer = selectedOption;
  const question = questionsOrder[currentQuestionIndex];
  const allButtons = document.querySelectorAll('.option-btn');
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === question.correct) {
      btn.classList.add('correct');
    }
  });
  if (selectedOption !== question.correct) {
    button.classList.add('incorrect');
    feedbackElement.textContent = `Incorrecto. La respuesta correcta es: "${question.correct}"`;
    feedbackElement.classList.add('incorrect');
  } else {
    score++;
    updateScore();
    feedbackElement.textContent = '¡Correcto!';
    feedbackElement.classList.add('correct');
  }
  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  selectedAnswer = null;
  if (currentQuestionIndex < questionsOrder.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function updateScore() {
  scoreElement.textContent = `Puntuación: ${score}`;
}

function endGame() {
  questionElement.textContent = `¡Juego completado! Puntuación final: ${score}/${totalQuestions}`;
  optionsContainer.innerHTML = '';
  feedbackElement.textContent = '';
  nextButton.textContent = 'Jugar de nuevo';
  nextButton.disabled = false;
  nextButton.onclick = () => location.reload();
  progressBar.style.width = '100%';
}

window.addEventListener('load', initGame);
