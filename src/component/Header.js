import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/img/logo.svg'

// import NavDropdown from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Vanlop Ninkhuha',
            age: 32
        }
    }
   
    render() {
        const textA = {
            textDecoration: 'none',
            color: 'white'
        }
        setTimeout(()=>{
            this.setState({
                name: 'React Course'
            })
        },1000)

        // setInterval(()=>{
        //     this.setState({
        //         age: this.state.age + 2
        //     })
        // },1000)

        return(
            <div>
                <Navbar bg="dark" variant="dark">
                 <Navbar.Brand> <Link to="/" style={textA}>
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        {' '}
                        React Bootstrap
                     </Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users">User</Nav.Link>
                        <Nav.Link href="/posts">Posts</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header
