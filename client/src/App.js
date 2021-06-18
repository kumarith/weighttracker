import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';
import Home from './components/home';
import Weight from './components/add-measurements';
import Progress from './components/progress';
import Edit from './components/edit';

function App(){
  return (
    <Router>
      <div>
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/weight"  component = {Weight} />
        <Route path = "/progress" exact component = {Progress} />
        <Route path = "/edit/:id" exact component = {Edit} />
      </Switch>  
      </div>
    </Router>
  );
}

export default App;
