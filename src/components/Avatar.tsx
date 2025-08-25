import type { ReactNode } from "react";
import { cn } from "../helpers/cn";
import mageUser from "../assets/mage-user.png";

interface AvatarProps {
  children?: ReactNode;
  className?: string;
  src?: string;
}

const bgColors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
];

// Helper: get first + last word initials
const getInitials = (text: ReactNode) => {
  if (typeof text !== "string") return "";

  const words = text.trim().split(" ").filter(Boolean); //removes empty strings in case of multiple spaces
  if (words.length === 0) return "";
  if (words.length === 1) return words[0][0].toUpperCase(); //returns the first letter of the string
  const firstLetter = words[0][0].toUpperCase();
  const lastLetter = words[words.length - 1][0].toUpperCase();
  return firstLetter + lastLetter;
};

// Deterministic background color based on initials
const getBgColor = (text: string) => {
  const initials = getInitials(text);
  const charCodeSum = initials
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return bgColors[charCodeSum % bgColors.length];
};

const Avatar: React.FC<AvatarProps> = ({ children, className = "", src }) => {
  const bgColor = children && !src ? getBgColor(children.toString()) : "";

  const wrapperClass = cn(
    "relative flex items-center justify-center overflow-hidden h-32 w-32 rounded-full border-4 border-gray-200",
    src ? "" : children ? bgColor : "",
    className
  );

  return (
    <div className={`${wrapperClass} ${className}`}>
      {src ? (
        <img
          src={src}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      ) : children ? (
        <div className="text-4xl font-bold text-gray-600">
          {getInitials(children)}
        </div>
      ) : (
        // <Icon icon="mage:user" className="w-full h-full" />
        <img src={mageUser} alt="User Logo" />
      )}
    </div>
  );
};

export default Avatar;
