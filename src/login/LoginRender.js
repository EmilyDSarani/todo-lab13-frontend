import React, { Component } from 'react';
import { signIn } from '../fetch-utils';

export default class LoginRender extends Component {
    state = {
      password: '',
      email: '',
    };
        handleSubmit = async e =>{
          e.preventDefault();
          const { token } = await signIn(this.state.email, this.state.password);
          this.props.handleTokenChange(token);
          this.props.history.push('/Todo');
        };
        
        render() {
          return (
            <div>
              <form onSubmit ={this.handleSubmit}>
                <label>
                  Email Address:
                  <input value={this.state.email} onChange={(e)=> this.setState({ email:e.target.value })} type="email"/>
                </label> 
                <label>
                  Password:
                  <input value={this.state.password} onChange={(e)=> this.setState({ password:e.target.value })} type="password"/>
                </label> 
                <button>Submit</button>
              </form>
            </div>
          );
        }
}
  