import React, { useState } from 'react';
import styled from "styled-components"

import { useGetData } from "./hooks";
import Snackbar from './components/Snackbar';
import AppHeader from "./components/AppHeader";
import MessageQueue from './components/MessageQueue';
import Context from "./Context";

const MainBlock = styled.div`
  text-align: center;
  margin-top: 1rem;

  & > div:first-of-type button{
    margin: 0 .5rem;
  }

  & > div:last-of-type {
    text-align: left;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const App: React.FC<{}> = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [messages, messagesDispatch, alert] = useGetData(isRunning);

  const handleCLickStart = () => {
    setIsRunning(!isRunning);
  }

  const handleClickClear = () => {
    messagesDispatch({ type: "removeAll" });
  }

  return (
      <>
        <AppHeader />
        <Context.Provider value={{ messages, messagesDispatch }}>
          <MainBlock>
            <div>
              <button onClick={handleCLickStart}>{isRunning ? "Stop" : "Start"}</button>
              <button onClick={handleClickClear}>Clear</button>
            </div>
            <div>
              <MessageQueue type={0} />
              <MessageQueue type={1} />
              <MessageQueue type={2} />
            </div>
          </MainBlock>
          <Snackbar alert={alert} />
        </Context.Provider>
      </>
  );
}

export default App;
