import { NavLink } from "react-router-dom";
import { cn } from "../../helpers/cn";

const Header = () => {
  const defaultClasses = "transition duration-200 hover:border-b";
  const activeClasses = "font-medium border-b";

  const navlinks = [
    { name: "Dashboard", to: "/host", end: true },
    { name: "Income", to: "/host/income" },
    { name: "Vans", to: "/host/vans" },
    { name: "Reviews", to: "/host/reviews" },
  ];

  return (
    <nav className="container mx-auto px-4">
      <div className="flex flex-wrap gap-6">
        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              cn(defaultClasses, isActive && activeClasses)
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;
