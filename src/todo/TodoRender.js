import React, { Component } from 'react';
import { getTodo, postTodo } from '../fetch-utils';

export default class TodoRender extends Component {
    state ={
      todos:[],
      todoChore: '',
    }
     //happens when the page loads, it happens in the internals of react. It's magic, it happens, use it. 
    compondentDidMount = async () =>{
      const todos = await getTodo(this.props.token);
      this.setState({ todos });
    }
     
    //we want to be able to fetch the new item with the whole list, which is why it is repetitive. Also magic, just accept.
    handleSubmit = async e =>{
      e.preventDefault();
      await postTodo(this.state.todoChore, this.props.token);
      const todos = await getTodo(this.props.token);
      this.setState({ todos });

    }
    // I will need to call the getTodos, the putTodo and the postTodo.
    //Each will need a compondentDidMount?
    //Post will probably need a handle submit or something
    //putTodo will need to be able to toggle complete or not complete
    //getTodo will need to get the todo's associated to that account. 

   
//add a click handler, then use a turnery with classNames to render in whether it is completed or not
    render() {
      return (
        <div>
          <form onSubmit = {this.handleSubmit}>
            <label> 
              <input value={this.state.todoChore} onChange={(e)=> this.setState({ todoChore: e.target.value })} type ='text' />
              <button>Add Todo</button>
            </label>
          </form>
          
          {
            this.state.todos.map(todo => {
              return <div key= {todo.id} > {todo.chore} </div>;
            })
          }

        </div>
      );
    }
}
