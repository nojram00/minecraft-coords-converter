import { useContext } from "react";
import { CoordConverterCtx } from "../contexts/coordConverter";

export default function useConverter() {
    const converter = useContext(CoordConverterCtx);

    if(converter == null) throw new Error('No Converter Found');

    return converter;
}