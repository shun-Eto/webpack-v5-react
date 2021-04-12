import * as React from "react";

import ContainerWithHF from "~src/views/Components/Templates/ContainerWithHF";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { useError } from "~views/Providers/Error";
import { testfunction } from "~api/testModule";
import { useHistory } from "react-router";
import pathnames from "~src/assets/utils/pathnames";
import accountSlice from "~src/redux/slices/account";

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setContextError } = useError();

  const handleOnButtonClick = async () => {
    const test = await testfunction();
    setContextError("test", test.status);
  };

  return (
    <ContainerWithHF>
      <div>Home Page</div>
      <div>test</div>
      <Button variant="contained" onClick={handleOnButtonClick}>
        test
      </Button>
      <Button variant="contained" onClick={() => history.push(pathnames.Page1)}>
        Page1
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(accountSlice.actions.fetchingUser());
        }}
      >
        Account Reducer
      </Button>
    </ContainerWithHF>
  );
};

export default Component;
