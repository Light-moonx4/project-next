import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div className="mx-auto max-w-5xl p-6 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-800">
        <div>
          <span className="text-xs font-bold uppercase px-2.5 py-1 bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 rounded-full">
            Área de Usuario
          </span>
          <h1 className="text-3xl font-extrabold mt-2">Mi Panel Personal</h1>
        </div>
        <Link
          href="/events"
          className="text-sm px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors font-semibold"
        >
          Explorar Música y Eventos
        </Link>
      </div>

      <div className="mt-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-2">¡Bienvenido de nuevo!</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          Este es tu espacio personal donde puedes consultar tus canciones favoritas , además de revisar recomendaciones de cine y eventos próximos.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg mb-2">🎵 Tus Temas Recientes</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Accede rápidamente a los videos de YouTube y miembros de las bandas que visitaste últimamente.
          </p>
          <Link href="/events/linkin-park-in-the-end" className="text-sm text-blue-500 hover:underline font-semibold">
            Ver Linkin Park - In the End &rarr;
          </Link>
        </div>

        <div className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg mb-2">⚙️ Configuración de Cuenta</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Actualiza tus preferencias personales y datos de perfil de usuario.
          </p>
          <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
            Rol actual: User
          </span>
        </div>
      </div>
    </div>
  );
}