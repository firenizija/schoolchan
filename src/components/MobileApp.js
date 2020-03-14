import React from 'react';
import Start from './mobile/start/Start'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Start} />
          {/* <Route path="/chan" component={Chan} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
