import React from 'react';
import Start from './mobile/start/Start'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Mobile
      <Start />
    </div>
  );
}

export default App;
