import Link from "next/link";
import { cookies } from "next/headers";

// Datos de ejemplo para las categorías (puedes adaptarlos a tus arrays reales)
const categories = [
  {
    title: "Música",
    slug: "music",
    description: "Disfruta de temas legendarios con videos integrados y composiciones de bandas.",
    image: "🎵",
    items: [
      { name: "Linkin Park - In the End", id: "linkin-park-in-the-end" },
      { name: "Skillet - Monster", id: "skillet-monster" },
      { name: "Evanescence - Bring Me to Life", id: "evanescence-bring-me-to-life" }
    ]
  },
  {
    title: "Videojuegos",
    slug: "games",
    description: "Explora torneos, lanzamientos y transmisiones en directo.",
    image: "🎮",
    items: [
      { name: "Campeonato Mundial eSports 2026", id: "esports-2026" }
    ]
  },
  {
    title: "Teatro",
    slug: "theater",
    description: "Obras clásicas, funciones de estreno y carteleras exclusivas.",
    image: "🎭",
    items: [
      { name: "El Fantasma de la Ópera", id: "fantasma-opera" }
    ]
  },
  {
    title: "Fútbol",
    slug: "football",
    description: "Partidos estelares, estadísticas y previas de encuentros.",
    image: "⚽",
    items: [
      { name: "Final de la Liga de Campeones", id: "champions-final" }
    ]
  }
];

export default async function HomePage() {
  // Verificamos en el servidor si la cookie del token existe
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  // Si hay token, los enlaces llevan directo al contenido; si no, redirigen al login
  const destinationPrefix = token ? "/events" : "/login";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white p-8">
      {/* Cabecera principal */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 border-b pb-6 border-gray-200 dark:border-gray-800">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Catálogo Global de Eventos</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Explora nuestras categorías. Inicia sesión para acceder al contenido multimedia interactivo.
          </p>
        </div>
        <div className="flex gap-3">
          {token ? (
            <Link
              href="/user/dashboard"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Mi Panel
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-semibold transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Secciones y Categorías */}
      <main className="max-w-6xl mx-auto space-y-12">
        {categories.map((cat) => (
          <section key={cat.slug} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{cat.image}</span>
              <div>
                <h2 className="text-xl font-bold">{cat.title}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cat.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {cat.items.map((item) => (
                <Link
                  key={item.id}
                  href={`${destinationPrefix}/${item.id}`}
                  className="group p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all bg-gray-50/50 dark:bg-gray-950/50"
                >
                  <h3 className="font-semibold text-sm group-hover:text-blue-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    {token ? "Ver contenido completo →" : "🔒 Inicia sesión para reproducir"}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}