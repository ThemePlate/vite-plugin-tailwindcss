# ThemePlate Vite TailwindCSS

## Usage

`npm install @themeplate/vite-plugin-tailwindcss`

### vite.config.js
```js
import { defineConfig } from 'vite';
import tpTailwindCss from '@themeplate/vite-plugin-tailwindcss';

export default defineConfig( {
	plugins: [
		tpTailwindCss(),
	],
} );
```

## Sample

> Run in full mode (include all of Tailwind's default styles)

### tailwind.config.js
```js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### theme.json
```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "color": {
      "gradients": [
        {
          "name": "Gradient To Top",
          "slug": "gradient-to-t",
          "gradient": "linear-gradient(to top, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To TopRight",
          "slug": "gradient-to-tr",
          "gradient": "linear-gradient(to top right, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To Right",
          "slug": "gradient-to-r",
          "gradient": "linear-gradient(to right, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To BottomRight",
          "slug": "gradient-to-br",
          "gradient": "linear-gradient(to bottom right, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To Bottom",
          "slug": "gradient-to-b",
          "gradient": "linear-gradient(to bottom, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To BottomLeft",
          "slug": "gradient-to-bl",
          "gradient": "linear-gradient(to bottom left, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To Left",
          "slug": "gradient-to-l",
          "gradient": "linear-gradient(to left, var(--tw-gradient-stops))"
        },
        {
          "name": "Gradient To TopLeft",
          "slug": "gradient-to-tl",
          "gradient": "linear-gradient(to top left, var(--tw-gradient-stops))"
        }
      ],
      "palette": [
        {
          "name": "Inherit",
          "slug": "inherit",
          "color": "inherit"
        },
        {
          "name": "Current",
          "slug": "current",
          "color": "currentColor"
        },
        {
          "name": "Transparent",
          "slug": "transparent",
          "color": "transparent"
        },
        {
          "name": "Black",
          "slug": "black",
          "color": "#000"
        },
        {
          "name": "White",
          "slug": "white",
          "color": "#fff"
        },
        {
          "name": "Slate 50",
          "slug": "slate-50",
          "color": "#f8fafc"
        },
        {
          "name": "Slate 100",
          "slug": "slate-100",
          "color": "#f1f5f9"
        },
        {
          "name": "Slate 200",
          "slug": "slate-200",
          "color": "#e2e8f0"
        },
        {
          "name": "Slate 300",
          "slug": "slate-300",
          "color": "#cbd5e1"
        },
        {
          "name": "Slate 400",
          "slug": "slate-400",
          "color": "#94a3b8"
        },
        {
          "name": "Slate 500",
          "slug": "slate-500",
          "color": "#64748b"
        },
        {
          "name": "Slate 600",
          "slug": "slate-600",
          "color": "#475569"
        },
        {
          "name": "Slate 700",
          "slug": "slate-700",
          "color": "#334155"
        },
        {
          "name": "Slate 800",
          "slug": "slate-800",
          "color": "#1e293b"
        },
        {
          "name": "Slate 900",
          "slug": "slate-900",
          "color": "#0f172a"
        },
        {
          "name": "Slate 950",
          "slug": "slate-950",
          "color": "#020617"
        },
        {
          "name": "Gray 50",
          "slug": "gray-50",
          "color": "#f9fafb"
        },
        {
          "name": "Gray 100",
          "slug": "gray-100",
          "color": "#f3f4f6"
        },
        {
          "name": "Gray 200",
          "slug": "gray-200",
          "color": "#e5e7eb"
        },
        {
          "name": "Gray 300",
          "slug": "gray-300",
          "color": "#d1d5db"
        },
        {
          "name": "Gray 400",
          "slug": "gray-400",
          "color": "#9ca3af"
        },
        {
          "name": "Gray 500",
          "slug": "gray-500",
          "color": "#6b7280"
        },
        {
          "name": "Gray 600",
          "slug": "gray-600",
          "color": "#4b5563"
        },
        {
          "name": "Gray 700",
          "slug": "gray-700",
          "color": "#374151"
        },
        {
          "name": "Gray 800",
          "slug": "gray-800",
          "color": "#1f2937"
        },
        {
          "name": "Gray 900",
          "slug": "gray-900",
          "color": "#111827"
        },
        {
          "name": "Gray 950",
          "slug": "gray-950",
          "color": "#030712"
        },
        {
          "name": "Zinc 50",
          "slug": "zinc-50",
          "color": "#fafafa"
        },
        {
          "name": "Zinc 100",
          "slug": "zinc-100",
          "color": "#f4f4f5"
        },
        {
          "name": "Zinc 200",
          "slug": "zinc-200",
          "color": "#e4e4e7"
        },
        {
          "name": "Zinc 300",
          "slug": "zinc-300",
          "color": "#d4d4d8"
        },
        {
          "name": "Zinc 400",
          "slug": "zinc-400",
          "color": "#a1a1aa"
        },
        {
          "name": "Zinc 500",
          "slug": "zinc-500",
          "color": "#71717a"
        },
        {
          "name": "Zinc 600",
          "slug": "zinc-600",
          "color": "#52525b"
        },
        {
          "name": "Zinc 700",
          "slug": "zinc-700",
          "color": "#3f3f46"
        },
        {
          "name": "Zinc 800",
          "slug": "zinc-800",
          "color": "#27272a"
        },
        {
          "name": "Zinc 900",
          "slug": "zinc-900",
          "color": "#18181b"
        },
        {
          "name": "Zinc 950",
          "slug": "zinc-950",
          "color": "#09090b"
        },
        {
          "name": "Neutral 50",
          "slug": "neutral-50",
          "color": "#fafafa"
        },
        {
          "name": "Neutral 100",
          "slug": "neutral-100",
          "color": "#f5f5f5"
        },
        {
          "name": "Neutral 200",
          "slug": "neutral-200",
          "color": "#e5e5e5"
        },
        {
          "name": "Neutral 300",
          "slug": "neutral-300",
          "color": "#d4d4d4"
        },
        {
          "name": "Neutral 400",
          "slug": "neutral-400",
          "color": "#a3a3a3"
        },
        {
          "name": "Neutral 500",
          "slug": "neutral-500",
          "color": "#737373"
        },
        {
          "name": "Neutral 600",
          "slug": "neutral-600",
          "color": "#525252"
        },
        {
          "name": "Neutral 700",
          "slug": "neutral-700",
          "color": "#404040"
        },
        {
          "name": "Neutral 800",
          "slug": "neutral-800",
          "color": "#262626"
        },
        {
          "name": "Neutral 900",
          "slug": "neutral-900",
          "color": "#171717"
        },
        {
          "name": "Neutral 950",
          "slug": "neutral-950",
          "color": "#0a0a0a"
        },
        {
          "name": "Stone 50",
          "slug": "stone-50",
          "color": "#fafaf9"
        },
        {
          "name": "Stone 100",
          "slug": "stone-100",
          "color": "#f5f5f4"
        },
        {
          "name": "Stone 200",
          "slug": "stone-200",
          "color": "#e7e5e4"
        },
        {
          "name": "Stone 300",
          "slug": "stone-300",
          "color": "#d6d3d1"
        },
        {
          "name": "Stone 400",
          "slug": "stone-400",
          "color": "#a8a29e"
        },
        {
          "name": "Stone 500",
          "slug": "stone-500",
          "color": "#78716c"
        },
        {
          "name": "Stone 600",
          "slug": "stone-600",
          "color": "#57534e"
        },
        {
          "name": "Stone 700",
          "slug": "stone-700",
          "color": "#44403c"
        },
        {
          "name": "Stone 800",
          "slug": "stone-800",
          "color": "#292524"
        },
        {
          "name": "Stone 900",
          "slug": "stone-900",
          "color": "#1c1917"
        },
        {
          "name": "Stone 950",
          "slug": "stone-950",
          "color": "#0c0a09"
        },
        {
          "name": "Red 50",
          "slug": "red-50",
          "color": "#fef2f2"
        },
        {
          "name": "Red 100",
          "slug": "red-100",
          "color": "#fee2e2"
        },
        {
          "name": "Red 200",
          "slug": "red-200",
          "color": "#fecaca"
        },
        {
          "name": "Red 300",
          "slug": "red-300",
          "color": "#fca5a5"
        },
        {
          "name": "Red 400",
          "slug": "red-400",
          "color": "#f87171"
        },
        {
          "name": "Red 500",
          "slug": "red-500",
          "color": "#ef4444"
        },
        {
          "name": "Red 600",
          "slug": "red-600",
          "color": "#dc2626"
        },
        {
          "name": "Red 700",
          "slug": "red-700",
          "color": "#b91c1c"
        },
        {
          "name": "Red 800",
          "slug": "red-800",
          "color": "#991b1b"
        },
        {
          "name": "Red 900",
          "slug": "red-900",
          "color": "#7f1d1d"
        },
        {
          "name": "Red 950",
          "slug": "red-950",
          "color": "#450a0a"
        },
        {
          "name": "Orange 50",
          "slug": "orange-50",
          "color": "#fff7ed"
        },
        {
          "name": "Orange 100",
          "slug": "orange-100",
          "color": "#ffedd5"
        },
        {
          "name": "Orange 200",
          "slug": "orange-200",
          "color": "#fed7aa"
        },
        {
          "name": "Orange 300",
          "slug": "orange-300",
          "color": "#fdba74"
        },
        {
          "name": "Orange 400",
          "slug": "orange-400",
          "color": "#fb923c"
        },
        {
          "name": "Orange 500",
          "slug": "orange-500",
          "color": "#f97316"
        },
        {
          "name": "Orange 600",
          "slug": "orange-600",
          "color": "#ea580c"
        },
        {
          "name": "Orange 700",
          "slug": "orange-700",
          "color": "#c2410c"
        },
        {
          "name": "Orange 800",
          "slug": "orange-800",
          "color": "#9a3412"
        },
        {
          "name": "Orange 900",
          "slug": "orange-900",
          "color": "#7c2d12"
        },
        {
          "name": "Orange 950",
          "slug": "orange-950",
          "color": "#431407"
        },
        {
          "name": "Amber 50",
          "slug": "amber-50",
          "color": "#fffbeb"
        },
        {
          "name": "Amber 100",
          "slug": "amber-100",
          "color": "#fef3c7"
        },
        {
          "name": "Amber 200",
          "slug": "amber-200",
          "color": "#fde68a"
        },
        {
          "name": "Amber 300",
          "slug": "amber-300",
          "color": "#fcd34d"
        },
        {
          "name": "Amber 400",
          "slug": "amber-400",
          "color": "#fbbf24"
        },
        {
          "name": "Amber 500",
          "slug": "amber-500",
          "color": "#f59e0b"
        },
        {
          "name": "Amber 600",
          "slug": "amber-600",
          "color": "#d97706"
        },
        {
          "name": "Amber 700",
          "slug": "amber-700",
          "color": "#b45309"
        },
        {
          "name": "Amber 800",
          "slug": "amber-800",
          "color": "#92400e"
        },
        {
          "name": "Amber 900",
          "slug": "amber-900",
          "color": "#78350f"
        },
        {
          "name": "Amber 950",
          "slug": "amber-950",
          "color": "#451a03"
        },
        {
          "name": "Yellow 50",
          "slug": "yellow-50",
          "color": "#fefce8"
        },
        {
          "name": "Yellow 100",
          "slug": "yellow-100",
          "color": "#fef9c3"
        },
        {
          "name": "Yellow 200",
          "slug": "yellow-200",
          "color": "#fef08a"
        },
        {
          "name": "Yellow 300",
          "slug": "yellow-300",
          "color": "#fde047"
        },
        {
          "name": "Yellow 400",
          "slug": "yellow-400",
          "color": "#facc15"
        },
        {
          "name": "Yellow 500",
          "slug": "yellow-500",
          "color": "#eab308"
        },
        {
          "name": "Yellow 600",
          "slug": "yellow-600",
          "color": "#ca8a04"
        },
        {
          "name": "Yellow 700",
          "slug": "yellow-700",
          "color": "#a16207"
        },
        {
          "name": "Yellow 800",
          "slug": "yellow-800",
          "color": "#854d0e"
        },
        {
          "name": "Yellow 900",
          "slug": "yellow-900",
          "color": "#713f12"
        },
        {
          "name": "Yellow 950",
          "slug": "yellow-950",
          "color": "#422006"
        },
        {
          "name": "Lime 50",
          "slug": "lime-50",
          "color": "#f7fee7"
        },
        {
          "name": "Lime 100",
          "slug": "lime-100",
          "color": "#ecfccb"
        },
        {
          "name": "Lime 200",
          "slug": "lime-200",
          "color": "#d9f99d"
        },
        {
          "name": "Lime 300",
          "slug": "lime-300",
          "color": "#bef264"
        },
        {
          "name": "Lime 400",
          "slug": "lime-400",
          "color": "#a3e635"
        },
        {
          "name": "Lime 500",
          "slug": "lime-500",
          "color": "#84cc16"
        },
        {
          "name": "Lime 600",
          "slug": "lime-600",
          "color": "#65a30d"
        },
        {
          "name": "Lime 700",
          "slug": "lime-700",
          "color": "#4d7c0f"
        },
        {
          "name": "Lime 800",
          "slug": "lime-800",
          "color": "#3f6212"
        },
        {
          "name": "Lime 900",
          "slug": "lime-900",
          "color": "#365314"
        },
        {
          "name": "Lime 950",
          "slug": "lime-950",
          "color": "#1a2e05"
        },
        {
          "name": "Green 50",
          "slug": "green-50",
          "color": "#f0fdf4"
        },
        {
          "name": "Green 100",
          "slug": "green-100",
          "color": "#dcfce7"
        },
        {
          "name": "Green 200",
          "slug": "green-200",
          "color": "#bbf7d0"
        },
        {
          "name": "Green 300",
          "slug": "green-300",
          "color": "#86efac"
        },
        {
          "name": "Green 400",
          "slug": "green-400",
          "color": "#4ade80"
        },
        {
          "name": "Green 500",
          "slug": "green-500",
          "color": "#22c55e"
        },
        {
          "name": "Green 600",
          "slug": "green-600",
          "color": "#16a34a"
        },
        {
          "name": "Green 700",
          "slug": "green-700",
          "color": "#15803d"
        },
        {
          "name": "Green 800",
          "slug": "green-800",
          "color": "#166534"
        },
        {
          "name": "Green 900",
          "slug": "green-900",
          "color": "#14532d"
        },
        {
          "name": "Green 950",
          "slug": "green-950",
          "color": "#052e16"
        },
        {
          "name": "Emerald 50",
          "slug": "emerald-50",
          "color": "#ecfdf5"
        },
        {
          "name": "Emerald 100",
          "slug": "emerald-100",
          "color": "#d1fae5"
        },
        {
          "name": "Emerald 200",
          "slug": "emerald-200",
          "color": "#a7f3d0"
        },
        {
          "name": "Emerald 300",
          "slug": "emerald-300",
          "color": "#6ee7b7"
        },
        {
          "name": "Emerald 400",
          "slug": "emerald-400",
          "color": "#34d399"
        },
        {
          "name": "Emerald 500",
          "slug": "emerald-500",
          "color": "#10b981"
        },
        {
          "name": "Emerald 600",
          "slug": "emerald-600",
          "color": "#059669"
        },
        {
          "name": "Emerald 700",
          "slug": "emerald-700",
          "color": "#047857"
        },
        {
          "name": "Emerald 800",
          "slug": "emerald-800",
          "color": "#065f46"
        },
        {
          "name": "Emerald 900",
          "slug": "emerald-900",
          "color": "#064e3b"
        },
        {
          "name": "Emerald 950",
          "slug": "emerald-950",
          "color": "#022c22"
        },
        {
          "name": "Teal 50",
          "slug": "teal-50",
          "color": "#f0fdfa"
        },
        {
          "name": "Teal 100",
          "slug": "teal-100",
          "color": "#ccfbf1"
        },
        {
          "name": "Teal 200",
          "slug": "teal-200",
          "color": "#99f6e4"
        },
        {
          "name": "Teal 300",
          "slug": "teal-300",
          "color": "#5eead4"
        },
        {
          "name": "Teal 400",
          "slug": "teal-400",
          "color": "#2dd4bf"
        },
        {
          "name": "Teal 500",
          "slug": "teal-500",
          "color": "#14b8a6"
        },
        {
          "name": "Teal 600",
          "slug": "teal-600",
          "color": "#0d9488"
        },
        {
          "name": "Teal 700",
          "slug": "teal-700",
          "color": "#0f766e"
        },
        {
          "name": "Teal 800",
          "slug": "teal-800",
          "color": "#115e59"
        },
        {
          "name": "Teal 900",
          "slug": "teal-900",
          "color": "#134e4a"
        },
        {
          "name": "Teal 950",
          "slug": "teal-950",
          "color": "#042f2e"
        },
        {
          "name": "Cyan 50",
          "slug": "cyan-50",
          "color": "#ecfeff"
        },
        {
          "name": "Cyan 100",
          "slug": "cyan-100",
          "color": "#cffafe"
        },
        {
          "name": "Cyan 200",
          "slug": "cyan-200",
          "color": "#a5f3fc"
        },
        {
          "name": "Cyan 300",
          "slug": "cyan-300",
          "color": "#67e8f9"
        },
        {
          "name": "Cyan 400",
          "slug": "cyan-400",
          "color": "#22d3ee"
        },
        {
          "name": "Cyan 500",
          "slug": "cyan-500",
          "color": "#06b6d4"
        },
        {
          "name": "Cyan 600",
          "slug": "cyan-600",
          "color": "#0891b2"
        },
        {
          "name": "Cyan 700",
          "slug": "cyan-700",
          "color": "#0e7490"
        },
        {
          "name": "Cyan 800",
          "slug": "cyan-800",
          "color": "#155e75"
        },
        {
          "name": "Cyan 900",
          "slug": "cyan-900",
          "color": "#164e63"
        },
        {
          "name": "Cyan 950",
          "slug": "cyan-950",
          "color": "#083344"
        },
        {
          "name": "Sky 50",
          "slug": "sky-50",
          "color": "#f0f9ff"
        },
        {
          "name": "Sky 100",
          "slug": "sky-100",
          "color": "#e0f2fe"
        },
        {
          "name": "Sky 200",
          "slug": "sky-200",
          "color": "#bae6fd"
        },
        {
          "name": "Sky 300",
          "slug": "sky-300",
          "color": "#7dd3fc"
        },
        {
          "name": "Sky 400",
          "slug": "sky-400",
          "color": "#38bdf8"
        },
        {
          "name": "Sky 500",
          "slug": "sky-500",
          "color": "#0ea5e9"
        },
        {
          "name": "Sky 600",
          "slug": "sky-600",
          "color": "#0284c7"
        },
        {
          "name": "Sky 700",
          "slug": "sky-700",
          "color": "#0369a1"
        },
        {
          "name": "Sky 800",
          "slug": "sky-800",
          "color": "#075985"
        },
        {
          "name": "Sky 900",
          "slug": "sky-900",
          "color": "#0c4a6e"
        },
        {
          "name": "Sky 950",
          "slug": "sky-950",
          "color": "#082f49"
        },
        {
          "name": "Blue 50",
          "slug": "blue-50",
          "color": "#eff6ff"
        },
        {
          "name": "Blue 100",
          "slug": "blue-100",
          "color": "#dbeafe"
        },
        {
          "name": "Blue 200",
          "slug": "blue-200",
          "color": "#bfdbfe"
        },
        {
          "name": "Blue 300",
          "slug": "blue-300",
          "color": "#93c5fd"
        },
        {
          "name": "Blue 400",
          "slug": "blue-400",
          "color": "#60a5fa"
        },
        {
          "name": "Blue 500",
          "slug": "blue-500",
          "color": "#3b82f6"
        },
        {
          "name": "Blue 600",
          "slug": "blue-600",
          "color": "#2563eb"
        },
        {
          "name": "Blue 700",
          "slug": "blue-700",
          "color": "#1d4ed8"
        },
        {
          "name": "Blue 800",
          "slug": "blue-800",
          "color": "#1e40af"
        },
        {
          "name": "Blue 900",
          "slug": "blue-900",
          "color": "#1e3a8a"
        },
        {
          "name": "Blue 950",
          "slug": "blue-950",
          "color": "#172554"
        },
        {
          "name": "Indigo 50",
          "slug": "indigo-50",
          "color": "#eef2ff"
        },
        {
          "name": "Indigo 100",
          "slug": "indigo-100",
          "color": "#e0e7ff"
        },
        {
          "name": "Indigo 200",
          "slug": "indigo-200",
          "color": "#c7d2fe"
        },
        {
          "name": "Indigo 300",
          "slug": "indigo-300",
          "color": "#a5b4fc"
        },
        {
          "name": "Indigo 400",
          "slug": "indigo-400",
          "color": "#818cf8"
        },
        {
          "name": "Indigo 500",
          "slug": "indigo-500",
          "color": "#6366f1"
        },
        {
          "name": "Indigo 600",
          "slug": "indigo-600",
          "color": "#4f46e5"
        },
        {
          "name": "Indigo 700",
          "slug": "indigo-700",
          "color": "#4338ca"
        },
        {
          "name": "Indigo 800",
          "slug": "indigo-800",
          "color": "#3730a3"
        },
        {
          "name": "Indigo 900",
          "slug": "indigo-900",
          "color": "#312e81"
        },
        {
          "name": "Indigo 950",
          "slug": "indigo-950",
          "color": "#1e1b4b"
        },
        {
          "name": "Violet 50",
          "slug": "violet-50",
          "color": "#f5f3ff"
        },
        {
          "name": "Violet 100",
          "slug": "violet-100",
          "color": "#ede9fe"
        },
        {
          "name": "Violet 200",
          "slug": "violet-200",
          "color": "#ddd6fe"
        },
        {
          "name": "Violet 300",
          "slug": "violet-300",
          "color": "#c4b5fd"
        },
        {
          "name": "Violet 400",
          "slug": "violet-400",
          "color": "#a78bfa"
        },
        {
          "name": "Violet 500",
          "slug": "violet-500",
          "color": "#8b5cf6"
        },
        {
          "name": "Violet 600",
          "slug": "violet-600",
          "color": "#7c3aed"
        },
        {
          "name": "Violet 700",
          "slug": "violet-700",
          "color": "#6d28d9"
        },
        {
          "name": "Violet 800",
          "slug": "violet-800",
          "color": "#5b21b6"
        },
        {
          "name": "Violet 900",
          "slug": "violet-900",
          "color": "#4c1d95"
        },
        {
          "name": "Violet 950",
          "slug": "violet-950",
          "color": "#2e1065"
        },
        {
          "name": "Purple 50",
          "slug": "purple-50",
          "color": "#faf5ff"
        },
        {
          "name": "Purple 100",
          "slug": "purple-100",
          "color": "#f3e8ff"
        },
        {
          "name": "Purple 200",
          "slug": "purple-200",
          "color": "#e9d5ff"
        },
        {
          "name": "Purple 300",
          "slug": "purple-300",
          "color": "#d8b4fe"
        },
        {
          "name": "Purple 400",
          "slug": "purple-400",
          "color": "#c084fc"
        },
        {
          "name": "Purple 500",
          "slug": "purple-500",
          "color": "#a855f7"
        },
        {
          "name": "Purple 600",
          "slug": "purple-600",
          "color": "#9333ea"
        },
        {
          "name": "Purple 700",
          "slug": "purple-700",
          "color": "#7e22ce"
        },
        {
          "name": "Purple 800",
          "slug": "purple-800",
          "color": "#6b21a8"
        },
        {
          "name": "Purple 900",
          "slug": "purple-900",
          "color": "#581c87"
        },
        {
          "name": "Purple 950",
          "slug": "purple-950",
          "color": "#3b0764"
        },
        {
          "name": "Fuchsia 50",
          "slug": "fuchsia-50",
          "color": "#fdf4ff"
        },
        {
          "name": "Fuchsia 100",
          "slug": "fuchsia-100",
          "color": "#fae8ff"
        },
        {
          "name": "Fuchsia 200",
          "slug": "fuchsia-200",
          "color": "#f5d0fe"
        },
        {
          "name": "Fuchsia 300",
          "slug": "fuchsia-300",
          "color": "#f0abfc"
        },
        {
          "name": "Fuchsia 400",
          "slug": "fuchsia-400",
          "color": "#e879f9"
        },
        {
          "name": "Fuchsia 500",
          "slug": "fuchsia-500",
          "color": "#d946ef"
        },
        {
          "name": "Fuchsia 600",
          "slug": "fuchsia-600",
          "color": "#c026d3"
        },
        {
          "name": "Fuchsia 700",
          "slug": "fuchsia-700",
          "color": "#a21caf"
        },
        {
          "name": "Fuchsia 800",
          "slug": "fuchsia-800",
          "color": "#86198f"
        },
        {
          "name": "Fuchsia 900",
          "slug": "fuchsia-900",
          "color": "#701a75"
        },
        {
          "name": "Fuchsia 950",
          "slug": "fuchsia-950",
          "color": "#4a044e"
        },
        {
          "name": "Pink 50",
          "slug": "pink-50",
          "color": "#fdf2f8"
        },
        {
          "name": "Pink 100",
          "slug": "pink-100",
          "color": "#fce7f3"
        },
        {
          "name": "Pink 200",
          "slug": "pink-200",
          "color": "#fbcfe8"
        },
        {
          "name": "Pink 300",
          "slug": "pink-300",
          "color": "#f9a8d4"
        },
        {
          "name": "Pink 400",
          "slug": "pink-400",
          "color": "#f472b6"
        },
        {
          "name": "Pink 500",
          "slug": "pink-500",
          "color": "#ec4899"
        },
        {
          "name": "Pink 600",
          "slug": "pink-600",
          "color": "#db2777"
        },
        {
          "name": "Pink 700",
          "slug": "pink-700",
          "color": "#be185d"
        },
        {
          "name": "Pink 800",
          "slug": "pink-800",
          "color": "#9d174d"
        },
        {
          "name": "Pink 900",
          "slug": "pink-900",
          "color": "#831843"
        },
        {
          "name": "Pink 950",
          "slug": "pink-950",
          "color": "#500724"
        },
        {
          "name": "Rose 50",
          "slug": "rose-50",
          "color": "#fff1f2"
        },
        {
          "name": "Rose 100",
          "slug": "rose-100",
          "color": "#ffe4e6"
        },
        {
          "name": "Rose 200",
          "slug": "rose-200",
          "color": "#fecdd3"
        },
        {
          "name": "Rose 300",
          "slug": "rose-300",
          "color": "#fda4af"
        },
        {
          "name": "Rose 400",
          "slug": "rose-400",
          "color": "#fb7185"
        },
        {
          "name": "Rose 500",
          "slug": "rose-500",
          "color": "#f43f5e"
        },
        {
          "name": "Rose 600",
          "slug": "rose-600",
          "color": "#e11d48"
        },
        {
          "name": "Rose 700",
          "slug": "rose-700",
          "color": "#be123c"
        },
        {
          "name": "Rose 800",
          "slug": "rose-800",
          "color": "#9f1239"
        },
        {
          "name": "Rose 900",
          "slug": "rose-900",
          "color": "#881337"
        },
        {
          "name": "Rose 950",
          "slug": "rose-950",
          "color": "#4c0519"
        }
      ]
    },
    "typography": {
      "fontSizes": [
        {
          "name": "Extra Small",
          "slug": "xs",
          "size": "0.75rem"
        },
        {
          "name": "Small",
          "slug": "sm",
          "size": "0.875rem"
        },
        {
          "name": "Base",
          "slug": "base",
          "size": "1rem"
        },
        {
          "name": "Large",
          "slug": "lg",
          "size": "1.125rem"
        },
        {
          "name": "Extra Large",
          "slug": "xl",
          "size": "1.25rem"
        },
        {
          "name": "2Extra Large",
          "slug": "2xl",
          "size": "1.5rem"
        },
        {
          "name": "3Extra Large",
          "slug": "3xl",
          "size": "1.875rem"
        },
        {
          "name": "4Extra Large",
          "slug": "4xl",
          "size": "2.25rem"
        },
        {
          "name": "5Extra Large",
          "slug": "5xl",
          "size": "3rem"
        },
        {
          "name": "6Extra Large",
          "slug": "6xl",
          "size": "3.75rem"
        },
        {
          "name": "7Extra Large",
          "slug": "7xl",
          "size": "4.5rem"
        },
        {
          "name": "8Extra Large",
          "slug": "8xl",
          "size": "6rem"
        },
        {
          "name": "9Extra Large",
          "slug": "9xl",
          "size": "8rem"
        }
      ],
      "fontFamilies": [
        {
          "name": "Ui Sans Serif",
          "slug": "sans",
          "fontFamily": "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\""
        },
        {
          "name": "Ui Serif",
          "slug": "serif",
          "fontFamily": "ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif"
        },
        {
          "name": "Ui Monospace",
          "slug": "mono",
          "fontFamily": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
        }
      ]
    }
  }
}
```
