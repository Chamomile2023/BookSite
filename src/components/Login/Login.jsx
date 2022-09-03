import React from "react";
import "./Login.scss";
import { useState } from "react";
import User from "../assets/user.svg";
import Lock from "../assets/lock.svg";
import Logo from "../assets/LOGO.svg";

const Login = ({ useAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const params = {
        username: username,
        password: password,
    };
    return (
        <>
            <div className="login">
                <div className="container-fluid">
                    <div className="login__hero">
                        <div className="login__logo">
                            <img src={Logo} alt="logo" className="login__logo--logo" />
                        </div>
                        <div className="login__inputs">
                            <div className="login__user">
                                <img src={User} alt="" className="login__user--icon" />
                                <input
                                    type="text"
                                    className="login__user--user"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="login__password">
                                <img src={Lock} alt="" className="login__user--icon" />
                                <input
                                    type="password"
                                    className="login__password--password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="login__btn">
                            <button className="login__btn--btn" onClick={() => useAuth(params)}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
