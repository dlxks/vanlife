import type { FC, ReactNode } from "react";
import { cn } from "../../helpers/cn";

interface CardBodyProps {
  children?: ReactNode;
  className?: string;
}

const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

export default CardBody;
