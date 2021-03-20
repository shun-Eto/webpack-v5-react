import React from "react";
import { useHistory } from "react-router-dom";

const useHooks = () => {
  const history = useHistory();
  const [message, setMessage] = React.useState<string | null>(null);
  const [statusCode, setStatusCode] = React.useState<number>(200);

  const setContextError = (message: string, statusCode: number) => {
    setMessage(message);
    setStatusCode(statusCode);
    history.push("/");
  };

  const setContextErrorDone = () => {
    setMessage(null);
    setStatusCode(200);
  };

  return { message, statusCode, setContextError, setContextErrorDone };
};

export default useHooks;
