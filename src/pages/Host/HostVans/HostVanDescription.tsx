import { useOutletContext } from "react-router-dom";
import type { Van } from "../../../types/van";

interface OutletContextType {
  van: Van;
}

const HostVanDescription = () => {
  const { van } = useOutletContext<OutletContextType>();

  return (
    <div className="flex flex-col gap-2 py-4">
      <p>
        <strong>Name: </strong>
        {van.name}
      </p>
      <p>
        <strong>Category: </strong>
        {van.type}
      </p>
      <p>
        <strong>Desciption: </strong>
        {van.description}
      </p>
      <p>
        <strong>Visibility: </strong>Public
      </p>
    </div>
  );
};

export default HostVanDescription;
