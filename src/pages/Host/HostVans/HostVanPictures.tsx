import { useOutletContext } from "react-router-dom";
import type { Van } from "../../../types/van";

interface OutletContextType {
  van: Van;
}
const HostVanPictures = () => {
  const { van } = useOutletContext<OutletContextType>();

  return (
    <div className="py-4">
      <img src={van.imageUrl} alt={van.name} className="h-50" />
    </div>
  );
};

export default HostVanPictures;
