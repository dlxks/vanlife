import { useOutletContext } from "react-router-dom";
import type { Van } from "../../../types/van";

interface OutletContextType {
  van: Van;
}
const HostVanPricing = () => {
  const { van } = useOutletContext<OutletContextType>();

  return (
    <div className="py-4">
      <p className="text-lg">
        <strong>Price: </strong>${van.price} per day
      </p>
    </div>
  );
};

export default HostVanPricing;
