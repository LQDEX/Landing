import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';
import About from './components/functionals/Roadmap.jsx';

export default () => {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path="/" component={App} />
        <Route path="/lite" component={App} />
      </Switch>
    </BrowserRouter>
  )
}