import Link from "next/link";

export default function AdminDashboardPage(){
    return(
        <div className="mx-auto max-w-5xl p-6 text-gray-900 dark:text-white">
            <div className="flex justify-between items-center border-b pb-4 border-gray-800">
                <div>
                    <span className="text-xs font-bold uppercase px-2.5 py-1 bg-red-100 100 text-red-600 dark:bg-red-950 dark:text-red-400 rounded-full">
                        Panel de Control
                    </span>
                    <h1 className="text-3xl font-extrabold mt-2">Dashboard de Administrador</h1>
                </div>
                <Link
                href="/events"
                className="text-sm px4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors font-semibold">
                    Ver Catalogo shadow
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-800 rounded-xl shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Total Eventos/Musica</h3>
                    <p className="text-2xl font-bold mt-2 text-blue-600">Activos</p>
                </div>
                <div className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Roles Autorizados</h3>
                    <p className="text-2xl font-bold mt-2 text-blue-600">Admin</p>
                </div>
                <div className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500">Estado del Sistema</h3>
                    <p className="text-2xl font-bold mt-2 text-green-600">Protegido</p>
                </div>
            </div>
            <div className="mt-8 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-4">Acciones de Gestión</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Desde aquí tienes permisos completos para supervisar catálogos.
                </p>
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors">
                        Añadir Nuevo Elemento
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-semibold transition-colors">
                        Auditar Accesos
                    </button>
                </div>
            </div>
        </div>
    )
}