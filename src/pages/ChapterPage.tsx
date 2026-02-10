import { useParams, useNavigate } from 'react-router-dom'
import { chapters } from '../data/chapters'
import ReadSection from '../components/ReadSection'
import ListenSection from '../components/ListenSection'
import WriteSection from '../components/WriteSection'
import PracticeSection from '../components/PracticeSection'
import ProgressBar from '../components/ProgressBar'
import { useProgress } from '../hooks/useProgress'

export default function ChapterPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const chapter = chapters.find((c) => String(c.id) === id)
  const { markChapterComplete } = useProgress()

  if (!chapter) {
    return (
      <div className="p-10 text-center text-gray-500">
        Chapter not found
      </div>
    )
  }

  const handleComplete = () => {
    // 1️⃣ marcar progreso
    markChapterComplete(chapter.id, 4)

    // 2️⃣ buscar siguiente capítulo
    const currentIndex = chapters.findIndex(
      (c) => c.id === chapter.id
    )
    const nextChapter = chapters[currentIndex + 1]

    // 3️⃣ navegar
    if (nextChapter) {
      navigate(`/chapter/${nextChapter.id}`)
    } else {
      navigate('/') // último capítulo
    }
  }

  return (
    <div className="mx-auto max-w-4xl p-6 space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {chapter.icono} {chapter.titulo}
            </h1>
            <p className="mt-1 text-sm text-gray-500 capitalize">
              {chapter.genero} · {chapter.nivel}
            </p>
          </div>

          <div className="w-full sm:w-1/3">
            <ProgressBar value={30} />
          </div>
        </div>
      </header>

      {/* Sections */}
      <section className="space-y-8">
        <ContentBlock title="1. Read">
          <ReadSection
            texto={chapter.lectura.texto}
            palabras={chapter.lectura.palabrasClave}
          />
        </ContentBlock>

        <ContentBlock title="2. Listen">
          <ListenSection
            texto={chapter.lectura.texto}
            quiz={chapter.escucha.quiz}
          />
        </ContentBlock>

        <ContentBlock title="3. Write">
          <WriteSection ejercicios={chapter.escritura.ejercicios} />
        </ContentBlock>

        <ContentBlock title="4. Practice">
          <PracticeSection pares={chapter.practica.pares || []} />
        </ContentBlock>
      </section>

      {/* Footer */}
      <div className="flex justify-end pt-6 border-t border-gray-200">
        <button
          onClick={handleComplete}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
        >
          Mark chapter as completed ✓
        </button>
      </div>
    </div>
  )
}

/* ---------- Helper ---------- */
function ContentBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        {title}
      </h2>
      {children}
    </div>
  )
}
