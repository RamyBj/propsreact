import React from 'react'

function Profile(props) {
    return (
        <div>
            {props.children}
            <h1> Hello World From React </h1>
            <h1>{props.fullName}</h1>
            <h1>{props.age}</h1>
            <button onClick={props.greet} >Click</button>
        </div>
    )
}

export default Profile
