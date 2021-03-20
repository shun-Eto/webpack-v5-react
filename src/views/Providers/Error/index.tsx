import React from "react";

//  error components
import Error400 from "./400";
import Error500 from "./500";

//  hooks
import useHooks from "./hooks";

//  types
import { ErrorProps } from "~src/types/environment";

interface ErrorContextInterface {
  message: string | null;
  statusCode: number | null;
  setContextError: (userMessage: string, statusCode: number) => void;
  setContextErrorDone: () => void;
}

const ErrorContext = React.createContext<ErrorContextInterface>(
  {} as ErrorContextInterface
);

const ErrorProvider: React.FC = props => {
  const {
    message,
    statusCode,
    setContextError,
    setContextErrorDone
  } = useHooks();
  const error: ErrorProps = { statusCode, message };

  return (
    <ErrorContext.Provider
      value={{ message, statusCode, setContextError, setContextErrorDone }}
    >
      {400 <= statusCode && statusCode < 500 && <Error400 error={error} />}
      {500 <= statusCode && statusCode < 600 && <Error500 error={error} />}
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;

export const useError = () => {
  return React.useContext(ErrorContext);
};
