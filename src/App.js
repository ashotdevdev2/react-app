import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from "./components/signIn/signIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route path={'/'} component={SignIn} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
