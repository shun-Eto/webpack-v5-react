import React from "react";

//  mui components
import { Modal } from "@material-ui/core";
import { useError } from "..";

const Component: React.FC = () => {
  const { setContextErrorDone } = useError();
  const handleOnClose = () => {
    setContextErrorDone();
  };
  return (
    <Modal open={true} onClose={handleOnClose}>
      <div>400</div>
    </Modal>
  );
};

export default Component;
