import { Outlet } from "react-router-dom";
import Header from "./Header";

const HostVans = () => {
  return (
    <section className="p-8 bg-[#FFF7ED] min-h-screen">
      <Header />
      <Outlet />
    </section>
  );
};

export default HostVans;
