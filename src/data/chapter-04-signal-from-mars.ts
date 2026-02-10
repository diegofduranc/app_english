import { Capitulo } from './types'

export const chapter04: Capitulo = {
  id: 4,
  titulo: 'Signal from Mars',
  genero: 'sci-fi',
  nivel: 'beginner',
  icono: '🛰️',
  lectura: {
    texto:
      "Nina works late at a small space station. One night, her screen shows a strange signal.\n\nThe signal comes from Mars and repeats the same pattern again and again. Nina feels excited and scared.\n\nShe sends a reply. A new message appears: 'We are not alone.'",
    palabrasClave: [
      { palabra: 'signal', traduccion: 'señal' },
      { palabra: 'screen', traduccion: 'pantalla' },
      { palabra: 'Mars', traduccion: 'Marte' },
      { palabra: 'message', traduccion: 'mensaje' },
      { palabra: 'alone', traduccion: 'solo' }
    ]
  },
  escucha: {
    quiz: [
      { pregunta: 'Where does Nina work?', opciones: ['School', 'Space station', 'Lab'], correcta: 1 },
      { pregunta: 'Where is the signal from?', opciones: ['Moon', 'Mars', 'Earth'], correcta: 1 },
      { pregunta: 'What does the message say?', opciones: ['Hello', 'Run', 'We are not alone'], correcta: 2 }
    ]
  },
  escritura: {
    ejercicios: [
      { oracion: 'Nina works at a space ___.', respuesta: 'station' },
      { oracion: 'The ___ comes from Mars.', respuesta: 'signal' },
      { oracion: 'She sees it on a ___.', respuesta: 'screen' },
      { oracion: 'She sends a ___.', respuesta: 'reply' },
      { oracion: 'Humans are not ___.', respuesta: 'alone' }
    ]
  },
  practica: {
    tipo: 'match',
    pares: [
      { ingles: 'signal', esp: 'señal' },
      { ingles: 'screen', esp: 'pantalla' },
      { ingles: 'Mars', esp: 'Marte' },
      { ingles: 'message', esp: 'mensaje' }
    ]
  },
  listaVocabulario: [
    { word: 'signal', traduccion: 'señal', definicion: 'A transmitted sign.', ejemplo: 'The signal is strong.' },
    { word: 'station', traduccion: 'estación', definicion: 'Place for work or travel.', ejemplo: 'The station is small.' },
    { word: 'reply', traduccion: 'respuesta', definicion: 'An answer.', ejemplo: 'She sends a reply.' },
    { word: 'alone', traduccion: 'solo', definicion: 'Without others.', ejemplo: 'He feels alone.' }
  ],
  ilustraciones: [
    'Space station interior',
    'Screen with alien signal',
    'Planet Mars in space'
  ]
}
