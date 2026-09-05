# SoyBluia — Especificación Frontend Moderno Minimalista

**Objetivo:** `apps/web` debe sentirse como un producto **premium, rápido y limpio** — tan familiar como ChatGPT, pero inconfundiblemente **SoyBluia**.

> **Minimalista ≠ Vacío.** Cada pixel debe tener propósito. Si no aporta claridad, se elimina.

---

## 1. Principios (no negociables)

1. **Superficies neutras, Cobalto solo para lo importante** — `#0A34F5` solo en logo, CTA `Continuar`, `focus`, `selected`, links. El resto `blu-surface` / `blu-bg`.
2. **Mucho aire** — `max-w 768` para chat, `24px` entre secciones, `16px` dentro de grupos. Nunca cards gigantes.
3. **Tipografía como jerarquía** — Inter `12/14/16` + Geist `32` para `¿En qué puedo ayudarte?`, JetBrains solo para código. `line-height 1.5/1.6`, `letter-spacing -0.02em` en headlines.
4. **Bordes sutiles** — `1px solid #242B3D` (dark) / `#E2E5EB` (light), radius `8` (botones), `12` (cards), `24` (composer). Sombras `s` (8px) solo en composer/dropdowns.
5. **Transiciones 160ms `ease-out`** — hover, focus, dropdown, sidebar `220ms cubic`. Sin rebotes.

---

## 2. Tokens (usar tal cual, no inventar nuevos)

```css
/* globals.css:7 — Dark (default) */
--blu-bg: #0B0F1A; --blu-surface: #111625; --blu-surface-low: #111625;
--blu-surface-high: #171D2D; --blu-on: #F7F8FA; --blu-on-variant: #8E8E93;
--blu-outline: #242B3D; --blu-primary: #0A34F5; --blu-primary-solid: #0A34F5;

/* Light: bg #F2F4F8 / surface #FFFFFF / border #E2E5EB / text #0B0F1A */
```

Spacing: `4, 8, 12, 16, 24, 32, 48, 64` — usar `p-2=8`, `p-4=16`, `gap-3=12`, `gap-6=24`.
Tipografía: `kHeadlineLg 32/40 700 -0.02em`, `kBodyMd 14/20 400`, `kLabelMd 12/16 600`.

---

## 3. Layout AppShell (ChatGPT 260px)

```
┌─ Sidebar 260 → 72 colapsada ─┬─ Main ──────────────────────┐
│ bg-blu-surface-low            │ Header 48px bg-blu-bg       │
│ New Chat (borde + edit)       │  SoyBluia-Pro ▼    share ● │
│ Search (h-9, pl-8, focus ring)│                             │
│ Chats Hoy/Ayer/7d (11px caps) │  Chat max-w 768 px-4 py-8   │
│ Projects/Memory/...           │  Composer bottom sticky     │
│ Settings/Account              │                             │
└───────────────────────────────┴─────────────────────────────┘
```

- Desktop: `260` fija, colapsable a `72` (solo iconos). Tablet: colapsable. Mobile: drawer `280` + overlay `black/40` + `ESC` cierra.
- Sidebar `border-r border-blu-outline/20`, `New Chat` `border bg-blu-surface`, hover `bg-blu-surface-high`.

---

## 4. Componentes (spec exacta)

**Button:** `h-10 px-4 rounded-lg text-sm font-medium` — `primary: bg-blu-primary-solid text-white hover:bg-blu-primary`, `ghost: text-blu-on-variant hover:bg-blu-surface-high`, `disabled: opacity-50`.

**Input:** `h-11 rounded-lg border-blu-outline/20 bg-blu-surface px-3 text-sm focus:border-blu-primary-solid focus:ring-1` — label `text-xs font-medium text-blu-on-variant`.

**Card:** `rounded-xl border-blu-outline/20 bg-blu-surface-low p-4 hover:border-blu-primary/20` — header `text-xl font-medium`.

**Sidebar Item:** `px-2 py-2 rounded-lg text-sm hover:bg-blu-surface-high` — active `bg-blu-surface-high text-blu-on`, `...` aparece `group-hover:opacity-100`.

**Chat:**
- User: `flex justify-end` → `max-w-[70%] rounded-[18px] border-blu-outline/30 bg-blu-surface-high px-4 py-3 text-[15px]`
- Assistant: `flex gap-3` → avatar `w-8 h-8 rounded-lg bg-white border` + `MarkdownRenderer` (p `my-2`, code `bg-blu-surface-high px-1`, pre `bg-blu-surface-low border rounded-lg` + `Copiar`).

**Composer:** `Ask SoyBluia...` placeholder `text-blu-on-variant`, `rounded-xl border-blu-outline/20 bg-blu-surface-low p-2` + `Attach/@/Tools` `text-xs` + `ModelPill` + `Send ↑` `h-9 w-9 rounded-full bg-blu-primary-solid`. `auto-resize 132px`, `Enter` envía, `Shift+Enter` nueva línea.

**Dropdown:** `w-64 rounded-xl border bg-blu-surface-low shadow-2xl`, label `10px uppercase tracking-wider`, row `rounded-lg hover:bg-blu-surface-high`, selected `bg-blu-primary-soft text-white`.

---

## 5. Responsive & A11y

- Breakpoints `768/1024/1280`, `composer` `max-w-4xl` centrado, `chat` `max-w-768`.
- `button` real, `aria-label`, `focus-visible:ring-2`, `Escape` cierra menús, contraste `blu-on #F7F8FA` sobre `#0B0F1A` > 15:1.

---

## 6. Entregable

- [ ] `globals.css` + `Button/Input/Card` migrados a `blu`
- [ ] `AppShell` responsive + `Sidebar` búsqueda/agrupado/`...`
- [ ] `MarkdownRenderer` + `CodeBlock`
- [ ] `Composer` + `Settings` 2-cols
- [ ] `tsc 0` + `build 14 routes`

Criterio: `http://localhost:3001/chat` se siente **inmediata, limpia, premium** — como ChatGPT pero azul SoyBluia solo donde importa.
