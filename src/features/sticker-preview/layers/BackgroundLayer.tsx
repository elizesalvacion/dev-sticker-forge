import React from "react";
import type { ShapeType, StickerColors } from "../../../types/sticker";
import RoundedRect from "./shapes/RoundedRect";
import Badge from "./shapes/Badge";
import SpeechBubble from "./shapes/SpeechBubble";
import HolographicBlob from "./shapes/HolographicBlob";
import TerminalWindow from "./shapes/TerminalWindow";
import FloppyDisk from "./shapes/FloppyDisk";
import CodeEditorTab from "./shapes/CodeEditorTab";
import BrowserWindow from "./shapes/BrowserWindow";
import CommandPrompt from "./shapes/CommandPrompt";

interface BackgroundLayerProps {
  shape: ShapeType;
  colors: StickerColors;
  width: number;
  height: number;
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({
  shape,
  colors,
  width,
  height,
}) => {
  const props = { colors, width, height };
  switch (shape) {
    case "badge":
      return <Badge {...props} />;
    case "speech-bubble":
      return <SpeechBubble {...props} />;
    case "holographic-blob":
      return <HolographicBlob {...props} />;
    case "terminal-window":
      return <TerminalWindow {...props} />;
    case "floppy-disk":
      return <FloppyDisk {...props} />;
    case "code-editor-tab":
      return <CodeEditorTab {...props} />;
    case "browser-window":
      return <BrowserWindow {...props} />;
    case "command-prompt":
      return <CommandPrompt {...props} />;
    case "rounded-rect":
    default:
      return <RoundedRect {...props} />;
  }
};

export default BackgroundLayer;
