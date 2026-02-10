import { Capitulo } from './types'

export const chapter07: Capitulo = {
  id: 7,
  titulo: 'The Last Message',
  genero: 'sci-fi',
  nivel: 'intermediate',
  icono: '📡',
  lectura: {
    texto:
      "Before the system shuts down, a final message arrives. It warns about a future event.\n\nLiam reads it carefully and realizes the date is tomorrow. The city depends on this information.\n\nHe must decide if he shares the message or keeps it secret.",
    palabrasClave: [
      { palabra: 'message', traduccion: 'mensaje' },
      { palabra: 'system', traduccion: 'sistema' },
      { palabra: 'future', traduccion: 'futuro' },
      { palabra: 'date', traduccion: 'fecha' },
      { palabra: 'decide', traduccion: 'decidir' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'What arrives?', opciones: ['Call', 'Message', 'Alarm'], correcta: 1 },
      { pregunta: 'When is the event?', opciones: ['Today', 'Tomorrow', 'Next week'], correcta: 1 },
      { pregunta: 'What must Liam do?', opciones: ['Run', 'Decide', 'Sleep'], correcta: 1 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'A final ___ arrives.', respuesta: 'message' },
      { oracion: 'The ___ shuts down.', respuesta: 'system' },
      { oracion: 'The event is in the ___.', respuesta: 'future' },
      { oracion: 'The ___ is tomorrow.', respuesta: 'date' },
      { oracion: 'Liam must ___.', respuesta: 'decide' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'message', esp: 'mensaje' },
      { ingles: 'future', esp: 'futuro' },
      { ingles: 'date', esp: 'fecha' },
      { ingles: 'system', esp: 'sistema' }
    ]
  },
  listaVocabulario: [
    { word: 'system', traduccion: 'sistema', definicion: 'Set of connected parts.', ejemplo: 'The system shuts down.' },
    { word: 'decide', traduccion: 'decidir', definicion: 'Make a choice.', ejemplo: 'She decides quickly.' }
  ],
  ilustraciones: [
    'Digital screen with warning',
    'City at night',
    'Person reading a message'
  ]
}
