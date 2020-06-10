import React from 'react'
import {Link} from 'react-router-dom';

export default function Login() {

    let style = {
        width: '40%',
        margin: '0 auto',
        border: '1px solid #999',
        padding: '20px',
    }

    return (
        <form className="formSection" style={style}>
            <div className='formRow'>
                <label>Username: &nbsp;</label>
                <input type="text" />
            </div>
            <div className='formRow'>
            <Link to="/home"><button className="primaryBtn">Login</button></Link>
            </div>
        </form>
    )
}
