import React, { Component } from 'react';
import { getTodo } from '../fetch-utils';

export default class TodoRender extends Component {
    state ={
      todo:[],
      todoChore: '',
    }
    compondentDidMount = async () =>{
      const todo = await getTodo(this.props.token);
      this.setState({ todo });
    }
    render() {
      return (
        <div>
                
        </div>
      );
    }
}
