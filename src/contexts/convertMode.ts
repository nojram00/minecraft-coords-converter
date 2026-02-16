import { createContext } from "react";
import type { IMode } from "../interfaces/modeEnum";

export const ModeCtx = createContext<IMode | null>(null);