import type { FC } from "react";
import BaseCard from "./Card";
import type { CardProps } from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

// Define compound type
interface CardCompound extends FC<CardProps> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

// Cast and attach subcomponents
const Card = BaseCard as CardCompound;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
