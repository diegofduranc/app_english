import { Capitulo } from './types'

export const chapter06: Capitulo = {
  id: 6,
  titulo: 'Shadows in the Hall',
  genero: 'mystery',
  nivel: 'intermediate',
  icono: '👁️',
  lectura: {
    texto:
      "During a school night event, Mia walks alone through a long hallway. The lights flicker and strange shadows move.\n\nShe hears soft footsteps behind her, but no one is there. Her phone loses signal.\n\nAt the end of the hall, a door slowly opens by itself.",
    palabrasClave: [
      { palabra: 'hallway', traduccion: 'pasillo' },
      { palabra: 'shadows', traduccion: 'sombras' },
      { palabra: 'footsteps', traduccion: 'pasos' },
      { palabra: 'signal', traduccion: 'señal' },
      { palabra: 'door', traduccion: 'puerta' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'Where is Mia?', opciones: ['Library', 'Hallway', 'Classroom'], correcta: 1 },
      { pregunta: 'What does she hear?', opciones: ['Music', 'Footsteps', 'Voices'], correcta: 1 },
      { pregunta: 'What opens at the end?', opciones: ['Window', 'Door', 'Locker'], correcta: 1 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Mia walks through a long ___.', respuesta: 'hallway' },
      { oracion: 'The ___ move on the walls.', respuesta: 'shadows' },
      { oracion: 'She hears ___.', respuesta: 'footsteps' },
      { oracion: 'Her phone loses ___.', respuesta: 'signal' },
      { oracion: 'A ___ opens slowly.', respuesta: 'door' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'hallway', esp: 'pasillo' },
      { ingles: 'shadows', esp: 'sombras' },
      { ingles: 'signal', esp: 'señal' },
      { ingles: 'door', esp: 'puerta' }
    ]
  },
  listaVocabulario: [
    { word: 'hallway', traduccion: 'pasillo', definicion: 'Long passage in a building.', ejemplo: 'The hallway is dark.' },
    { word: 'flicker', traduccion: 'parpadear', definicion: 'Light turning on and off.', ejemplo: 'The lights flicker.' },
    { word: 'footsteps', traduccion: 'pasos', definicion: 'Sound of walking.', ejemplo: 'She hears footsteps.' }
  ],
  ilustraciones: [
    'Dark school hallway',
    'Moving shadows on walls',
    'Door opening slowly'
  ]
}
