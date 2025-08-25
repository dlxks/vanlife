import type { FC, ReactNode } from "react";
import { cn } from "../../helpers/cn";

interface CardHeaderProps {
  children?: ReactNode;
  className?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  return <div className={cn("p-4 shadow-sm", className)}>{children}</div>;
};

export default CardHeader;
