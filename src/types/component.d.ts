import { Languages } from "./environment";

export interface ListItemProps<T> {
  id: string;
  value: T;
  label: T | Languages<T>;
}
