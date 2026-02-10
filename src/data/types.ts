export type PalabraClave = {
  palabra: string
  traduccion: string
  posicion?: number
}

export type Capitulo = {
  id: number
  titulo: string
  genero: string
  nivel: string
  icono: string
  lectura: {
    texto: string
    palabrasClave: PalabraClave[]
  }
  escucha: {
    quiz: { pregunta: string; opciones: string[]; correcta: number }[]
  }
  escritura: {
    ejercicios: { oracion: string; respuesta: string; hint?: string }[]
  }
  practica: {
    tipo: 'match' | 'order' | 'memory'
    pares?: { ingles: string; esp: string }[]
  }
  listaVocabulario: {
    word: string
    traduccion: string
    definicion: string
    ejemplo: string
  }[]
  ilustraciones: string[]
}
