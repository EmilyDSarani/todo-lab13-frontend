import React, { Component } from 'react';
import { getTodo, postTodo } from '../fetch-utils';

export default class TodoRender extends Component {
    state ={
      todo:[],
      todoChore: '',
    }
    handleSubmit = async e =>{
      e.preventDefault();
      await postTodo(this.state.todoChore, this.props.token);
      await getTodo(this.props.token);

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
          <form onSubmit = {this.handleSubmit}>
            <label> 
              <input value={this.state.todoChore} onChange={(e)=> this.setState({ todoChore: e.target.value })} type ='text' />
              <button>Add Todo</button>
            </label>
          </form>
          
          {/* not exactly sure how to render it here. maybe do an onClick...and...putTodo by id, completion, and token?
              */}
          {/* <div onClick= {asynce() => {await putTodo(todo.id, todo.completed, this.props.token)
          }} >
          
        </div> */}
        </div>
      );
    }
}
