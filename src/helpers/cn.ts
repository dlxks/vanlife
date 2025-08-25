import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import type { ClassValue } from "clsx"

/**
 * A helper function to combine class names with Tailwind-aware merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
