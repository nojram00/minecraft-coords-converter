import { createContext } from "react";
import type ICoordConverter from "../interfaces/converter";

export const CoordConverterCtx = createContext<ICoordConverter | null>(null);