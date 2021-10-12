import { Component } from 'react';

import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Signup from '../signup/Signup';

import Todo from '../todo/Todo';
import Login from '../login/Login';

class App extends Component {

  render() {
    const TOKEN_KEY = TOKEN
    state ={
      token = localStorage.getItem(TOKEN_KEY) || ''
    }
    handleTokenChange = token => {
      localStorage.setItem('TOKEN_KEY', token)
      this.setState({token:token})
    }
    logout= () => {
      localStorage.clear()
      this.setState({token:''})
    }
    return (
      <>
      <Router>
      <header className= 'not'>
        <NavLink exact activeClassName='active'  to='/'>Home</NavLink> 
        <NavLink exact activeClassName='active'  to='/SignUp'>SignUp</NavLink> 
        <NavLink exact activeClassName='active' to='/Login'>SignIn</NavLink>
        <NavLink exact activeClassName='active' to='/Todo'>SignIn</NavLink>
      </header>
      <Switch>
        <Route
        path="/"
        exact
        render={(routerProps) => <Home {...routerProps}/>}
        />
        <Route
        path="/SignUp"
        exact
        render={(routerProps)=> <Signup {...routerProps}/>}
        />
        <Route
        path="/Login"
        exact
        render={(routerProps)=> <Login {...routerProps}/>}
        />
         <Route
        path="/Todo"
        exact
        render={(routerProps)=> <Todo {...routerProps}/>}
        />
      </Switch>
      </Router>
    </>
    );
  }

}

export default App;
