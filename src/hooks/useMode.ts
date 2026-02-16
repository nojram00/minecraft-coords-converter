import { useContext } from "react";
import { ModeCtx } from "../contexts/convertMode";

export default function useMode() {
    const ctx = useContext(ModeCtx);

    if(!ctx) {
        throw new Error('No Context Provided');
    }

    return ctx;
}