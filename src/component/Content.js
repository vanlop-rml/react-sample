import React, { Component } from 'react'
import User from '../pages/User'
import Post from '../pages/Post'
import Request from '../lib/Request'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
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

export default Content
