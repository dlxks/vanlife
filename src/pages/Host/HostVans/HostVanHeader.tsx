import { NavLink } from "react-router-dom";

const HostVanHeader = () => {

  const vanHeaderLinks = [
    { name: "Description", link: "" },
    { name: "Price", link: "pricing" },
    { name: "Pictures", link: "pictures" },
  ];

  return (
    <nav className="flex gap-4 mb-4">
      {vanHeaderLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.link}
          end={link.link === ""}
          relative="path" // ensures path is relative to /host/vans/:id
          className={({ isActive }) =>
            isActive
              ? "border-b border-zinc-700 font-semibold text-md"
              : "text-zinc-700 hover:text-gray-700 text-md"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default HostVanHeader;
