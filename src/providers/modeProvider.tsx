import { useState, type ReactNode } from "react";
import { ModeCtx } from "../contexts/convertMode";
import type { Mode } from "../interfaces/modeEnum";

export default function ModeProvider({ children } : {
    children: ReactNode
}) {
  const [mode, setMode] = useState<Mode>("otn");

  const change = (mode: Mode) => {
    setMode(mode);
  };

  return <ModeCtx.Provider value={{ current_mode: mode, change }}>{ children }</ModeCtx.Provider>;
}
