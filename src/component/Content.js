import React, { Component } from 'react'
import User from '../pages/User'
import Post from '../pages/Post'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Request from '../lib/Request'


class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                {/* <div style={myStyle}>Hello { name }</div> */}
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
            </div>
        )
    }
}

export default Content
