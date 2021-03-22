import React from "react";

//  hooks
import { useError } from "~views/Providers/Error";

//  styled components
import {
  Message,
  StatusCode,
  Head,
  Body,
  StartAdornment,
  Detail,
  Actions,
  ModalWithContainer
} from "./styles";

//  types
import { ErrorProps } from "~src/@types/environment";

interface ComponentProps {
  error: ErrorProps;
}
const Component: React.FC<ComponentProps> = props => {
  const { error } = props;
  const { setContextErrorDone } = useError();

  const handleOnClose = () => {
    setContextErrorDone();
  };

  return (
    <ModalWithContainer open={true} onClose={handleOnClose}>
      <Head />
      <Body>
        <StartAdornment />
        <Detail>
          <StatusCode statusCode={error.statusCode} />
          <Message value={error.message} />
          <Actions onClose={handleOnClose} />
        </Detail>
      </Body>
    </ModalWithContainer>
  );
};

export default Component;
