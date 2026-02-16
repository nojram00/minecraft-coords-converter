/**
 * Hooks for converting Minecraft Overworld Coordinates to Nether Coords and Vice-versa.
 */

import { useState, type ReactNode } from "react";
import { CoordConverterCtx } from "../contexts/coordConverter";
import type ICoordinates from "../interfaces/coordinates";

export default function ConverterProvider({ children } : { children : ReactNode}) {

    const [coords, setCoords] = useState<ICoordinates>({
        x: 0, y: 0, z: 0
    });

    const otn = (overworld: ICoordinates) => {
        setCoords({
            x: overworld.x / 8,
            y: overworld.y,
            z: overworld.z / 8
        });
    };

    const nto = (nether: ICoordinates) => {
        setCoords({
            x: nether.x * 8,
            y: nether.y,
            z: nether.z * 8
        });
    };

    return <CoordConverterCtx.Provider value={{
        current: coords,
        otn,
        nto
    }}>{ children }</CoordConverterCtx.Provider>
}