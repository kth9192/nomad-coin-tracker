import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/_global.scss';
import Router from './routes/router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRecoilState } from 'recoil';
import { AppStateType } from 'interface/recoil/app';

function App() {
  // const [theme, setTheme] = useRecoilState<AppStateType>(appGlobalState);

  // const handleTheme = () => {
  //   setTheme((prevState: AppStateType) => !prevState);
  // };

  return (
    <main className={`App dark`}>
      <header className="App-header"></header>

      <Router />
      <ReactQueryDevtools initialIsOpen />
      {/* <button onClick={handleTheme}>test</button> */}
    </main>
  );
}

export default App;
