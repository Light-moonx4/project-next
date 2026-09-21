import Link from "next/link";
import { eventsData } from "@/data/events";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const event = eventsData.find((item) => item.id === id);

  if (!event) {
    return (
      <div className="mx-auto max-w-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Evento no encontrado
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          El evento que buscas no existe o fue eliminado.
        </p>
        <Link href="/events" className="text-blue-500 hover:underline text-sm">
          &larr; Volver a Eventos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
        {event.category}
      </span>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
        {event.title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{event.date}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">📍 {event.location}</p>

      <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
        {event.description}
      </p>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.date} • {event.location}</p>
      {/* Cuadro con el Video de Música (YouTube Embed) */}
      {event.youtubeId && (
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg bg-black aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${event.youtubeId}`}
            title={event.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {/* Descripción de la canción */}
      <div className="mt-6 p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Descripción de la canción</h2>
        <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
      </div>
      {/* Lista de miembros de la banda */}
      {event.bandMembers && event.bandMembers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Miembros de la banda</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {event.bandMembers.map((member:any, index:number) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Botón para volver a la lista de eventos */}
      <div className="mt-8">
        <Link href="/events" className="text-sm text-blue-500 hover:underline">
          &larr; Volver a Eventos
        </Link>
      </div>
    </div>
  );
}
