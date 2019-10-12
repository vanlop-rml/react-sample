import React, { Component } from 'react'

class User extends Component {
   
    onChange = event => {
       this.props.onNameChange(event.target.value)
    }

    render() {
        return (
            <div>
                <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.data === undefined ? ( <div/> ):(
                        this.props.data.map(user => ( 
                        <tr key={user.id}>
                            <td>{user.id}</td> 
                            <td>{user.name}</td> 
                            <td>{user.email}</td> 
                        </tr>
                    ))
                 )}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default User
