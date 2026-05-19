# Dev Sticker Forge — Phase 5 Summary

## Phase: Background Shapes

**Status:** ✅ Complete  
**Goal:** Add all 9 selectable sticker shapes, each as its own SVG component, with a shape selector UI in the sidebar.

---

## What Was Built

### New Files Created

| File                  | Path                                                             | Purpose                                  |
| --------------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| `RoundedRect.tsx`     | `src/features/sticker-preview/layers/shapes/RoundedRect.tsx`     | Rounded rectangle with corner accents    |
| `Badge.tsx`           | `src/features/sticker-preview/layers/shapes/Badge.tsx`           | Ellipse with dashed inner ring           |
| `SpeechBubble.tsx`    | `src/features/sticker-preview/layers/shapes/SpeechBubble.tsx`    | Rounded rect with bottom-left tail       |
| `HolographicBlob.tsx` | `src/features/sticker-preview/layers/shapes/HolographicBlob.tsx` | Organic blob with radial gradient        |
| `TerminalWindow.tsx`  | `src/features/sticker-preview/layers/shapes/TerminalWindow.tsx`  | macOS-style terminal with traffic lights |
| `FloppyDisk.tsx`      | `src/features/sticker-preview/layers/shapes/FloppyDisk.tsx`      | Retro floppy disk shape                  |
| `CodeEditorTab.tsx`   | `src/features/sticker-preview/layers/shapes/CodeEditorTab.tsx`   | VSCode-style editor tab                  |
| `BrowserWindow.tsx`   | `src/features/sticker-preview/layers/shapes/BrowserWindow.tsx`   | Browser chrome with URL bar              |
| `CommandPrompt.tsx`   | `src/features/sticker-preview/layers/shapes/CommandPrompt.tsx`   | Windows CMD prompt style                 |
| `ShapeSelector.tsx`   | `src/features/controls/ShapeSelector.tsx`                        | 3-column grid selector UI                |

### Files Updated

| File                                                      | Change                                                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `src/types/sticker.ts`                                    | Expanded `ShapeType` to all 9 values                                                        |
| `src/features/sticker-preview/layers/BackgroundLayer.tsx` | Refactored to clean router — all shape logic moved to individual files                      |
| `src/components/SidebarPanel.tsx`                         | Added Shape section, removed Shape placeholder slot, only Colors + Effects remain as "soon" |

---

## Shapes Implemented

| Shape             | Key                | Visual Style                                    |
| ----------------- | ------------------ | ----------------------------------------------- |
| Rounded Rectangle | `rounded-rect`     | Default. Rounded corners + bracket accents      |
| Badge             | `badge`            | Ellipse with dashed inner ring                  |
| Speech Bubble     | `speech-bubble`    | Bubble with bottom-left tail                    |
| Holographic Blob  | `holographic-blob` | Organic bezier blob with radial gradient        |
| Terminal Window   | `terminal-window`  | macOS terminal with traffic lights + bash title |
| Floppy Disk       | `floppy-disk`      | Retro floppy with shutter + label area          |
| Code Editor Tab   | `code-editor-tab`  | VSCode tab with filename + line numbers         |
| Browser Window    | `browser-window`   | Browser chrome with traffic lights + URL bar    |
| Command Prompt    | `command-prompt`   | Windows CMD with prompt lines + cursor          |

---

## Architecture

```
BackgroundLayer.tsx  ←  pure switch/router
  ├── shapes/RoundedRect.tsx
  ├── shapes/Badge.tsx
  ├── shapes/SpeechBubble.tsx
  ├── shapes/HolographicBlob.tsx
  ├── shapes/TerminalWindow.tsx
  ├── shapes/FloppyDisk.tsx
  ├── shapes/CodeEditorTab.tsx
  ├── shapes/BrowserWindow.tsx
  └── shapes/CommandPrompt.tsx
```

Each shape component:

- Accepts only `{ colors, width, height }`
- Is completely self-contained
- Has no knowledge of other shapes or layers
- Is safe for SVG export

---

## ⚠️ Project-Wide TypeScript Rule — MUST FOLLOW IN ALL PHASES

**`verbatimModuleSyntax` is enabled in `tsconfig.json`.**

All type-only imports must use `import type`:

```ts
// ❌ WRONG
import { StickerColors } from '../types/sticker';

// ✅ CORRECT
import type { StickerColors } from '../types/sticker';
```

- Interfaces → always `import type`
- Type aliases → always `import type`
- React components or functions → regular `import`

---

## What Was NOT Built (Intentionally)

- ❌ Decorative icons (Phase 6)
- ❌ Color theme picker (Phase 7)
- ❌ Visual effects (Phase 8)
- ❌ Export/download (Phase 9)

---

## Testing Checklist

- [ ] All 9 shape buttons render in the sidebar
- [ ] Clicking each shape updates the sticker canvas live
- [ ] `rounded-rect` shows corner bracket accents
- [ ] `badge` shows ellipse with dashed inner ring
- [ ] `speech-bubble` shows tail at bottom-left
- [ ] `holographic-blob` shows organic shape with gradient
- [ ] `terminal-window` shows traffic lights + bash title bar
- [ ] `floppy-disk` shows shutter slot + label area
- [ ] `code-editor-tab` shows tab + sticker.tsx filename
- [ ] `browser-window` shows URL bar + traffic lights
- [ ] `command-prompt` shows prompt lines + cursor block
- [ ] Text renders correctly on top of all shapes
- [ ] Typography selection still works with all shapes
- [ ] No TypeScript errors in console

---

## Next Phase

**Phase 6 — Decorative Elements**

Goals:

- Add `decorativeElements` array field to `StickerConfig`
- Create `src/constants/decoratives.ts` with all 10 element definitions
- Build individual SVG icon components in `src/features/sticker-preview/layers/decoratives/`
- Update `DecorativeLayer.tsx` to render selected elements
- Add a multi-select toggle UI to `SidebarPanel`
- Elements: brackets `{}`, `</>`, cursor, terminal prompt, Git branch, coffee cup, rubber duck, bug icon, keyboard key, tabs/windows
- Create layout positioning utilities so icons don't randomly overlap text
