import { useState } from "react";
import useConverter from "../hooks/useConverter";
import TextInput from "./TextInput";
import type ICoordinates from "../interfaces/coordinates";
import Button from "./Button";

export default function NetherConverter() {
  const converter = useConverter();

  const [coords, setCoords] = useState<ICoordinates>({
    x: 0,
    y: 0,
    z: 0,
  });

  const handleConversion = () => {
    converter.nto(coords);
  };

  return (
    <div className="max-w-md space-y-5 flex flex-col mx-auto mt-10">
      <fieldset className="flex gap-5">
        <legend className="py-5">Your Current Nether Position</legend>
        <TextInput
          label="X Coordinate"
          type="number"
          placeholder="Your X Coordinate"
          defaultValue={coords.x}
          onChange={(e) =>
            setCoords((prev) => ({
              ...prev,
              x: Number(e.target.value ?? 0),
            }))
          }
        />
        <TextInput
          label="Y Coordinate"
          type="number"
          placeholder="Your X Coordinate"
          defaultValue={coords.y}
          onChange={(e) =>
            setCoords((prev) => ({
              ...prev,
              y: Number(e.target.value ?? 0),
            }))
          }
        />
        <TextInput
          label="Z Coordinate"
          type="number"
          placeholder="Your X Coordinate"
          defaultValue={coords.z}
          onChange={(e) =>
            setCoords((prev) => ({
              ...prev,
              z: Number(e.target.value ?? 0),
            }))
          }
        />
      </fieldset>

      <Button onClick={handleConversion}>Convert To Overworld Position</Button>
    </div>
  );
}
