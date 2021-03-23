import React from "react";
import styled from "styled-components";

//  atomic components
import { DrawerProps } from "~views/Components/Organisms/Drawer";
import { SearchInput } from "~views/Components/Atoms/TextFiled";

//  lib components
import {
  AppBar,
  AppBarProps,
  Avatar,
  Button,
  ButtonProps,
  createStyles,
  IconButton,
  IconButtonProps,
  makeStyles,
  Toolbar,
  ToolbarProps,
  Typography,
  withStyles
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const StyledAppbar = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: AppBarProps) => <AppBar {...props} />);

interface StyledToolbarProps extends ToolbarProps {
  height?: number;
}
export const StyledToolbar: React.FC<StyledToolbarProps> = props => {
  const { height } = props;
  const classes = makeStyles(theme =>
    createStyles({
      Toolbar: {
        height,
        padding: theme.spacing(0)
      }
    })
  )();
  return <Toolbar {...props} className={classes.Toolbar} />;
};

interface DrawerActionProps {
  drawer?: DrawerProps;
}
export const DrawerAction: React.FC<DrawerActionProps> = props => {
  const { drawer } = props;
  const width = drawer?.open ? drawer.maxWidth : drawer?.minWidth;
  const closedIcon: IconProp = ["fas", "bars"];
  const openedIcon: IconProp = drawer?.left
    ? ["fas", "chevron-left"]
    : drawer?.right
    ? ["fas", "chevron-right"]
    : ["fas", "bars"];
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        padding: theme.spacing(0, 2)
      },
      btn: {
        width: "100%",
        minWidth: "unset",
        backgroundColor: theme.colorPicker("white", { opacity: 0.1 }),
        "&:hover": {
          backgroundColor: theme.colorPicker("white", { opacity: 0.2 })
        },
        padding: theme.spacing(1.5, 2.5)
      },
      faIcon: {
        color: theme.colorPicker("white")
      }
    })
  )();
  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.btn}
        onClick={props.drawer?.handleOpenBtnClicked}
      >
        <FontAwesomeIcon
          icon={drawer?.open ? openedIcon : closedIcon}
          className={classes.faIcon}
        />
      </Button>
    </div>
  );
};

export const Wrapper = styled.div(({ theme }) => {
  return {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
});

interface LogoProps {
  src?: string;
  label?: string;
}
export const Logo: React.FC<LogoProps> = props => {
  const { src, label } = props;
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        display: "inline-block",
        height: "100%",
        padding: theme.spacing(2)
      },
      img: {
        display: "inline-block",
        height: "100%"
      },
      label: {}
    })
  )();
  return (
    <div className={classes.wrapper}>
      {src && <img src={src} className={classes.img} />}
      {label && <Typography className={classes.label}>{label}</Typography>}
    </div>
  );
};

interface SearchProps {}
export const Search: React.FC<SearchProps> = props => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {}
    })
  )();
  return (
    <div className={classes.wrapper}>
      <SearchInput
        items={[{ id: "0", value: "0", label: { jp: "ゼロ", en: "zero" } }]}
      />
    </div>
  );
};

interface ActionsProps {}
export const Actions: React.FC<ActionsProps> = props => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
      }
    })
  )();
  return (
    <div className={classes.wrapper}>
      <AboutUs label={"About Us"} />
      <Account />
    </div>
  );
};

interface AboutUsProps extends ButtonProps {
  label?: string;
}
const AboutUs = withStyles(theme =>
  createStyles({
    root: {
      borderRadius: 36,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  })
)((props: AboutUsProps) => (
  <Button {...props} variant="contained">
    {props.label}
  </Button>
));

interface AccountProps extends IconButtonProps {}
const Account = withStyles(theme =>
  createStyles({
    root: {}
  })
)((props: AccountProps) => (
  <IconButton {...props}>
    <Avatar />
  </IconButton>
));
