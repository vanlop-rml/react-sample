import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import User from './user/User'
import Post from './post/Post'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Request from './lib/Request'



class App extends Component {
  state = {
    name: 'Vanlop Ninknuha'
  }

  onNameChange = name =>{
    this.setState({
      name: name
    }) 
  }


  render(){ 
    const {name} = this.state

    return <div>
      <div>Hello { name }</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <Route path="/users" component={() => (
        <Request url="https://jsonplaceholder.typicode.com/users">
            {(data)=> <User data={data}/> }
        </Request>
      )}></Route>
      <Route path="/posts" component={() => (
        <Request url="https://jsonplaceholder.typicode.com/posts">
            {(data)=> <Post data={data}/> }
        </Request>
      )}></Route>
    </div>;
  }
}

export default App;
