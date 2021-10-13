import React, { Component } from 'react';
import TodoRender from './TodoRender';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <TodoRender {...this.props} />
      </div>
    );
  }
}
