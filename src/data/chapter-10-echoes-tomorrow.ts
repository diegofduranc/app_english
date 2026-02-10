import { Capitulo } from './types'

export const chapter10: Capitulo = {
  id: 10,
  titulo: 'Echoes of Tomorrow',
  genero: 'sci-fi',
  nivel: 'advanced',
  icono: '⏳',
  lectura: {
    texto:
      "In the future, voices from tomorrow reach the present. Scientists try to understand the echoes.\n\nEach message changes small details in reality. The risk grows with every signal.\n\nOne final echo asks a question: should the future be changed?",
    palabrasClave: [
      { palabra: 'future', traduccion: 'futuro' },
      { palabra: 'voices', traduccion: 'voces' },
      { palabra: 'echoes', traduccion: 'ecos' },
      { palabra: 'reality', traduccion: 'realidad' },
      { palabra: 'risk', traduccion: 'riesgo' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'Where do the voices come from?', opciones: ['Past', 'Future', 'Dreams'], correcta: 1 },
      { pregunta: 'What changes reality?', opciones: ['Messages', 'People', 'Dreams'], correcta: 0 },
      { pregunta: 'What is the final question?', opciones: ['Who listens?', 'Should the future change?', 'When is tomorrow?'], correcta: 1 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Voices come from the ___.', respuesta: 'future' },
      { oracion: 'They hear strange ___.', respuesta: 'echoes' },
      { oracion: 'Reality starts to ___.', respuesta: 'change' },
      { oracion: 'The ___ grows.', respuesta: 'risk' },
      { oracion: 'The question is about the ___.', respuesta: 'future' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'future', esp: 'futuro' },
      { ingles: 'echoes', esp: 'ecos' },
      { ingles: 'risk', esp: 'riesgo' },
      { ingles: 'reality', esp: 'realidad' }
    ]
  },
  listaVocabulario: [
    { word: 'echo', traduccion: 'eco', definicion: 'A repeated sound.', ejemplo: 'An echo answers.' },
    { word: 'reality', traduccion: 'realidad', definicion: 'What is real.', ejemplo: 'Reality changes.' }
  ],
  ilustraciones: [
    'Futuristic city',
    'Abstract sound waves',
    'Person facing time portal'
  ]
}
