# Dev Sticker Forge — Mobile Responsive Summary

## Phase: Mobile Responsiveness

**Status:** ✅ Complete  
**Goal:** Make the app fully usable on mobile devices with a slide-up controls drawer, scaled canvas, and fixed bottom toolbar.

---

## What Was Built

### New Files Created

| File                | Path                               | Purpose                                            |
| ------------------- | ---------------------------------- | -------------------------------------------------- |
| `useMediaQuery.ts`  | `src/hooks/useMediaQuery.ts`       | Reactive hook for CSS media query matching         |
| `MobileDrawer.tsx`  | `src/components/MobileDrawer.tsx`  | Slide-up bottom sheet for mobile controls          |
| `MobileToolbar.tsx` | `src/components/MobileToolbar.tsx` | Fixed bottom bar with Customize + Download buttons |

### Files Updated

| File                                             | Change                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| `src/components/AppLayout.tsx`                   | Mobile/desktop layout switch via `useMediaQuery`                        |
| `src/components/SidebarPanel.tsx`                | Full-width on mobile, header hidden inside drawer, extra bottom padding |
| `src/components/PreviewPanel.tsx`                | Canvas scales to fit mobile viewport, download panel hidden on mobile   |
| `src/features/sticker-preview/StickerCanvas.tsx` | Canvas scales down using `viewBox` + dynamic `width`/`height`           |

---

## Mobile Layout Architecture

```
Mobile (< 768px)
─────────────────────────────────
┌─────────────────────────────┐
│         PreviewPanel        │  ← full screen, padded bottom for toolbar
│      (sticker canvas)       │
│                             │
└─────────────────────────────┘
┌─────────────────────────────┐
│  ⚙ Customize  │ SVG │ PNG  │  ← MobileToolbar (fixed bottom)
└─────────────────────────────┘

When drawer is open:
┌─────────────────────────────┐
│         PreviewPanel        │
│         (dimmed)            │
├─────────────────────────────┤  ← MobileDrawer (slides up, 80vh max)
│  // Controls          ✕    │
├─────────────────────────────┤
│   SidebarPanel (scrollable) │
└─────────────────────────────┘

Desktop (≥ 768px) — unchanged
─────────────────────────────────
┌──────────┬──────────────────┐
│ Sidebar  │   PreviewPanel   │
│  Panel   │  + DownloadPanel │
└──────────┴──────────────────┘
```

---

## Responsive Breakpoints

| Breakpoint          | Layout                                                   |
| ------------------- | -------------------------------------------------------- |
| `< 768px` (mobile)  | Stacked — preview full screen, controls in bottom drawer |
| `≥ 768px` (desktop) | Side-by-side — sidebar left, preview right               |

---

## Canvas Scaling

On mobile the canvas scales down to fit the viewport:

```ts
const canvasSize = isMobile
  ? Math.min(260, window.innerWidth - 48)
  : 320;
```

The SVG `viewBox` always stays `0 0 320 320` — the internal coordinate system is never changed. Only the rendered `width`/`height` shrinks. This means:

- Export always produces full 320×320 SVG (640×640 PNG at 2×)
- No shapes, text, or effects need responsive variants
- The canvas is pixel-perfect on all screen sizes

---

## MobileDrawer

- Slides up from bottom with `translate-y` transition
- Max height `80vh` — leaves preview visible at top
- Backdrop darkens the preview when open
- Drag handle at top for visual affordance
- Close button (✕) in drawer header
- Body scroll locked when open via `document.body.style.overflow`
- `overscroll-contain` on content to prevent scroll chaining

## MobileToolbar

- Fixed to bottom of screen, always visible
- Three actions: Customize (opens drawer), SVG download, PNG download
- Download buttons disabled and dimmed when canvas is empty
- PNG button uses accent color to draw attention as primary action

---

## Folder Structure

```
src/
├── components/
│   ├── AppLayout.tsx             ✅ updated
│   ├── SidebarPanel.tsx          ✅ updated
│   ├── PreviewPanel.tsx          ✅ updated
│   ├── EmptyStateCanvas.tsx      ✅
│   ├── MobileDrawer.tsx          ✅ new
│   └── MobileToolbar.tsx         ✅ new
├── features/
│   ├── sticker-preview/
│   │   ├── StickerCanvas.tsx     ✅ updated
│   │   └── layers/               ✅ all unchanged
│   ├── controls/                 ✅ all unchanged
│   └── export/                   ✅ all unchanged
├── hooks/
│   ├── useTransition.ts          ✅
│   └── useMediaQuery.ts          ✅ new
├── constants/                    ✅ all unchanged
├── types/                        ✅ all unchanged
├── App.tsx                       ✅ unchanged
├── main.tsx
└── index.css
```

---

## ⚠️ Project-Wide TypeScript Rule — MUST FOLLOW IN ALL PHASES

**`verbatimModuleSyntax` is enabled in `tsconfig.json`.**

All type-only imports must use `import type`:

```ts
// ❌ WRONG
import { StickerConfig } from '../types/sticker';

// ✅ CORRECT
import type { StickerConfig } from '../types/sticker';
```

---

## Testing Checklist

### Mobile (< 768px)

- [ ] Preview fills the screen with sticker centered
- [ ] Fixed bottom toolbar shows Customize, SVG, PNG buttons
- [ ] Tapping Customize opens the slide-up drawer
- [ ] Drawer slides up smoothly from bottom
- [ ] Backdrop darkens preview behind drawer
- [ ] Tapping backdrop closes the drawer
- [ ] ✕ button closes the drawer
- [ ] All controls scroll inside the drawer without affecting page scroll
- [ ] Changes in drawer update the sticker live (visible behind drawer)
- [ ] SVG and PNG buttons are disabled when canvas is empty
- [ ] SVG and PNG buttons trigger downloads when canvas has content
- [ ] Canvas scales to fit narrow screens without overflow
- [ ] No horizontal scroll at any mobile width

### Desktop (≥ 768px)

- [ ] Layout unchanged — sidebar left, preview right
- [ ] Download panel still appears below canvas on desktop
- [ ] No toolbar or drawer visible on desktop
- [ ] Sidebar header visible on desktop, hidden in drawer

---

## Next Phase

**Phase 11 — Refactoring & Optimization**

Goals:

- Memoize `StickerCanvas` and all layer components with `React.memo`
- Audit unnecessary re-renders with React DevTools
- Consolidate any duplicated logic (e.g. `isMobile` checks)
- Review prop drilling — consider a lightweight context for `config` if needed
- Clean up large components that have grown across phases
- Verify export handles all edge cases (empty text, special chars, all effects active)
- Final pass on TypeScript strictness
