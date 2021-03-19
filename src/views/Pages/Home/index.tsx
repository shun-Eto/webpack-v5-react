import * as React from "react";

import ContainerWithHF from "~src/views/Components/Templates/ContainerWithHF";
import { useDispatch } from "react-redux";
import { addTask } from "./modules";
import { useSelector } from "react-redux";
import { RootState } from "~redux/store/reducer";
import { Button } from "@material-ui/core";

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const handleOnClick = () => {
    dispatch(addTask("test"));
  };

  const error = () => {
    throw Error("error!");
  };

  return (
    <ContainerWithHF>
      {tasks.map(val => (
        <div key={val.id}>{val.id}</div>
      ))}
      <button onClick={handleOnClick}>test</button>
      <div>test</div>
      <div>test</div>
      <Button variant="contained" onClick={error}>
        test
      </Button>
    </ContainerWithHF>
  );
};

export default Component;
