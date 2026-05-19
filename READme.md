# Dev Sticker Forge – AI Build Specification (Phase-by-Phase)

## Project Overview

**Project Name:** Dev Sticker Forge

Dev Sticker Forge is a frontend web application that allows users to generate customizable “Developer Identity Stickers” using layered SVG rendering.

The product focuses on:

- Developer culture
- Coding humor
- Modern + retro aesthetics
- Highly customizable sticker generation
- Downloadable sticker assets

The application should NOT use AI image generation.

Instead, stickers are procedurally created using:

- SVG layers
- Typography
- Shapes
- Decorative icon assets
- Visual effects

---

# Core Product Goals

Users should be able to:

1. Enter custom sticker text
2. Choose a visual style
3. Choose a shape/background
4. Add developer-themed decorative elements
5. Apply visual effects
6. Download the sticker as PNG or SVG

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS

## Rendering

- SVG-based rendering system

## Language

- TypeScript preferred

## Deployment

- Vercel

---

# VERY IMPORTANT DEVELOPMENT RULES

## DO NOT BUILD EVERYTHING AT ONCE

The project MUST be developed in small isolated phases.

Each phase must:

- be fully functional
- be tested
- avoid introducing unfinished features
- avoid unnecessary abstractions
- minimize token/credit usage

The AI assistant should ONLY implement:

- the requested phase
- the requested components
- the requested logic

DO NOT prematurely build:

- authentication
- backend
- database
- API integrations
- analytics
- sharing systems
- marketplaces
- accounts

---

# Coding Standards

## General Rules

- Use reusable React components
- Keep components small and modular
- Avoid deeply nested logic
- Prefer composition over massive files
- Use TypeScript interfaces/types
- Keep state minimal and localized
- Avoid unnecessary dependencies

---

# Folder Structure

Use this structure:

```txt
src/
├── components/
├── features/
│   ├── sticker-builder/
│   ├── sticker-preview/
│   ├── controls/
│   └── export/
├── assets/
│   ├── icons/
│   ├── textures/
│   └── fonts/
├── styles/
├── hooks/
├── utils/
├── constants/
├── types/
└── App.tsx
```

---

# SVG Rendering Rules

## IMPORTANT

The sticker rendering engine should be:

- deterministic
- layered
- component-driven
- scalable
- export-friendly

DO NOT:

- render stickers with HTML screenshots
- use canvas as primary renderer
- hardcode styles directly in components

USE:

- SVG groups
- reusable SVG components
- configurable props

---

# State Management Rules

For MVP:

- use React state only
- avoid Redux/Zustand initially

Only introduce global state if truly necessary later.

---

# Styling Rules

Use:

- Tailwind utility classes
- centralized theme constants

Avoid:

- inline style clutter
- random hardcoded colors everywhere

---

# Accessibility Rules

Ensure:

- buttons have labels
- controls are keyboard accessible
- text contrast is readable
- SVGs have aria labels if necessary

---

# Performance Rules

DO:

- memoize expensive SVG computations if needed
- lazy load large assets later
- optimize rerenders

DO NOT:

- over-optimize early
- introduce complexity prematurely

---

# PHASED DEVELOPMENT PLAN

---

# PHASE 1 — Project Foundation

## Goal

Create the initial React + Tailwind application structure.

---

## Requirements

### Setup

- Vite + React + TypeScript
- Tailwind CSS configured
- Clean folder structure
- Responsive layout

### UI Layout

Create:

- Left control panel
- Right sticker preview panel

---

## Components To Create

### Layout Components

- AppLayout
- SidebarPanel
- PreviewPanel

### Initial Placeholder

Display:

- placeholder SVG sticker
- centered preview area

---

## Requirements

DO NOT:

- implement customization yet
- implement exports
- implement effects

ONLY:

- establish architecture

---

# PHASE 2 — Sticker Rendering Engine

## Goal

Build the core SVG rendering system.

---

## Requirements

Create:

- StickerCanvas component
- Layer rendering system
- SVG export-safe architecture

---

## SVG Structure

Sticker should support layers:

```txt
<svg>
  Background Shape
  Decorative Elements
  Text Layer
  Effects Layer
</svg>
```

---

## Required Features

### Dynamic Text

Render user-provided text.

### Dynamic Colors

Allow configurable theme colors.

### Dynamic Shapes

Render shape components via props.

---

## DO NOT ADD YET

- textures
- effects
- downloads
- animations

---

# PHASE 3 — Text Input System

## Goal

Allow users to customize sticker text.

---

## Requirements

Create:

- text input
- live preview updates

---

## Validation Rules

- max length: 40 characters
- trim excessive spaces
- prevent SVG breaking characters

---

## UI Requirements

Add:

- live character counter
- placeholder examples

Examples:

- Deploy & Pray
- Frontend Mage
- Git Push Panic

---

# PHASE 4 — Typography Styles

## Goal

