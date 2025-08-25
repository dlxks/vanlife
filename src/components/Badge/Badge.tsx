import type { FC, ReactNode } from "react";
import { cn } from "../../helpers/cn";

interface BadgeProps {
  children?: ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className }) => {
  const classes = cn(
    "rounded-md py-2 px-8 bg-orange-200 text-zinc-600 font-medium tracking-wide",
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Badge;
