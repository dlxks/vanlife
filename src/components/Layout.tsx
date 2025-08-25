import { Outlet } from "react-router-dom";
import Navbar from "./Header/Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
