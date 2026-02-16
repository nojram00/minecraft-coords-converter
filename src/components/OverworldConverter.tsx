import { useState } from "react";
import type ICoordinates from "../interfaces/coordinates";
import TextInput from "./TextInput";
import useConverter from "../hooks/useConverter";
import Button from "./Button";

export default function OverworldConverter() {
  const converter = useConverter();

  const [coords, setCoords] = useState<ICoordinates>({
    x: 0,
    y: 0,
    z: 0,
  });

  const handleConversion = () => {
    converter.otn(coords);
  };

  return (
    <div className="max-w-md space-y-5 flex flex-col mx-auto mt-10">
      <fieldset className="flex gap-5">
        <legend className="py-5">Your Current Overworld Position</legend>
        <TextInput
          label="X Coordinate"
          type="number"
          placeholder="Your X Coordinate"
          value={coords.x}
          onChange={(e) =>
            setCoords((prev) => ({
              ...prev,
              x: Number(e.target.value),
            }))
          }
        />
        <TextInput
          label="Y Coordinate"
          type="number"
          placeholder="Your X Coordinate"
          value={coords.y}
          onChange={(e) =>
            setCoords((prev) => ({
              ...prev,
              y: Number(e.target.value),
            }))
          }
        />
        <TextInput
          label="Z Coordinate"
          type="number"
          placeholder="Your X Coordinate"
          value={coords.z}
          onChange={(e) =>
            setCoords((prev) => ({
              ...prev,
              z: Number(e.target.value),
            }))
          }
        />
      </fieldset>

      <Button onClick={handleConversion}>Convert to Nether Position</Button>
    </div>
  );
}
