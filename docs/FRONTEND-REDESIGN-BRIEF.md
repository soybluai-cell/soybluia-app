# Brief — Rediseño Frontend SoyBluia (Web App)

**Para:** Encargado de Frontend  
**Fecha:** 2026-09-01  
**Repo:** `https://github.com/soybluai-cell/soybluia-app` (rama `main` restaurada a `03e6398`)  
**Estado actual:** Funcional, pero visualmente genérico. Necesita pasar a **producto premium** comparable a ChatGPT/Claude/Qwen.

---

## 1. Objetivo

> Que alguien que usa ChatGPT diariamente abra SoyBluia y sepa usarlo sin aprender nada, pero después piense: *"Esto no es ChatGPT; es SoyBluia"*.

- **UX familiar** (patrones probados) + **identidad propia** (Cobalto, logo, memoria, proyectos).
- **No clon visual**: no copiar logos, assets, textos o layouts pixel-perfect de OpenAI/Anthropic.

## 2. Alcance (esta fase)

- **Web App es prioridad** (`apps/web` Next.js 16.3 / React 19 / Tailwind 4).
- No tocar `apps/api` (Go), `packages`, `apps/mobile` salvo integración mínima. TUI/Blu Code fuera de alcance.

## 3. Identidad (Brand Book es fuente de verdad)

- **Cobalto #0A34F5** — primary, CTA, estados activos, focus, logo.
- **Azul claro #3D6BFF** — hover, links.
- **Negro suave #0B0F1A** — dark bg / texto light.
- **Gris #8E8E93** — secondary, metadata.
- **Gris claro #F2F4F8** — light bg.
- **Tipografía:** Inter (Bold títulos, Semibold subtítulos, Regular cuerpo) + JetBrains Mono para código.
- **NO:** deformar logo, gradientes excesivos, glassmorphism, sombras exageradas. Cobalto solo en puntos clave; superficies neutras.

**Dark:** `bg #0B0F1A / surface #111625 / elevated #171D2D / border #242B3D / text #F7F8FA`  
**Light:** `bg #F2F4F8 / surface #FFFFFF / border #E2E5EB / text #0B0F1A`

## 4. Referencia de producto a replicar (UX, no branding)

**ChatGPT:** sidebar 260px, `New Chat`, búsqueda, historial agrupado Hoy/Ayer/7d, Projects, composer centrado `Ask anything` + `+ Attach / @ Memory / Tools / Model → Send` (`Enter` envía, `Shift+Enter` nueva línea), markdown/code con copy, streaming, `...` en conversaciones (Renombrar/Compartir/Archivar/Eliminar).

**Claude:** conversación minimalista, artifacts (preview/edit/run lado a lado), documentos.

**Qwen:** multimodal, variedad modelos. *No copiar branding.*

## 5. Estructura objetivo

```
SoyBluia
├── New Chat + Search
├── Chats (Today / Yesterday / Previous 7 days)
├── Projects (workspace: chats + files + memory + agents + artifacts)
├── Memory (Memories/Notes/Knowledge/Graph)
├── Agents (listar/crear, modelo, instrucciones, tools, memoria)
├── Artifacts (doc/code/HTML/SVG/dashboard)
├── Library (Files/Artifacts)
├── Settings (General/Notificaciones/Personalización/Complementos/Voz/Facturación/Uso/Análisis/Datos/Almacenamiento/Protección/Seguridad/Parental/Confianza/Cuenta/Teclado)
└── Account
```

`Home` debe ser `What can I help you with?` + composer centrado, no dashboard de widgets.

## 6. Lo que ya existe (reutilizar, no reinventar)

- `apps/web/src/lib/api.ts:22` (auth/projects/chat/vault/user, refresh 401), `auth-context.tsx:23`, `types/index.ts` (ChatMessage, ProjectSummary), `components/Button.tsx:37`/`Card`/`Input`, `globals.css:7` (Tailwind). **No inventes endpoints.**
- Chat `chat/page.tsx:65` ya hace `chatApi.send({text,tier,agentId,projectId,history})` + `createSession`. Mantener.
- `MainLayout` + `Sidebar 280px` funcional pero visualmente genérico (slate/indigo vs blu) — **rehacer visual, no lógica**.

## 7. Qué está mal hoy (a pulir)

- Paleta desincronizada (slate/indigo vs Cobalto), sidebar ocupa demasiado, sin colapso, sin búsqueda, `UserBubble` azul sólido no ChatGPT, sin markdown real, `ModelPill` dentro del input, `Dashboard` con `slate` no `blu`, sin estados `Empty/Loading/Streaming/Error`.

## 8. Entregables esperados

1. **Design tokens** (`colors, typography, spacing 4/8/12/16/24/32/48/64, radius, shadows, motion`) en `globals.css`.
2. **AppShell** (`Sidebar` colapsable 260→72, drawer móvil + overlay, `Header` 48px minimal).
3. **Chat** (`MessageList` con `UserMessage` gris pill + `AssistantMessage` markdown `react-markdown` + `CodeBlock` con copy, `Composer` auto-resize, `Stop`).
4. **Sidebar** con búsqueda, agrupación fecha, `...` menu, `Projects/Memory/...`.
5. **Settings** 2-columnas como screenshot (General: Tema `Sistema/Claro/Oscuro`, Lenguaje, Voz `Dylan`).
6. **Responsive** 360/390/768/1024/1280 + a11y focus/aria + animaciones sutiles 160ms.
7. `lint / typecheck / build` verdes, sin deps innecesarias (reutilizar `next/font`, Tailwind).

## 9. Criterio de éxito

Al abrir `http://localhost:3000` (Go) + `http://localhost:3001` (web) debe sentirse **rápida, limpia, madura** — iniciar un chat es inmediato y la conversación respira (mucho espacio negativo, bordes `blu-outline/20`, sombras `s/m`).

## 10. No hacer

- No convertir en IDE/terminal, no azul total, no cards gigantes, no glass, no copiar ChatGPT pixel-perfect, no romper `api.ts`/`auth`.

---
¡Gracias por llevar a SoyBluia a nivel ChatGPT con alma propia!
