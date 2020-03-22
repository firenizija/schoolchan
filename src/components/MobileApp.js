import React from 'react';
import Start from './mobile/start/Start';
import Main from './mobile/chan/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/chan" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
