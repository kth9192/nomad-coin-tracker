import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  );
}

export default App;