Add selectable text styles.

---

## Required Styles

Implement:

- pixel
- terminal
- cyberpunk
- handwritten
- retro arcade
- monospace
- vaporwave
- minimalist
- hacker
- anime-inspired

---

## Implementation Rules

DO NOT:

- hardcode giant conditionals

USE:

- typography configuration objects

Example:

```ts
const typographyThemes = {
  pixel: {},
  terminal: {},
}
```

---

## Requirements

Each typography theme should define:

- font family
- font size
- letter spacing
- text transform
- default colors

---

# PHASE 5 — Background Shapes

## Goal

Add selectable sticker shapes.

---

## Required Shapes

Implement:

- rounded rectangle
- badge
- speech bubble
- holographic blob
- terminal window
- floppy disk
- code editor tab
- browser window
- command prompt

---

## Architecture Rules

Each shape should be:

- its own SVG component
- reusable
- configurable

Example:

```tsx
<RoundedRectangle />
<SpeechBubble />
```

---

# PHASE 6 — Decorative Elements

## Goal

Add developer-themed icons and decorative assets.

---

## Required Decorative Elements

Implement:

- brackets {}
- </>
- cursor
- terminal prompt
- Git branch
- coffee cup
- rubber duck
- bug icon
- keyboard keys
- tabs/windows

---

## Implementation Rules

Use:

- SVG icons
- modular assets
- configurable positioning

DO NOT:

- use random absolute positioning everywhere

Create:

- layout positioning utilities

---

# PHASE 7 — Color Themes

## Goal

Add predefined aesthetic themes.

---

## Example Themes

Implement:

- dark mode hacker
- vaporwave pink
- retro green terminal
- synthwave neon
- minimalist grayscale
- arcade purple

---

## Rules

Use:

- centralized theme configuration

Example:

```ts
const colorThemes = {
  hacker: {},
  vaporwave: {},
}
```

---

# PHASE 8 — Visual Effects System

## Goal

Add optional visual effects.

---

## Required Effects

Implement:

- glitch
- shadow
- neon
- outline
- sticker border
- CRT texture
- scanlines
- gradients
- noise

---

## IMPORTANT

Effects should be:

- toggleable
- layered
- non-destructive

---

## Implementation Recommendation

Prefer:

- SVG filters
- masks
- gradients
- patterns

Avoid:

- heavy JS animations

---

# PHASE 9 — Download System

## Goal

Allow sticker export.

---

## Required Export Types

Implement:

- SVG download
- PNG download

---

## Requirements

PNG export should:

- preserve transparency
- preserve quality
- support high resolution

---

## Suggested Approach

Use:

- SVG serialization
- canvas conversion ONLY for PNG export

---

# PHASE 10 — UX Polish

## Goal

Improve usability and visual polish.

---

## Requirements

Add:

- responsive controls
- hover states
- loading states if necessary
- empty states
- smooth transitions

---

## Add Presets

Create quick presets like:

- Frontend Mage
- Deploy & Pray
- Git Goblin
- Bug Hunter
- CSS Survivor

---

# PHASE 11 — Refactoring & Optimization

## Goal

Clean architecture before expansion.

---

## Requirements

Review:

- duplicated logic
- unnecessary rerenders
- large components
- prop drilling

---

## Optimization Targets

- memoize SVG layers
- optimize export logic
- organize configs/constants

---

# FUTURE FEATURES (NOT MVP)

DO NOT BUILD THESE YET.

Possible future expansions:

- sticker packs
- animation
- GIF export
- user accounts
- community gallery
- cloud saving
- template marketplace
- multiplayer collaboration
- profile system

---

# UI Direction

The visual direction should combine:

## Modern

- clean layouts
- smooth spacing
- readable controls

## Retro

- pixel textures
- CRT vibes
- arcade influences

## Developer Humor

- coding jokes
- terminal references
- relatable dev culture

---

# Suggested Design Inspiration

Visual inspiration references:

- VSCode themes
- retro terminals
- synthwave
- GitHub stickers
- arcade UI
- old operating systems
- cyberpunk interfaces

---

# IMPORTANT IMPLEMENTATION RULES FOR AI ASSISTANTS

## NEVER:

- rewrite the whole project unnecessarily
- refactor unrelated files
- install excessive dependencies
- create giant monolithic components
- implement future phases early

---

# ALWAYS:

- complete ONE phase at a time
- verify functionality before continuing
- maintain clean reusable architecture
- keep components modular
- avoid breaking existing features

---

# Success Criteria For MVP

The MVP is successful if:

- users can create stylish dev stickers
- stickers look visually polished
- export works correctly
- customization feels fun and fast
- UI feels modern and playful

---

# Final Product Identity

Dev Sticker Forge should feel like:

- a creative toy
- a developer identity tool
- a design playground
- a humorous coding culture app

NOT:

- an AI art generator
- a generic meme maker
- a complicated design suite
