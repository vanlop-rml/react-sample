import React, { Component } from 'react'
import axios from 'axios'
import withRequest from '../lib/withRequest'


class Post extends Component {

    onChange = event => {
       this.props.onNameChange(event.target.value)
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data === undefined ? ( <div /> ) : (
                        this.props.data.map(post => ( 
                        <tr key={post.id}>
                            <td>{post.userid}</td> 
                            <td>{post.id}</td> 
                            <td>{post.title}</td> 
                            <td>{post.body}</td> 
                        </tr>
                    ))
                    )}
                    </tbody>
                </table>
               
            </div>
        )
    }
}

export default Post
