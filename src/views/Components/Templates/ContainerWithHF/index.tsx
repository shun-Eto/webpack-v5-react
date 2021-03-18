import React from "react";

import Header from "~views/Components/Organisms/Header";
import Footer from "~views/Components/Organisms/Footer";

import { Container } from "./styles";

interface ComponentProps {}
const Component: React.FC<ComponentProps> = props => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [footerHeight, setFooterHeight] = React.useState(0);

  React.useEffect(() => {
    if (headerRef.current && footerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
      setFooterHeight(footerRef.current.clientHeight);
    }
  }, [headerRef, footerRef]);

  return (
    <Container headerHeight={headerHeight} footerHeight={footerHeight}>
      <Header componentRef={headerRef} style={{ backgroundColor: "red" }} />
      {props.children}
      <Footer componentRef={footerRef} />
    </Container>
  );
};

export default Component;
