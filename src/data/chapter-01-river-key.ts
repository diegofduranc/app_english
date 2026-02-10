import { Capitulo } from './types'

export const chapter01: Capitulo = {
  id: 1,
  titulo: 'The River Key',
  genero: 'mystery',
  nivel: 'beginner',
  icono: '🔑',
  lectura: {
    texto:
      "Asha found a small metal key under a loose stone beside the river. The key was cold and shiny, and it had a tiny star engraved on its head. Wind moved the grass while she studied the strange object.\n\nShe kept the key in her pocket and walked home, thinking about where it might fit. At night, she dreamed of doors that opened to secret rooms full of light and music. The dream felt both real and hopeful.\n\nThe next morning, Asha returned to the river. Near the roots of an old tree, a wooden chest showed its edge. The key fit perfectly into the small lock. Inside there was a map with strange symbols and a note that said, 'Keep looking.' Asha smiled; an adventure was beginning. She felt brave and a little scared, but ready to explore.",
    palabrasClave: [
      { palabra: 'key', traduccion: 'llave', posicion: 5 },
      { palabra: 'river', traduccion: 'río', posicion: 12 },
      { palabra: 'chest', traduccion: 'cofre' },
      { palabra: 'map', traduccion: 'mapa' },
      { palabra: 'adventure', traduccion: 'aventura' }
    ]
  },
  escucha: {
    quiz: [
      {
        pregunta: 'Where did Asha find the key?',
        opciones: ['Under a stone', 'On a table', 'In a box'],
        correcta: 0
      },
      {
        pregunta: 'What was on the key?',
        opciones: ['A star', 'A number', 'A name'],
        correcta: 0
      },
      {
        pregunta: 'What did the key open?',
        opciones: ['A door', 'A chest', 'A drawer'],
        correcta: 1
      }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Asha found a small metal ___.', respuesta: 'key' },
      { oracion: 'The key was near the ___.', respuesta: 'river' },
      { oracion: 'The chest was under a ___.', respuesta: 'tree' },
      { oracion: 'Inside there was a ___.', respuesta: 'map' },
      { oracion: 'An ___ was beginning.', respuesta: 'adventure' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'key', esp: 'llave' },
      { ingles: 'river', esp: 'río' },
      { ingles: 'map', esp: 'mapa' },
      { ingles: 'chest', esp: 'cofre' }
    ]
  },
  listaVocabulario: [
    { word: 'key', traduccion: 'llave', definicion: 'Used to open locks.', ejemplo: 'She used the key.' },
    { word: 'river', traduccion: 'río', definicion: 'Natural water flow.', ejemplo: 'The river is cold.' },
    { word: 'chest', traduccion: 'cofre', definicion: 'A strong box.', ejemplo: 'The chest was old.' },
    { word: 'map', traduccion: 'mapa', definicion: 'Shows places.', ejemplo: 'The map was strange.' }
  ],
  ilustraciones: [
    'Metal key near a river stone',
    'Girl holding a key by the river',
    'Old chest hidden by tree roots'
  ]
}
