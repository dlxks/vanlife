// Card.tsx
import type { FC, ReactNode } from "react";
import { cn } from "../../helpers/cn";

export interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-white rounded-md shadow-md/20", className)}>
      {children}
    </div>
  );
};

export default Card;
