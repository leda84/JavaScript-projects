import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, Engineer, Chef, Hobbies, Contact } from './components';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home title = {'HELLO WORLD'} />
        </Route>
        <Route exact path = '/engineer'>
          <Engineer />
        </Route>
        <Route exact path = '/chef'>
          <Chef />
        </Route>
        <Route exact path = '/learner'>
          <Hobbies />
        </Route>
        <Route exact path = '/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
