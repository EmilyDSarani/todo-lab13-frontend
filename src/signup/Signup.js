import React, { Component } from 'react';
import SignupRender from './SignupRender';
export default class Todo extends Component {
  //when you do a cleaner style, you have the pass the props down by spreading it and then doing this.props
  render() {
    return (
      <div>
        <SignupRender {...this.props} /> 
      </div>
    );
  }
}
