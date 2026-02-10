import { useEffect, useState } from 'react'

type Progress = {
  completedChapters: number[]
  starsByChapter: Record<number, number>
}

const STORAGE_KEY = 'cuentos_progress_v1'

const defaultProgress: Progress = { completedChapters: [], starsByChapter: {} }

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : defaultProgress
    } catch {
      return defaultProgress
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markChapterComplete = (id: number, stars = 3) => {
    setProgress((p) => {
      const comps = p.completedChapters.includes(id) ? p.completedChapters : [...p.completedChapters, id]
      const starsByChapter = { ...p.starsByChapter, [id]: Math.max(p.starsByChapter[id] || 0, stars) }
      return { completedChapters: comps, starsByChapter }
    })
  }

  const reset = () => setProgress(defaultProgress)

  return { progress, markChapterComplete, reset }
}
