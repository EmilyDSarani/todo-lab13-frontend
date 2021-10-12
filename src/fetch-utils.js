import request from "superagent";

//gets the todo list
//pass through the token
export async function getTodo(token){
    const response = await request
    .get('https://saranilist.herokuapp.com/api/todo')
    .set ('Authorization', token)
    return response.body
}
//will allow user to change the todo list from completed to not-completed
//we need the id, the token, and I think... a completed?
//will need a .send here
export async function putTodo(id, completed, token){
    const response = await request
    .put(`https://saranilist.herokuapp.com/api/todo/${id}`)
    .send({completed : completed})
    .set ('Authorization', token)
    return response.body
}
//this will allow user to post a new todo item to the list
//pass through todo and token
//might need an id here?
export async function putTodo(todo, token){
    const response = await request
    .post(`https://saranilist.herokuapp.com/api/todo`)
    .send({todo : todo})
    .set ('Authorization', token)
    return response.body
}

export async function signIn (email, password){
    const response = await request 
    .post('https://saranilist.herokuapp.com/api/todo/')
    .send({email,password})
    return response.body

}
export async function signUp (email, password){
    const response = await request 
    .post('https://saranilist.herokuapp.com/api/todo/')
    .send({email,password})
    return response.body

}