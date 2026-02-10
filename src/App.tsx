import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import ChapterPage from './pages/ChapterPage'

export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-64 md:shrink-0 border-r border-gray-200">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight hover:opacity-80"
          >
            📘 Cuentos Interactivos
          </Link>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
        </Routes>
      </main>
    </div>
  )
}
