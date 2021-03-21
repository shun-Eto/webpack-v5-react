import React from "react";

//  atomic components
import Header, { HeaderProps } from "~views/Components/Organisms/Header";
import Footer, { FooterProps } from "~views/Components/Organisms/Footer";
import Drawer, { DrawerProps } from "~views/Components/Organisms/Drawer";

//  styled components
import { Wrapper, StyledContainer, Main } from "./styles";
import { Button } from "@material-ui/core";

interface ComponentProps {}
const Component: React.FC<ComponentProps> = props => {
  const header: HeaderProps = { height: 70 };
  const footer: FooterProps = { height: 70 };
  const [open, setOpen] = React.useState(false);
  const drawer: DrawerProps = { open, minWidth: 65, maxWidth: 200, left: true };
  return (
    <Wrapper>
      <Header {...header} />
      <StyledContainer header={header} drawer={drawer}>
        <Drawer {...drawer}>
          <div>test</div>
        </Drawer>
        <Main>
          <Button variant="contained" onClick={() => setOpen(!open)}>
            open
          </Button>

          {props.children}
        </Main>
        <Footer {...footer} />
      </StyledContainer>
    </Wrapper>
  );
};

export default Component;
