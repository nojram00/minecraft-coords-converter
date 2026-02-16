import useConverter from "../hooks/useConverter";

export default function CurrentCoords() {
    const converter = useConverter();

    return <div className="max-w-md flex gap-5 mx-auto mt-10">
        <span>Your Coordinates: </span><span>{ converter.current.x } { converter.current.y } { converter.current.z }</span>
    </div>
}