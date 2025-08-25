import { Link, NavLink, useNavigate } from "react-router-dom";
import { cn } from "../../helpers/cn";
import Avatar from "../Avatar";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const defaultClasses = "transition duration-200 hover:border-b-2";
  const activeClasses = "font-bold border-b-2";
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("loggedin") === "true";

  const navLinks = [
    { name: "Host", to: "host" },
    { name: "About", to: "about" },
    { name: "Vans", to: "vans" },
  ];

  function logout() {
    // Remove login flag
    localStorage.removeItem("loggedin");

    // Optionally remove other user data if stored
    localStorage.removeItem("user"); // if you stored user info

    // Redirect to login page
    navigate("/login", { replace: true });
  }

  return (
    <header>
      <nav className="bg-[#FFF7ED] shadow-sm">
        <div className="container mx-auto py-6 px-4 flex items-center justify-between">
          <Link
            to="/"
            className="uppercase decoration-0 font-extrabold text-2xl tracking-wide "
          >
            #Vanlife
          </Link>

          <div className="flex items-center justify-center gap-4 font-medium">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "transition-all duration-300 ease-in-out",
                    defaultClasses,
                    isActive && activeClasses
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="login" className="login-link">
              <Avatar className="w-7 h-7 border-2 border-zinc-900" />
            </Link>
            {isLoggedIn && (
              <button
                onClick={logout}
                className="ml-2 p-1 rounded hover:bg-zinc-100 transition"
                aria-label="Logout"
              >
                <ArrowRightEndOnRectangleIcon className="size-6 cursor-pointer hover:text-zinc-700" />
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
