import { NavBar } from './components/nav-bar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bienvenido a Moví plus CMG
          </h1>
          <p className="text-xl mb-8">
            Tu servicio de transporte de confianza en la ciudad
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg">Iniciar Sesión</Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline">Registrarse</Button>
            </Link>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Viajes Seguros</h2>
            <p>Conductores verificados y vehículos inspeccionados regularmente para tu tranquilidad.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Precios Justos</h2>
            <p>Tarifas transparentes y competitivas sin sorpresas al final del viaje.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">24/7 Disponible</h2>
            <p>Servicio disponible a cualquier hora del día, todos los días de la semana.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

