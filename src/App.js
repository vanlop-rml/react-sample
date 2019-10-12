import React, { Component } from 'react'
import './App.css';
import Header from './component/Header'
import User from './pages/User'
import Post from './pages/Post'
import Request from './lib/Request'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


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
    
    const myStyle = {
        fontSize: 20,
        color: '#ff0000',
        fontWeight: 'bold'
    }

    return(
      <div>
        <Header />

        <Route exact path="/users" component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
                {(data)=> <User data={data}/> }
            </Request>
        )}></Route>
        <Route exact path="/posts" component={() => (
            <Request url="https://jsonplaceholder.typicode.com/posts">
                {(data)=> <Post data={data}/> }
            </Request>
        )}></Route>

    </div>
    )
  }
}

export default App;
