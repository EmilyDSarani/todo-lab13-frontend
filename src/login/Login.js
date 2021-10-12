import React, { Component } from 'react';
import LoginRender from './LoginRender';

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginRender {...this.props} />
      </div>
    );
  }
}
