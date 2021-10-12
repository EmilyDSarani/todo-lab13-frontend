import React, { Component } from 'react';
import SignupRender from './SignupRender';
export default class Todo extends Component {
  render() {
    return (
      <div>
        <SignupRender {...this.props} />
      </div>
    );
  }
}
