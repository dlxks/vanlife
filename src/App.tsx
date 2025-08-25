import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Host from "./pages/Host";
import HostVans from "./pages/Host/HostVans";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVanDetail from "./pages/Host/HostVans/HostVanDetail";
import HostVanDescription from "./pages/Host/HostVans/HostVanDescription";
import HostVanPricing from "./pages/Host/HostVans/HostVanPricing";
import HostVanPictures from "./pages/Host/HostVans/HostVanPictures";
import PageNotFound from "./components/Redirects/PageNotFound";
import AuthRequired from "./auth/AuthRequired";
import Login from "./pages/Login";
import Unauthorized from "./components/Redirects/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Login Route */}
          <Route path="login" element={<Login />} />

          {/* Home Routes */}
          <Route index element={<Home />} />

          {/* About Routes */}
          <Route path="about" element={<About />} />

          {/* Vans Routes */}
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<AuthRequired />}>
            {/* Host Routes */}
            <Route path="/host" element={<Host />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />

              {/* Host Vans Routes */}
              <Route path="vans" element={<HostVans />} />

              {/* Host Van Details Routes */}
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanDescription />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="pictures" element={<HostVanPictures />} />
              </Route>

              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          {/* Page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
