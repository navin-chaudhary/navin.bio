import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function Cn(...inputs) {
  return twMerge(clsx(inputs));
}
export default Cn