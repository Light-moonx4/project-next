(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ThemeToggleButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggleButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Importante en Next.js App Router para componentes interactivos
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggleButton() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "f724a1e71856aa268f1ab280d0e1ce43d00f31b734e22350b776cc19948f593c") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f724a1e71856aa268f1ab280d0e1ce43d00f31b734e22350b776cc19948f593c";
    }
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggleButton[useEffect()]": ()=>{
                const savedTheme = localStorage.getItem("theme");
                const isDark = savedTheme === "dark" || !savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches;
                setDarkMode(isDark);
                if (isDark) {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        })["ThemeToggleButton[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== darkMode) {
        t2 = ({
            "ThemeToggleButton[toggleTheme]": ()=>{
                if (darkMode) {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                    setDarkMode(false);
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                    setDarkMode(true);
                }
            }
        })["ThemeToggleButton[toggleTheme]"];
        $[3] = darkMode;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const toggleTheme = t2;
    const t3 = darkMode ? "\u2600\uFE0F Modo Claro" : "\uD83C\uDF19 Modo Oscuro";
    let t4;
    if ($[5] !== t3 || $[6] !== toggleTheme) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleTheme,
            className: "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium",
            "aria-label": "Cambiar modo de vista",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ThemeToggleButton.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = toggleTheme;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_s(ThemeToggleButton, "n2P3coCVngntCnyS/Nqj+dgR7+U=");
_c = ThemeToggleButton;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_ThemeToggleButton_tsx_1e00_79._.js.map