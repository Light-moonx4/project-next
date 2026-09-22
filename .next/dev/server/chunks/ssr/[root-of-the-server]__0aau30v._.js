module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/events/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventsAside$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/events/EventsAside.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/events.ts [app-rsc] (ecmascript)");
;
;
;
;
async function EventsPage({ searchParams }) {
    const { category } = await searchParams;
    const displayList = category && category !== "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventsData"].filter((event)=>event.category === category) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eventsData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl p-6 flex flex-col md:flex-row gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$events$2f$EventsAside$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                activeCategory: category ?? "all"
            }, void 0, false, {
                fileName: "[project]/src/app/events/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900 dark:text-white",
                                children: "Lista de Eventos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 mt-1",
                                children: "Selecciona un evento para ver más información y adquirir entradas."
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/events/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    displayList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 mb-4",
                                children: "No hay eventos registrados para esta categoría."
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/events",
                                className: "text-blue-500 hover:underline text-sm",
                                children: "← Ver todos los eventos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/events/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: displayList.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold uppercase text-blue-600 dark:text-blue-400",
                                                children: event.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/events/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: event.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/events/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-gray-900 dark:text-white mt-1",
                                                children: event.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/events/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 mt-2",
                                                children: event.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/events/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 text-xs text-gray-500 dark:text-gray-500",
                                                children: [
                                                    "📍 ",
                                                    event.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/events/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/events/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/events/${event.id}`,
                                            className: "rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors",
                                            children: "Ver Detalle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/events/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/events/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, event.id, true, {
                                fileName: "[project]/src/app/events/page.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-blue-500 hover:underline",
                            children: "← Volver al Inicio"
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/events/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/events/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/events/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/components/events/EventsAside.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsAside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/categories.ts [app-rsc] (ecmascript)");
;
;
;
const categoryIcons = {
    all: "📅",
    music: "🎵",
    games: "🎮",
    theatre: "🎭",
    football: "⚽"
};
function EventsAside({ activeCategory = "all" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-full md:w-64 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-gray-900 dark:text-white mb-4",
                children: "📅 Filtrar Eventos"
            }, void 0, false, {
                fileName: "[project]/src/components/events/EventsAside.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2 text-sm",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoriesData"].map((cat)=>{
                    const isActive = cat.slug === activeCategory;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: cat.slug === "all" ? "/events" : `/events?category=${cat.slug}`,
                            className: `block p-2 rounded-lg transition-colors ${isActive ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 font-semibold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"}`,
                            children: [
                                categoryIcons[cat.slug] ?? "•",
                                " ",
                                cat.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/events/EventsAside.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this)
                    }, cat.id, false, {
                        fileName: "[project]/src/components/events/EventsAside.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/events/EventsAside.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/events/EventsAside.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoriesData",
    ()=>categoriesData
]);
const categoriesData = [
    {
        id: "all",
        name: "Todos los Eventos",
        slug: "all"
    },
    {
        id: "music",
        name: "Música",
        slug: "music"
    },
    {
        id: "games",
        name: "Videojuegos",
        slug: "games"
    },
    {
        id: "theatre",
        name: "Teatro",
        slug: "theatre"
    },
    {
        id: "football",
        name: "Fútbol",
        slug: "football"
    }
];
}),
"[project]/src/data/events.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventsData",
    ()=>eventsData
]);
const eventsData = [
    {
        id: "linkin-park-in-the-end",
        title: "Linkin Park - In The End",
        category: "music",
        date: "2023-09-15",
        location: "Madison Square Garden, New York, NY",
        description: "Join us for an unforgettable night as Linkin Park performs their iconic hit 'In The End' live on stage.",
        youtubeId: "eVTXPUF4Oz4",
        bandMembers: [
            {
                name: "Chester Bennington",
                role: "Lead Vocals",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNRNtfwt08ISrdwS-Covu6unZtX8CC5zXb6wdDlNxQXquDgj-VPUevwUQbZHwHpBrHPO-BZ4v46unJI8aAQO86ieRbUN_JIOOIMc5row&s=10"
            },
            {
                name: "Mike Shinoda",
                role: "Vocals, Rhythm Guitar, Keyboards",
                imageUrl: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRVsb0Bop65XOxIhjdkBXJLCjBnYSrz64wPodQ2EkqzxtNUwzGijX75o6PtU4xf9BrUgZmNcuHEU3FgkdI"
            },
            {
                name: "Brad Delson",
                role: "Lead Guitar",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XoOFuK5anuCuwzvM8TjUYHEMCgiYwNqKY5IUyPXpqstr4Bozb4bj4Kf60tCBGJmQIpB40KWEfP0lzpMKr3LBZ01a_G1iUE2hTXcdOg&s=10"
            },
            {
                name: "Dave Phoenix Farrell",
                role: "Bass Guitar",
                imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQdMQlA4Ulf4d7VnnAGoV-Hj6u6v2kIS-pz4gl09EfFFleecL_HUHzx5ok2X54xkxGcH4STUgLN_l-9MdA"
            },
            {
                name: "Rob Bourdon",
                role: "Drums",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcMtbfewX8-S7-sTFfZA8mTZ89t1PB320AapjMtbBFZtqU-tEwNTvAsdDJQRWO3ErJmnWaOGBjYmosJB_KhSIWnjiHlsLo4baZZoemJQ&s=10"
            },
            {
                name: "Joe Hahn",
                role: "Turntables, Sampling",
                imageUrl: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRYvwfwPm4OvmDs9V2XsdsH3Z27hOVyff33I1WkYYy6NnNs6F2ydz-Dk6OZUmG2xSAGQJ5UWAX39fDWKSc"
            }
        ]
    },
    {
        id: "skillet-monster",
        title: "Skillet - Monster",
        category: "music",
        date: "2023-10-20",
        location: "Hollywood Bowl, Los Angeles, CA",
        description: "Experience the electrifying performance of Skillet as they bring their hit song 'Monster' to life on stage.",
        youtubeId: "1mjlM_RnsVE",
        bandMembers: [
            {
                name: "John Cooper",
                role: "Lead Vocals, Bass Guitar",
                imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/John_Cooper_au_Hellfest_2022.jpg/250px-John_Cooper_au_Hellfest_2022.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
            },
            {
                name: "Korey Cooper",
                role: "Rhythm Guitar, Keyboards",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uT5YnK18cIb5Gv7FwpI4QcZIpm_VADBAapf6AK8vl3lruAUitSnTLuI3IsUF7zt6mMyxol_o80Qp9vTvi0yaJ_zoY-59UddungZnFQzTHA&s=10"
            },
            {
                name: "Jen Ledger",
                role: "Drums, Vocals",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAacRXtq3p4seOjuSNlwU72vV0YDex9mkgsR__qWWhNsrvfaqV5ONJLJy72B7eMviT_ZDf2jyrPQxeab365TRs96ZsQ2EORqA5k60W9g&s=10"
            },
            {
                name: "Seth Morrison",
                role: "Lead Guitar",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWrID8kbXsL4HNpxfZmQuOtueWv-8dL0QbDMkmrCBqvl6TOM_KAZlUZqyVcsZuZOOxhRdHHvAMB1IduS-LfcnzIXpAvIQ-SBsvgBLmA&s=10"
            }
        ]
    },
    {
        id: "evanescence-bring-me-to-life",
        title: "Evanescence - Bring Me To Life",
        category: "music",
        date: "2023-11-15",
        location: "The Forum, Los Angeles, CA",
        description: "Join Evanescence for an unforgettable night as they perform their hit song 'Bring Me To Life' live on stage.",
        youtubeId: "3YxaaGgTQYM",
        bandMembers: [
            {
                name: "Amy Lee",
                role: "Lead Vocals",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hP5RpNVnNI00Rkd97LMwxeW3NY0RafyzHDyL-cRFFzqmIhwdkA7bnLqjlEvynHKrX2pQig&s"
            },
            {
                name: "John LeCompt",
                role: "Guitar, Keyboards",
                imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRalubJwkbhw5Wocl63OSAIqW5hEA8Aq-NWY4Hx_gZlRo0ZJHfYTa0leuOuJKGnkrceIvmqv16X9b1-wtI"
            },
            {
                name: "Ben Moody",
                role: "Guitar",
                imageUrl: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQFuDmo_ecbW0AfnBk4CD_JX3Cvzz3gIb7fTQL77xmlYDDvBbiGiaVmLu_qN1Cl4aAqNUNNX3LKTzwuOC8"
            },
            {
                name: "Rocky Gray",
                role: "Drums",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRte0VGMvZbh0GIuk3RtElkZz8F8WvbtRzVAcDC87Vfkb9CRnzWD6EsIi0tfeRTALbYCQmoMlJOer1t3zkwpNaBUF6Xhp-AkbcgAzKm9Q3P&s=10"
            }
        ]
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0aau30v._.js.map