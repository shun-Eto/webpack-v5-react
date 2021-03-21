import { Values, Key } from "./types";

export default class CreateFontSize {
  values: Values = {
    xs: 10.5,
    sm: 13,
    basic: 16,
    md: 24,
    lg: 32,
    xl: 40,
    icon: 30
  };

  unit = "px";

  keys: Key[] = ["xs", "sm", "md", "lg", "xl", "icon"];

  /**
   * 設定済みのフォントサイズを取得
   * @param key valuesに設定したkey
   * @returns フォントサイズ
   */
  fontSize(key?: Key): string | number {
    if (key) {
      return typeof this.values[key] === "number"
        ? `${this.values[key]}${this.unit}`
        : this.values[key];
    }
    return typeof this.values.basic === "number"
      ? `${this.values.basic}${this.unit}`
      : this.values.basic;
  }
}
