import React from "react";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import pathnames from "~src/assets/utils/pathnames";

import ContainerWithHFD from "~views/Components/Templates/ContainerWithHFD";

const Component: React.FC = () => {
  const history = useHistory();
  return (
    <ContainerWithHFD>
      <div>
        <Button
          variant="contained"
          onClick={() => history.push(pathnames.Home)}
        >
          Home
        </Button>
      </div>
    </ContainerWithHFD>
  );
};

export default Component;
