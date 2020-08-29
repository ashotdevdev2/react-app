import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import SignIn from "./components/signIn/signIn";
import Main from "./components/main/main";
import FixedBar from "./components/fixedBar/fixedBar";

class App extends Component{

  render() {

      const {user} = this.props

      return (
          <BrowserRouter>
              <div className="App">
                  <Switch>
                      <Route path='/' component={SignIn} exact={true}/>
                      <Route path='/main' component={Main}/>
                  </Switch>
                  {user.uid && (
                      <FixedBar/>
                  )}
              </div>
          </BrowserRouter>
      );
  }
}

function mapStateToProps(state) {
    return {
        user: state.firebase.auth
    }
}

export default connect(mapStateToProps)(App);
