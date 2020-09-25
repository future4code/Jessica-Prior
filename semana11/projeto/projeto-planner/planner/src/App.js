import React from "react";
import "./styles.css";
import { useAxiosConf } from "./axios/Axiosconf";
import Planner from "./components/planner/Planner";
import styled from "styled-components";
import background from "./components/img/1.jpg";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  const { getTasks, tasks, putEdit } = useAxiosConf();

  return (
    <Body>
      <main className="App">
        <Planner getTasks={getTasks} tasks={tasks} putEdit={putEdit} />
      </main>
    </Body>
  );
}

export default App;
