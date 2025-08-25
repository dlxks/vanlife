// CardFooter.tsx
import type { FC, ReactNode } from "react";
import { cn } from "../../helpers/cn";

interface CardFooterProps {
  children?: ReactNode;
  className?: string;
}

const CardFooter: FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={cn("p-4 border-t border-t-gray-400/50 text-sm", className)}>
      {children}
    </div>
  );
};

export default CardFooter;
