import React from "react";
import type { StickerColors } from "../../../types/sticker";
import type { DecorativeElementKey } from "../../../types/decorative";
import BracketsIcon from "./decoratives/BracketsIcon";
import JsxTagIcon from "./decoratives/JsxTagIcon";
import CursorIcon from "./decoratives/CursorIcon";
import TerminalPromptIcon from "./decoratives/TerminalPromptIcon";
import GitBranchIcon from "./decoratives/GitBranchIcon";
import CoffeeCupIcon from "./decoratives/CoffeeCupIcon";
import RubberDuckIcon from "./decoratives/RubberDuckIcon";
import BugIcon from "./decoratives/BugIcon";
import KeyboardKeyIcon from "./decoratives/KeyboardKeyIcon";
import TabsWindowsIcon from "./decoratives/TabsWindowsIcon";
import { getDecorativePosition } from "../../../utils/decorativePositions";

interface DecorativeLayerProps {
  colors: StickerColors;
  width: number;
  height: number;
  elements?: DecorativeElementKey[];
}

const DecorativeLayer: React.FC<DecorativeLayerProps> = ({
  colors,
  width,
  height,
  elements = [],
}) => {
  // If no elements selected, render the original placeholder (matches Phase 2 behavior)
  if (elements.length === 0) {
    const cx = width / 2;
    return (
      <g opacity="0.18">
        <text
          x={cx - 80}
          y={height - 28}
          fontFamily="monospace"
          fontSize="11"
          fill={colors.accent}
          letterSpacing="2"
        >
          {"</>"}
        </text>
        <text
          x={cx + 52}
          y={height - 28}
          fontFamily="monospace"
          fontSize="11"
          fill={colors.accent}
          letterSpacing="2"
        >
          {"{ }"}
        </text>
      </g>
    );
  }

  return (
    <g id="decorative-layer">
      {elements.map((key) => {
        const { x, y } = getDecorativePosition(key);

        switch (key) {
          case "brackets":
            return <BracketsIcon key={key} x={x} y={y} color={colors.accent} />;
          case "jsx-tag":
            return <JsxTagIcon key={key} x={x} y={y} color={colors.accent} />;
          case "cursor":
            return <CursorIcon key={key} x={x} y={y} color={colors.accent} />;
          case "terminal-prompt":
            return (
              <TerminalPromptIcon key={key} x={x} y={y} color={colors.accent} />
            );
          case "git-branch":
            return (
              <GitBranchIcon key={key} x={x} y={y} color={colors.accent} />
            );
          case "coffee-cup":
            return (
              <CoffeeCupIcon key={key} x={x} y={y} color={colors.accent} />
            );
          case "rubber-duck":
            return (
              <RubberDuckIcon key={key} x={x} y={y} color={colors.accent} />
            );
          case "bug-icon":
            return <BugIcon key={key} x={x} y={y} color={colors.accent} />;
          case "keyboard-key":
            return (
              <KeyboardKeyIcon key={key} x={x} y={y} color={colors.accent} />
            );
          case "tabs-windows":
            return (
              <TabsWindowsIcon key={key} x={x} y={y} color={colors.accent} />
            );
          default:
            return null;
        }
      })}
    </g>
  );
};

export default DecorativeLayer;
