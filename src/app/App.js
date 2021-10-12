import { Component } from 'react';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import './App.css';
import Signup from '../signup/Signup';
import Todo from '../todo/Todo';
import Login from '../login/Login';

const TOKEN_KEY = 'TOKEN';
class App extends Component {
 
    state ={
      token: localStorage.getItem(TOKEN_KEY) || ''
    }

    handleTokenChange = token => {
      localStorage.setItem(TOKEN_KEY, token);
      this.setState({ token: token });
    }

    logout= () => {
      localStorage.clear();
      this.setState({ token: '' });
    }
    render() {
    
      return (
        <>
          <Router>
            <header className= 'not'>
              <NavLink exact activeClassName='active' to='/'>Home</NavLink> 
              <NavLink exact activeClassName='active' to='/SignUp'>SignUp</NavLink> 
              <NavLink exact activeClassName='active' to='/Login'>LognIn</NavLink>
              <NavLink exact activeClassName='active' to='/Todo'>Todo List</NavLink>
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
                render={(routerProps) => <Signup 
                  handleTokenChange = {this.handleTokenChange}
                  {...routerProps}/>}
              />
              <Route
                path="/Login"
                exact
                render={(routerProps)=> <Login {...routerProps}/>}
              />
              <Route
                path="/Todo"
                exact
                render={(routerProps)=> 
                  this.state.token
                    ?
                    <Todo 
                      token={this.state.token}
                      {...routerProps}
                    />
                    : <Redirect to="/signup" />
                }
              />
            </Switch>
          </Router>
        </>
      );
    }

}
export default App;
