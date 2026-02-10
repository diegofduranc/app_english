import { useMemo } from 'react'
import { PalabraClave } from '../data/types'

type Props = {
  texto: string
  palabras: PalabraClave[]
}

export default function ReadSection({ texto, palabras }: Props) {
  const words = useMemo(() => texto.split(/\s+/), [texto])

  const keyMap = useMemo(() => {
    const map = new Map<string, string>()
    palabras.forEach((p) => {
      map.set(p.palabra.toLowerCase(), p.traduccion)
    })
    return map
  }, [palabras])

  return (
    <article className="leading-relaxed text-gray-800">
      <p className="whitespace-pre-line text-base sm:text-lg">
        {words.map((word, index) => {
          const clean = word.replace(/[.,!?]/g, '').toLowerCase()
          const translation = keyMap.get(clean)

          if (translation) {
            return (
              <span
                key={index}
                className="group relative mx-0.5 cursor-pointer font-medium text-blue-700"
              >
                <span className="rounded bg-blue-50 px-1">
                  {word}
                </span>

                {/* Tooltip */}
                <span
                  className="
                    pointer-events-none absolute left-1/2 top-full z-10
                    mt-2 w-max -translate-x-1/2 rounded-md
                    bg-gray-900 px-2 py-1 text-xs text-white
                    opacity-0 transition
                    group-hover:opacity-100
                  "
                >
                  {translation}
                </span>{' '}
              </span>
            )
          }

          return <span key={index}> {word} </span>
        })}
      </p>
    </article>
  )
}
