// Banco de preguntas
const questions = [
  {
    sentence: "El niño ___ su tarea cuidadosamente.",
    correct: "hizo",
    options: ["hizo", "izo", "hiso"]
  },
  {
    sentence: "Vamos a ___ el examen mañana.",
    correct: "hacer",
    options: ["hacer", "aser", "haser"]
  },
  {
    sentence: "El cielo está ___ nublado hoy.",
    correct: "muy",
    options: ["muy", "mui", "muí"]
  },
  {
    sentence: "___ importante estudiar para el examen.",
    correct: "Es",
    options: ["Es", "Ez", "Hez"]
  },
  {
    sentence: "La ___ del libro es muy interesante.",
    correct: "historia",
    options: ["historia", "istoría", "histeria"]
  },
  {
    sentence: "Me gusta el ___ de manzana.",
    correct: "jugo",
    options: ["jugo", "hugo", "juego"]
  },
  {
    sentence: "El ___ de la montaña es impresionante.",
    correct: "vista",
    options: ["vista", "bista", "vihta"]
  },
  {
    sentence: "___ a la fiesta el sábado.",
    correct: "Voy",
    options: ["Voy", "Boi", "Boy"]
  },
  {
    sentence: "Necesito ___ agua por favor.",
    correct: "un vaso de",
    options: ["un vaso de", "un baso de", "un vaso e"]
  },
  {
    sentence: "Ella ___ muy bien el piano.",
    correct: "toca",
    options: ["toca", "toka", "tocá"]
  },
  {
    sentence: "El ___ de fútbol fue emocionante.",
    correct: "partido",
    options: ["partido", "partío", "partdo"]
  },
  {
    sentence: "___ el libro que me recomendaste.",
    correct: "He leído",
    options: ["He leído", "E leído", "He leido"]
  },
  {
    sentence: "La ___ del museo es gratis los domingos.",
    correct: "entrada",
    options: ["entrada", "entra", "entradá"]
  },
  {
    sentence: "___ frío hoy, necesito abrigo.",
    correct: "Hace",
    options: ["Hace", "Ase", "Haze"]
  },
  {
    sentence: "El ___ del coche es muy cómodo.",
    correct: "asiento",
    options: ["asiento", "aciento", "asiénto"]
  }
];

// Variables del juego
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let questionsOrder = [];
const totalQuestions = 10;

// Elementos del DOM
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const questionCountElement = document.getElementById('question-count');
const progressBar = document.getElementById('progress-bar');

// Función para mezclar array (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Inicializar el juego
function initGame() {
  score = 0;
  currentQuestionIndex = 0;
  selectedAnswer = null;
  
  // Mezclar preguntas y seleccionar las primeras 10 sin repetición
  questionsOrder = shuffleArray([...questions]).slice(0, totalQuestions);
  
  updateScore();
  showQuestion();
}

// Mostrar pregunta actual
function showQuestion() {
  const question = questionsOrder[currentQuestionIndex];
  questionElement.textContent = question.sentence.replace("___", "_____");
  
  // Mezclar opciones
  const shuffledOptions = shuffleArray([...question.options]);
  
  optionsContainer.innerHTML = '';
  
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option-btn');
    button.textContent = option;
    button.addEventListener('click', () => selectAnswer(option, button));
    optionsContainer.appendChild(button);
  });
  
  feedbackElement.textContent = '';
  feedbackElement.className = 'feedback';
  nextButton.disabled = true;
  nextButton.textContent = 'Siguiente';
  
  questionCountElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
}

// Seleccionar respuesta
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

// Siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;
  selectedAnswer = null;
  
  if (currentQuestionIndex < questionsOrder.length) {
    showQuestion();
  } else {
    endGame();
  }
}

// Actualizar puntuación
function updateScore() {
  scoreElement.textContent = `Puntuación: ${score}`;
}

// Finalizar juego
function endGame() {
  questionElement.textContent = `¡Juego completado! Puntuación final: ${score}/${totalQuestions}`;
  optionsContainer.innerHTML = '';
  feedbackElement.textContent = '';
  nextButton.textContent = 'Jugar de nuevo';
  nextButton.disabled = false;
  nextButton.onclick = initGame;
  progressBar.style.width = '100%';
}

// Event listeners
nextButton.addEventListener('click', () => {
  if (nextButton.textContent === 'Jugar de nuevo') {
    initGame();
  } else {
    nextQuestion();
  }
});

// Iniciar el juego al cargar la página
window.addEventListener('load', initGame);
