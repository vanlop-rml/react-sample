import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
// import User from './pages/User'
// import Post from './pages/Post'
import Content from './component/Content'
import 'bootstrap/dist/css/bootstrap.min.css'



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
        <Content />   
    </div>
    )
  }
}

export default App;
