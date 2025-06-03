//questions
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
  { sentence: "La ___ del libro es muy original.", correct: "portada", options: ["portada", "portata", "pórtada"] },
  { sentence: "No puedo ___ lo que pasó ayer.", correct: "recordar", options: ["recordar", "recodar", "recordár"] },
  { sentence: "El médico me recetó unas ___", correct: "pastillas", options: ["pastillas", "pastiyas", "pastilas"] },
  { sentence: "Vamos a ___ el autobús en la próxima parada.", correct: "tomar", options: ["tomar", "tomal", "tomár"] },
  { sentence: "El niño ___ su juguete favorito.", correct: "perdió", options: ["perdió", "perdio", "perdíó"] },
  { sentence: "Necesito ___ bien esta noche.", correct: "dormir", options: ["dormir", "dormil", "dormír"] },
  { sentence: "La ___ del hotel era muy cómoda.", correct: "habitación", options: ["habitación", "abitación", "habitasió"] },
  { sentence: "El avión ___ con retraso.", correct: "aterrizó", options: ["aterrizó", "aterrisó", "aterrizo"] },
  { sentence: "Compré un ___ de pan fresco.", correct: "bollo", options: ["bollo", "boyo", "bolo"] },
  { sentence: "La reunión ___ más de lo esperado.", correct: "duró", options: ["duró", "duro", "duróo"] },
  { sentence: "Voy a ___ un café, ¿quieres uno?", correct: "preparar", options: ["preparar", "preparál", "preparar"] },
  { sentence: "El teléfono ___ sin parar.", correct: "sonó", options: ["sonó", "sono", "sonóó"] },
  { sentence: "La ___ del museo es impresionante.", correct: "colección", options: ["colección", "colecsión", "colecion"] },
  { sentence: "___ demasiado para llegar temprano.", correct: "Corrí", options: ["Corrí", "Corri", "Corríí"] },
  { sentence: "El pastel tiene un ___ delicioso.", correct: "sabor", options: ["sabor", "sabol", "sabór"] },
  { sentence: "La ___ del río es peligrosa.", correct: "corriente", options: ["corriente", "coriente", "corriente"] },
  { sentence: "___ mi mejor esfuerzo en el proyecto.", correct: "Puse", options: ["Puse", "Puze", "Pusé"] },
  { sentence: "El concierto ___ a las ocho.", correct: "comenzó", options: ["comenzó", "comenso", "comenzóo"] },
  { sentence: "Necesito ___ estas facturas.", correct: "pagar", options: ["pagar", "pagal", "pagár"] },
  { sentence: "La ___ de la montaña fue agotadora.", correct: "subida", options: ["subida", "subída", "suvida"] },
  { sentence: "El policía ___ el tráfico con eficiencia.", correct: "dirigió", options: ["dirigió", "dirijió", "dirigio"] },
  { sentence: "La sopa está ___", correct: "fría", options: ["fría", "fria", "fríá"] },
  { sentence: "___ mucho frío en invierno.", correct: "Hace", options: ["Hace", "Ase", "Hase"] },
  { sentence: "El equipo ___ el partido por un punto.", correct: "ganó", options: ["ganó", "gano", "ganóo"] },
  { sentence: "Vamos a ___ una película esta noche.", correct: "ver", options: ["ver", "vel", "vér"] },
  { sentence: "El jardín está lleno de ___", correct: "flores", options: ["flores", "flóres", "florez"] },
  { sentence: "___ una carta a mi abuela.", correct: "Escribí", options: ["Escribí", "Escribi", "Eskribí"] },
  { sentence: "El bebé ___ toda la noche.", correct: "lloró", options: ["lloró", "yoro", "lloro"] },
  { sentence: "La ___ del edificio es moderna.", correct: "fachada", options: ["fachada", "fachata", "fashada"] },
  { sentence: "___ las llaves en la mesa.", correct: "Dejé", options: ["Dejé", "Deje", "Dejéé"] },
  { sentence: "El chef ___ un plato exquisito.", correct: "preparó", options: ["preparó", "preparo", "preparóó"] },
  { sentence: "La ___ del árbol es muy gruesa.", correct: "corteza", options: ["corteza", "cortesa", "cortesa"] },
  { sentence: "___ mi maleta para el viaje.", correct: "Hice", options: ["Hice", "Hise", "Híce"] },
  { sentence: "El sol ___ muy fuerte hoy.", correct: "brilla", options: ["brilla", "brija", "brílla"] },
  { sentence: "La ___ del problema es compleja.", correct: "solución", options: ["solución", "solusión", "solucion"] },
  { sentence: "___ un regalo para tu cumpleaños.", correct: "Compré", options: ["Compré", "Compre", "Konpré"] },
  { sentence: "El agua ___ a hervir.", correct: "comenzó", options: ["comenzó", "comenso", "comenzóo"] },
  { sentence: "La ___ del bosque es mágica.", correct: "atmósfera", options: ["atmósfera", "atmósfera", "atmósfera"] },
  { sentence: "___ mucho tiempo en el parque.", correct: "Pasé", options: ["Pasé", "Pase", "Paséé"] },
  { sentence: "El viento ___ con fuerza.", correct: "sopló", options: ["sopló", "soplo", "soplóó"] },
  { sentence: "La ___ del coche está pinchada.", correct: "rueda", options: ["rueda", "rrueda", "rueda"] },
  { sentence: "___ una pregunta al profesor.", correct: "Hice", options: ["Hice", "Hise", "Híce"] },
  { sentence: "El niño ___ su tarea con cuidado.", correct: "hizo", options: ["hizo", "hiso", "hízo"] },
  { sentence: "La ___ del reloj es precisa.", correct: "hora", options: ["hora", "ora", "hóra"] },
  { sentence: "___ una foto del paisaje.", correct: "Saqué", options: ["Saqué", "Sake", "Saquéé"] },
  { sentence: "El pájaro ___ hermosamente.", correct: "cantó", options: ["cantó", "canto", "kantó"] },
  { sentence: "La ___ del teatro estaba llena.", correct: "sala", options: ["sala", "zala", "sála"] },
  { sentence: "___ mi mejor camisa para la fiesta.", correct: "Usé", options: ["Usé", "Use", "Uséé"] },
  { sentence: "El tren ___ a tiempo.", correct: "llegó", options: ["llegó", "yegó", "llegóo"] },
  { sentence: "La ___ del restaurante es excelente.", correct: "comida", options: ["comida", "komida", "comída"] },
  { sentence: "___ atención a las instrucciones.", correct: "Presté", options: ["Presté", "Preste", "Prestéé"] },
  { sentence: "El barco ___ en el horizonte.", correct: "apareció", options: ["apareció", "aparesió", "aparecio"] },
  { sentence: "La ___ del vestido es elegante.", correct: "tela", options: ["tela", "tella", "téla"] },
  { sentence: "___ mi bicicleta al parque.", correct: "Llevé", options: ["Llevé", "Yeve", "Llevéé"] },
  { sentence: "El médico ___ al paciente con cuidado.", correct: "examinó", options: ["examinó", "examino", "examinóó"] },
  { sentence: "La ___ del cuento es emocionante.", correct: "trama", options: ["trama", "trama", "trama"] },
  { sentence: "___ las ventanas porque hacía frío.", correct: "Cerré", options: ["Cerré", "Serré", "Cerréé"] },
  { sentence: "El gato ___ en el sofá todo el día.", correct: "durmió", options: ["durmió", "durmió", "durmió"] },
  { sentence: "La ___ del examen fue difícil.", correct: "pregunta", options: ["pregunta", "pregunta", "pregunta"] },
  { sentence: "___ una canción en la ducha.", correct: "Canté", options: ["Canté", "Kanté", "Cantéé"] },
  { sentence: "El sol ___ por el oeste.", correct: "se pone", options: ["se pone", "se pone", "se pone"] },
  { sentence: "La ___ del niño era conmovedora.", correct: "sonrisa", options: ["sonrisa", "sonrisa", "sonrisa"] },
  { sentence: "___ mi teléfono en silencio.", correct: "Puse", options: ["Puse", "Puse", "Puse"] },
  { sentence: "El chef ___ los ingredientes con habilidad.", correct: "mezcló", options: ["mezcló", "mescló", "mezcló"] },
  { sentence: "La ___ del poema es profunda.", correct: "rima", options: ["rima", "rima", "rima"] },
  { sentence: "___ mi nombre en la lista.", correct: "Escribí", options: ["Escribí", "Escribí", "Escribí"] },
  { sentence: "El viento ___ las hojas de los árboles.", correct: "movió", options: ["movió", "movió", "movió"] },
  { sentence: "La ___ del médico fue acertada.", correct: "diagnóstico", options: ["diagnóstico", "diagnóstico", "diagnóstico"] },
  { sentence: "___ flores para mi madre.", correct: "Corté", options: ["Corté", "Corté", "Corté"] },
  { sentence: "El reloj ___ la medianoche.", correct: "marcó", options: ["marcó", "marcó", "marcó"] },
  { sentence: "La ___ del bosque es fresca.", correct: "brisa", options: ["brisa", "brisa", "brisa"] },
  { sentence: "___ mi chaqueta porque hacía frío.", correct: "Usé", options: ["Usé", "Usé", "Usé"] },
  { sentence: "El niño ___ la pelota con fuerza.", correct: "pateó", options: ["pateó", "pateó", "pateó"] },
  { sentence: "La ___ del artista es reconocida.", correct: "obra", options: ["obra", "obra", "obra"] },
  { sentence: "___ un mensaje a mi amigo.", correct: "Envié", options: ["Envié", "Envié", "Envié"] },
  { sentence: "El café ___ un aroma delicioso.", correct: "despedía", options: ["despedía", "despedía", "despedía"] },
  { sentence: "La ___ del hotel era impecable.", correct: "limpieza", options: ["limpieza", "limpieza", "limpieza"] },
  { sentence: "___ mi maleta con cuidado.", correct: "Empaqué", options: ["Empaqué", "Empaqué", "Empaqué"] },
  { sentence: "El profesor ___ la lección claramente.", correct: "explicó", options: ["explicó", "explicó", "explicó"] },
  { sentence: "La ___ del río es cristalina.", correct: "agua", options: ["agua", "agua", "agua"] },
  { sentence: "___ mi bicicleta los domingos.", correct: "Limpio", options: ["Limpio", "Limpio", "Limpio"] },
  { sentence: "El concierto ___ a las nueve.", correct: "terminó", options: ["terminó", "terminó", "terminó"] },
  { sentence: "La ___ del museo es imponente.", correct: "entrada", options: ["entrada", "entrada", "entrada"] },
  { sentence: "___ una mentira piadosa.", correct: "Dije", options: ["Dije", "Dije", "Dije"] },
  { sentence: "El bebé ___ su primer diente.", correct: "salió", options: ["salió", "salió", "salió"] },
  { sentence: "La ___ del pastel es esponjosa.", correct: "textura", options: ["textura", "textura", "textura"] },
  { sentence: "___ mi mejor esfuerzo.", correct: "Hice", options: ["Hice", "Hice", "Hice"] },
  { sentence: "El policía ___ el tráfico eficientemente.", correct: "dirigió", options: ["dirigió", "dirigió", "dirigió"] },
  { sentence: "La ___ del bosque es misteriosa.", correct: "oscuridad", options: ["oscuridad", "oscuridad", "oscuridad"] },
  { sentence: "___ mi tarea antes de salir.", correct: "Terminé", options: ["Terminé", "Terminé", "Terminé"] },
  { sentence: "El avión ___ en la pista.", correct: "aterrizó", options: ["aterrizó", "aterrizó", "aterrizó"] },
  { sentence: "La ___ del vino es intensa.", correct: "fragancia", options: ["fragancia", "fragancia", "fragancia"] },
  { sentence: "___ mi número de teléfono.", correct: "Cambié", options: ["Cambié", "Cambié", "Cambié"] },
  { sentence: "El sol ___ al amanecer.", correct: "apareció", options: ["apareció", "apareció", "apareció"] },
  { sentence: "La ___ del niño era contagiosa.", correct: "alegría", options: ["alegría", "alegría", "alegría"] },
  { sentence: "___ mi casa para las vacaciones.", correct: "Decoré", options: ["Decoré", "Decoré", "Decoré"] },
  { sentence: "El perro ___ su hueso enterrado.", correct: "encontró", options: ["encontró", "encontró", "encontró"] },
  { sentence: "La ___ del mar es relajante.", correct: "brisa", options: ["brisa", "brisa", "brisa"] },
  { sentence: "___ una película de terror.", correct: "Ví", options: ["Ví", "Ví", "Ví"] },
  { sentence: "El chef ___ la receta a la perfección.", correct: "siguió", options: ["siguió", "siguió", "siguió"] },
  { sentence: "La ___ del poema es hermosa.", correct: "estructura", options: ["estructura", "estructura", "estructura"] },
  { sentence: "___ mi bicicleta en el garaje.", correct: "Guardé", options: ["Guardé", "Guardé", "Guardé"] },
  { sentence: "El viento ___ las nubes rápidamente.", correct: "movió", options: ["movió", "movió", "movió"] },
  { sentence: "La ___ del médico fue rápida.", correct: "respuesta", options: ["respuesta", "respuesta", "respuesta"] },
  { sentence: "___ un regalo sorpresa.", correct: "Preparé", options: ["Preparé", "Preparé", "Preparé"] },
  { sentence: "El reloj ___ las tres en punto.", correct: "marcó", options: ["marcó", "marcó", "marcó"] },
  { sentence: "La ___ del bosque es fresca.", correct: "sombra", options: ["sombra", "sombra", "sombra"] },
  { sentence: "___ mi chaqueta favorita.", correct: "Usé", options: ["Usé", "Usé", "Usé"] },
  { sentence: "El niño ___ un dibujo hermoso.", correct: "hizo", options: ["hizo", "hizo", "hizo"] },
  { sentence: "La ___ del artista es famosa.", correct: "firma", options: ["firma", "firma", "firma"] },
  { sentence: "___ un mensaje importante.", correct: "Recibí", options: ["Recibí", "Recibí", "Recibí"] },
  { sentence: "El café ___ por toda la mesa.", correct: "se derramó", options: ["se derramó", "se derramó", "se derramó"] },
  { sentence: "La ___ del hotel es excelente.", correct: "vista", options: ["vista", "vista", "vista"] },
  { sentence: "___ mis maletas con anticipación.", correct: "Hice", options: ["Hice", "Hice", "Hice"] },
  { sentence: "El profesor ___ los exámenes rápidamente.", correct: "calificó", options: ["calificó", "calificó", "calificó"] },
  { sentence: "La ___ del río es peligrosa.", correct: "corriente", options: ["corriente", "corriente", "corriente"] },
  { sentence: "___ mi bicicleta todos los días.", correct: "Uso", options: ["Uso", "Uso", "Uso"] },
  { sentence: "El concierto ___ con fuegos artificiales.", correct: "terminó", options: ["terminó", "terminó", "terminó"] },
  { sentence: "La ___ del museo es gratuita.", correct: "visita", options: ["visita", "visita", "visita"] },
  { sentence: "___ una historia interesante.", correct: "Conté", options: ["Conté", "Conté", "Conté"] },
  { sentence: "El bebé ___ toda la leche.", correct: "tomó", options: ["tomó", "tomó", "tomó"] },
  { sentence: "La ___ del pastel es perfecta.", correct: "cubierta", options: ["cubierta", "cubierta", "cubierta"] },
  { sentence: "___ mi mejor intención.", correct: "Tuve", options: ["Tuve", "Tuve", "Tuve"] },
  { sentence: "El policía ___ la situación con calma.", correct: "manejó", options: ["manejó", "manejó", "manejó"] },
  { sentence: "La ___ del bosque es espesa.", correct: "vegetación", options: ["vegetación", "vegetación", "vegetación"] },
  { sentence: "___ mi trabajo a tiempo.", correct: "Entregué", options: ["Entregué", "Entregué", "Entregué"] },
  { sentence: "El avión ___ sin problemas.", correct: "despegó", options: ["despegó", "despegó", "despegó"] },
  { sentence: "La ___ del vino es añeja.", correct: "botella", options: ["botella", "botella", "botella"] },
  { sentence: "___ mi dirección de correo.", correct: "Actualicé", options: ["Actualicé", "Actualicé", "Actualicé"] },
  { sentence: "El sol ___ tras las montañas.", correct: "desapareció", options: ["desapareció", "desapareció", "desapareció"] },
  { sentence: "La ___ del niño era evidente.", correct: "emoción", options: ["emoción", "emoción", "emoción"] },
  { sentence: "___ mi sala de estar.", correct: "Renové", options: ["Renové", "Renové", "Renové"] },
  { sentence: "El perro ___ su juguete roto.", correct: "llevó", options: ["llevó", "llevó", "llevó"] },
  { sentence: "La ___ del mar es salada.", correct: "brisa", options: ["brisa", "brisa", "brisa"] },
  { sentence: "___ una película clásica.", correct: "Ví", options: ["Ví", "Ví", "Ví"] },
  { sentence: "El chef ___ los sabores armoniosamente.", correct: "combinó", options: ["combinó", "combinó", "combinó"] },
  { sentence: "La ___ del poema es compleja.", correct: "métrica", options: ["métrica", "métrica", "métrica"] },
  { sentence: "___ mi bicicleta en el sótano.", correct: "Guardé", options: ["Guardé", "Guardé", "Guardé"] },
  { sentence: "El viento ___ las ramas de los árboles.", correct: "mecía", options: ["mecía", "mecía", "mecía"] },
  { sentence: "La ___ del médico fue acertada.", correct: "decisión", options: ["decisión", "decisión", "decisión"] },
  { sentence: "___ un regalo especial.", correct: "Conseguí", options: ["Conseguí", "Conseguí", "Conseguí"] },
  { sentence: "El reloj ___ la hora exacta.", correct: "marcaba", options: ["marcaba", "marcaba", "marcaba"] },
  { sentence: "La ___ del bosque es húmeda.", correct: "tierra", options: ["tierra", "tierra", "tierra"] },
  { sentence: "___ mi abrigo más cálido.", correct: "Usé", options: ["Usé", "Usé", "Usé"] },
  { sentence: "El niño ___ una torre alta.", correct: "construyó", options: ["construyó", "construyó", "construyó"] },
  { sentence: "La ___ del artista es valiosa.", correct: "colección", options: ["colección", "colección", "colección"] },
  { sentence: "___ un mensaje urgente.", correct: "Envié", options: ["Envié", "Envié", "Envié"] },
  { sentence: "El café ___ un sabor amargo.", correct: "tenía", options: ["tenía", "tenía", "tenía"] },
  { sentence: "La ___ del hotel es amplia.", correct: "habitación", options: ["habitación", "habitación", "habitación"] },
  { sentence: "___ mis deberes con responsabilidad.", correct: "Hice", options: ["Hice", "Hice", "Hice"] },
  { sentence: "El profesor ___ la pregunta claramente.", correct: "respondió", options: ["respondió", "respondió", "respondió"] },
  { sentence: "La ___ del río es tranquila.", correct: "superficie", options: ["superficie", "superficie", "superficie"] },
  { sentence: "___ mi bicicleta por el parque.", correct: "Paseé", options: ["Paseé", "Paseé", "Paseé"] },
  { sentence: "El concierto ___ con una canción lenta.", correct: "finalizó", options: ["finalizó", "finalizó", "finalizó"] },
  { sentence: "La ___ del museo es interactiva.", correct: "exhibición", options: ["exhibición", "exhibición", "exhibición"] },
  { sentence: "___ un chiste gracioso.", correct: "Conté", options: ["Conté", "Conté", "Conté"] },
  { sentence: "El bebé ___ su primer paso.", correct: "dio", options: ["dio", "dio", "dio"] },
  { sentence: "La ___ del pastel es crujiente.", correct: "base", options: ["base", "base", "base"] },
  { sentence: "___ todo lo posible.", correct: "Intenté", options: ["Intenté", "Intenté", "Intenté"] }
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
