import React, { Component } from 'react'
import './App.css';
import Header from './component/Header'
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
