import styled from "styled-components";

export const Container = styled.div<{
  headerHeight: number;
  footerHeight: number;
}>(({ headerHeight, footerHeight, theme }) => ({
  paddingTop: headerHeight,
  paddingBottom: footerHeight,
  backgroundColor: "rgba(240,242,236,1)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
}));
