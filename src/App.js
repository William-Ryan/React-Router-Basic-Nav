import React from 'react';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => {
  return(
  <div>
    <Navigation />
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path = "/about" component={About}/>
      <Route path = "/contact" component={Contact}/>
    </Switch>
  </div>
  )
};

export default App;
