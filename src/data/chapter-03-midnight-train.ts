import { Capitulo } from './types'

export const chapter03: Capitulo = {
  id: 3,
  titulo: 'Midnight Train',
  genero: 'thriller',
  nivel: 'beginner',
  icono: '🚆',
  lectura: {
    texto:
      "Leo waits alone on a train platform at midnight. The air is cold and the station is silent.\n\nWhen the train arrives, the doors open but no one comes out. Inside, the lights flicker and the seats are empty.\n\nA screen turns on and shows a message: 'Do not leave your seat.' The train moves fast into a dark tunnel.",
    palabrasClave: [
      { palabra: 'train', traduccion: 'tren' },
      { palabra: 'platform', traduccion: 'andén' },
      { palabra: 'midnight', traduccion: 'medianoche' },
      { palabra: 'message', traduccion: 'mensaje' },
      { palabra: 'tunnel', traduccion: 'túnel' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'Where is Leo waiting?', opciones: ['Platform', 'Bus stop', 'Street'], correcta: 0 },
      { pregunta: 'What is strange about the train?', opciones: ['It is old', 'It is empty', 'It is broken'], correcta: 1 },
      { pregunta: 'What does the screen say?', opciones: ['Run', 'Stay seated', 'Get off'], correcta: 1 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Leo waits on the train ___.', respuesta: 'platform' },
      { oracion: 'The train arrives at ___.', respuesta: 'midnight' },
      { oracion: 'The seats are ___.', respuesta: 'empty' },
      { oracion: 'A ___ appears on the screen.', respuesta: 'message' },
      { oracion: 'The train enters a ___.', respuesta: 'tunnel' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'train', esp: 'tren' },
      { ingles: 'platform', esp: 'andén' },
      { ingles: 'message', esp: 'mensaje' },
      { ingles: 'tunnel', esp: 'túnel' }
    ]
  },
  listaVocabulario: [
    { word: 'platform', traduccion: 'andén', definicion: 'Place to wait for trains.', ejemplo: 'He stands on the platform.' },
    { word: 'empty', traduccion: 'vacío', definicion: 'With nothing inside.', ejemplo: 'The train is empty.' },
    { word: 'message', traduccion: 'mensaje', definicion: 'Written information.', ejemplo: 'She reads the message.' },
    { word: 'tunnel', traduccion: 'túnel', definicion: 'Underground passage.', ejemplo: 'The train enters the tunnel.' }
  ],
  ilustraciones: [
    'Empty train platform at night',
    'Dark train interior',
    'Train entering a tunnel'
  ]
}
