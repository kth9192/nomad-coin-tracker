import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/_global.scss';
import Router from './routes/router';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className={`App ${theme}`}>
      <header className="App-header"></header>

      <Router />
      <ReactQueryDevtools initialIsOpen />
      {/* <button onClick={handleTheme}>test</button> */}
    </main>
  );
}

export default App;
