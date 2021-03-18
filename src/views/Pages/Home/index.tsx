import * as React from "react";

import ContainerWithHF from "~src/views/Components/Templates/ContainerWithHF";
import { useDispatch } from "react-redux";
import { addTask } from "./modules";
import { useSelector } from "react-redux";
import { RootState } from "~redux/store/reducer";

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const handleOnClick = () => {
    dispatch(addTask("test"));
  };

  return (
    <ContainerWithHF>
      {tasks.map(val => (
        <div key={val.id}>{val.id}</div>
      ))}
      <button onClick={handleOnClick}>test</button>
      <div>test</div>
      <div>test</div>
    </ContainerWithHF>
  );
};

export default Component;
