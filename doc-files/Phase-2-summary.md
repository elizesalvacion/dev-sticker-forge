# Dev Sticker Forge — Phase 2 Summary

## Phase: Sticker Rendering Engine

**Status:** ✅ Complete  
**Goal:** Build the core layered SVG rendering system driven by a `StickerConfig` prop.

---

## What Was Built

### New Files Created

| File                  | Path                                                      | Purpose                                                   |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `sticker.ts`          | `src/types/sticker.ts`                                    | Core types: `StickerConfig`, `StickerColors`, `ShapeType` |
| `defaults.ts`         | `src/constants/defaults.ts`                               | Default config and colors                                 |
| `BackgroundLayer.tsx` | `src/features/sticker-preview/layers/BackgroundLayer.tsx` | Renders shape: rounded-rect, badge, speech-bubble         |
| `TextLayer.tsx`       | `src/features/sticker-preview/layers/TextLayer.tsx`       | Renders primary + secondary text                          |
| `DecorativeLayer.tsx` | `src/features/sticker-preview/layers/DecorativeLayer.tsx` | Placeholder for Phase 6 decorative icons                  |
| `EffectsLayer.tsx`    | `src/features/sticker-preview/layers/EffectsLayer.tsx`    | Placeholder for Phase 8 effects                           |

### Files Updated

| File                | Change                                                                   |
| ------------------- | ------------------------------------------------------------------------ |
| `StickerCanvas.tsx` | Fully replaced — now composes all 4 layers, accepts `StickerConfig` prop |
| `PreviewPanel.tsx`  | Added temporary shape switcher buttons for testing the 3 shapes          |

---

## SVG Layer Architecture

```
<svg id="sticker-canvas" 320×320>
  ├── <BackgroundLayer />   ← Shape + border + corner accents
  ├── <DecorativeLayer />   ← Placeholder </>  { }  (Phase 6)
  ├── <TextLayer />         ← Primary + subText
  └── <EffectsLayer />      ← Empty group (Phase 8)
</svg>
```

Each layer is a separate React component that receives `colors`, `width`, `height` (and shape-specific props) — fully composable and export-safe.

---

## Shapes Implemented

| Shape             | Key             | Notes                               |
| ----------------- | --------------- | ----------------------------------- |
| Rounded Rectangle | `rounded-rect`  | Default. Corner bracket accents.    |
| Badge             | `badge`         | Ellipse with inner dashed ring.     |
| Speech Bubble     | `speech-bubble` | Rounded rect with bottom-left tail. |

---

## Types Introduced

```ts
// src/types/sticker.ts

type ShapeType = 'rounded-rect' | 'badge' | 'speech-bubble';

interface StickerColors {
  background: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
}

interface StickerConfig {
  text: string;
  subText?: string;
  shape: ShapeType;
  colors: StickerColors;
}
```

---

## ⚠️ Project-Wide TypeScript Rule — MUST FOLLOW IN ALL PHASES

**`verbatimModuleSyntax` is enabled in `tsconfig.json`.**

This means **every type-only import must use `import type`** syntax, or the compiler will throw an error.

### Rule

```ts
// ❌ WRONG — will error
import { StickerConfig, ShapeType } from '../types/sticker';

// ✅ CORRECT — always do this for types/interfaces
import type { StickerConfig, ShapeType } from '../types/sticker';
```

### When to use `import type`

- Importing **interfaces** → always `import type`
- Importing **type aliases** → always `import type`
- Importing **enums used only as types** → `import type`
- Importing **React components or functions** → regular `import` (not type)

This rule applies to **every file in every future phase** without exception.

---

## Architecture Decisions

- All layers accept `width` and `height` as props — canvas size is never hardcoded inside layers
- `StickerCanvas` owns the `320×320` size constant — layers are size-agnostic
- `DecorativeLayer` and `EffectsLayer` are stubs that render placeholder content — they exist now so the import chain is established for future phases
- `PreviewPanel` holds temporary shape-switcher buttons; these will be removed when Phase 5 (Background Shapes) adds proper sidebar controls
- `DEFAULT_STICKER_CONFIG` in `constants/defaults.ts` is the single source of truth for initial state

---

## What Was NOT Built (Intentionally)

- ❌ Text input (Phase 3)
- ❌ Typography styles (Phase 4)
- ❌ Full shape library (Phase 5)
- ❌ Real decorative icons (Phase 6)
- ❌ Color theme picker (Phase 7)
- ❌ Visual effects (Phase 8)
- ❌ Export/download (Phase 9)

---

## Testing Checklist

- [ ] App renders without errors
- [ ] Default sticker shows "Dev Sticker / Forge" text
- [ ] Clicking "Rect" shows rounded rectangle shape
- [ ] Clicking "Badge" shows ellipse/badge shape
- [ ] Clicking "Bubble" shows speech bubble shape
- [ ] Switching shapes does not break layout
- [ ] Console shows no TypeScript errors

---

## Next Phase

**Phase 3 — Text Input System**

Goals:

- Add text input field to `SidebarPanel`
- Wire input to `StickerConfig.text` via React state in `App.tsx` or `PreviewPanel`
- Live preview updates as user types
- 40-character limit with counter
- Sanitize SVG-breaking characters
- Placeholder examples: "Deploy & Pray", "Frontend Mage", "Git Push Panic"
