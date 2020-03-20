import React from 'react';
import Start from './mobile/start/Start';
import Main from './mobile/chan/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn, SignOut } from '../redux/actions'

function App() {
  // const isLogged = useSelector(state => state.isLogged)
  // fetch('http://192.168.8.30:5000/api/user/chan', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //   },
  // })
  //   .then(res => {
  //     if (res.status === 200) {
  //       console.log("loggedIn")
  //     }
  //     else if (res.status !== 200) {
  //       console.log("bye")
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
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
