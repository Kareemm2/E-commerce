import React from 'react';
import './login.css'
const Login = () => {
    return (
        <>
            <div className="d-flex">
                <div className="box">
                    <h2>
                        login
                    </h2>
                    <form action="login">
                        <div className="user-box">
                            <input type="username" placeholder='username' required />
                        </div>
                        <div className="user-box">
                            <input type="email" placeholder='email' required />
                        </div>
                        <div className="user-box">
                            <input type="password" placeholder='password' required />
                        </div>
                        <button type="submit">login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
