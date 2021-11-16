import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/_global.scss';
import Router from './routes/router';

function App() {
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`App ${theme}`}>
      <header className="App-header"></header>

      <Router />
      <button onClick={handleTheme}>test</button>
    </div>
  );
}

export default App;
