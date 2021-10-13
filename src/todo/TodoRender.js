import React, { Component } from 'react';
import { getTodo } from '../fetch-utils';

export default class TodoRender extends Component {
    state ={
      todo:[],
      todoChore: '',
    }
    // I will need to call the getTodos, the putTodo and the postTodo.
    //Each will need a compondentDidMount?
    //Post will probably need a handle submit or something
    //putTodo will need to be able to toggle complete or not complete
    //getTodo will need to get the todo's associated to that account. 
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
