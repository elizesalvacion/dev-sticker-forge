export type DecorativeElementKey =
  | "brackets"
  | "jsx-tag"
  | "cursor"
  | "terminal-prompt"
  | "git-branch"
  | "coffee-cup"
  | "rubber-duck"
  | "bug-icon"
  | "keyboard-key"
  | "tabs-windows";

export interface DecorativeElementDef {
  key: DecorativeElementKey;
  label: string;
}
