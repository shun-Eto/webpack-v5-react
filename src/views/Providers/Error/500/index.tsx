import React from "react";

//  mui components
import { Modal } from "@material-ui/core";

const Component: React.FC = () => {
  return (
    <Modal open={true} onClose={() => console.log("onClose")}>
      <div>500</div>
    </Modal>
  );
};

export default Component;
