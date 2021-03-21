import * as React from "react";

import ContainerWithHF from "~src/views/Components/Templates/ContainerWithHF";
import { useDispatch } from "react-redux";
import { addTask } from "./modules";
import { useSelector } from "react-redux";
import { RootState } from "~redux/store/reducer";
import { Button } from "@material-ui/core";

import { useError } from "~views/Providers/Error";
import { testfunction } from "~api/testModule";
import { useHistory } from "react-router";
import pathnames from "~src/assets/utils/pathnames";

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const history = useHistory();
  const { setContextError } = useError();

  const handleOnClick = () => {
    dispatch(addTask("test"));
  };

  const handleOnButtonClick = async () => {
    const test = await testfunction();
    console.log("test", test.status);
    setContextError("test", test.status);
  };

  return (
    <ContainerWithHF>
      {tasks.map(val => (
        <div key={val.id}>{val.id}</div>
      ))}
      <button onClick={handleOnClick}>test</button>
      <div>test</div>
      <div>test</div>
      <Button variant="contained" onClick={handleOnButtonClick}>
        test
      </Button>
      <Button variant="contained" onClick={() => history.push(pathnames.Page1)}>
        Page1
      </Button>
    </ContainerWithHF>
  );
};

export default Component;
