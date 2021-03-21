import React from "react";
import styled from "styled-components";

//  mui components
import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Modal,
  Paper,
  Typography
} from "@material-ui/core";

//  fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalWithContainerProps {
  open: boolean;
  onClose: () => void;
}
export const ModalWithContainer: React.FC<ModalWithContainerProps> = props => {
  const classes = makeStyles(theme =>
    createStyles({
      modal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      container: {
        backgroundColor: theme.colorPicker("white"),
        margin: theme.spacing(3),
        padding: theme.spacing(0),
        ...theme.scrollVisible({ y: true })
      }
    })
  )();
  return (
    <Modal open={props.open} className={classes.modal} onClose={props.onClose}>
      <React.Fragment>
        <Container
          component={Paper}
          maxWidth={"sm"}
          className={classes.container}
        >
          <React.Fragment>{props.children}</React.Fragment>
        </Container>
      </React.Fragment>
    </Modal>
  );
};

/**
 * @name Head
 */
export const Head = () => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        backgroundColor: theme.colorPicker("red", { code: "900" }),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2)
      },
      faIcon: {
        color: theme.colorPicker("white")
      }
    })
  )();
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon
        icon={["far", "dizzy"]}
        size="4x"
        className={classes.faIcon}
      />
    </div>
  );
};

/**
 * @name Body
 * - StartAdornment
 * - Detail
 *  - StatusCode
 *  - Message
 *  - Actions
 */
export const Body = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row"
  };
});
export const StartAdornment = () => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      faIcon: {
        color: theme.colorPicker("red", { code: "900" })
      }
    })
  )();
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon
        icon={["fas", "exclamation-triangle"]}
        size="3x"
        className={classes.faIcon}
      />
    </div>
  );
};
export const Detail = styled.div(({ theme }) => {
  return {
    flexGrow: 1,
    padding: theme.spacing(2)
  };
});
export const StatusCode = (props: { statusCode: number }) => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        display: "flex",
        flexDirection: "row",
        color: theme.colorPicker("black")
      },
      label: {
        marginRight: theme.spacing(1)
      },
      value: {}
    })
  )();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.label}>Error Code :</Typography>
      <Typography className={classes.value}>{props.statusCode}</Typography>
    </div>
  );
};
export const Message = (props: { value: string | null }) => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        color: theme.colorPicker("black")
      },
      head: {},
      body: {}
    })
  )();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.head}>Message</Typography>
      <Typography className={classes.body}>{props.value}</Typography>
    </div>
  );
};
export const Actions = (props: { onClose: () => void }) => {
  const classes = makeStyles(theme =>
    createStyles({
      wrapper: {
        display: "flex",
        justifyContent: "flex-end"
      },
      closeBtn: {
        backgroundColor: theme.colorPicker("red", { code: "900" }),
        color: theme.colorPicker("white"),
        "&:hover": {
          backgroundColor: theme.colorPicker("red", { code: "900" })
        }
      }
    })
  )();
  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.closeBtn}
        variant="contained"
        onClick={props.onClose}
      >
        閉じる
      </Button>
    </div>
  );
};
