import { CSSProperties } from "@material-ui/styles";

export default class CreateScrollVisible {
  /**
   * ブラウザ対策を考慮したスクロール表示のCSSPropertiesの取得
   * @param visible x , y のスクロール表示の選択
   * @returns css properties
   */
  scrollVisible(visible: { x?: boolean; y?: boolean }): CSSProperties {
    const { x, y } = visible;
    return {
      overflowX: x ? "scroll" : "unset",
      overflowY: y ? "scroll" : "unset",
      "-ms-overflow-style": "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" }
    };
  }
}
