import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Languages } from "./environment";

export interface ListElementType<T> {
  id: string;
  value: T;
  label: T | Languages<T>;
  faIcon?: IconProp;
}
