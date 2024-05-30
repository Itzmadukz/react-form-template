import { useRef, useState } from "react";

export default function Login() {
    const email = useRef()
    const password = useRef()


    function handleLogin(e) {
        e.preventDefault()
        console.log('email:', email.current.value)
        console.log('password:', password.current.value)
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        ref={email}
                    />
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
