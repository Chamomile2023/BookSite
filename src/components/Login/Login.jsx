import React from "react";
import './Login.scss'
import User from "../assets/user.svg";
import Lock from "../assets/lock.svg";
import Logo from "../assets/LOGO.svg";

const Login = () => {
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
                                <input type="text" className="login__user--user" placeholder="Username" />
                            </div>
                            <div className="login__password">
                                <img src={Lock} alt="" className="login__user--icon" />
                                <input type="password" className="login__password--password" placeholder="password" />
                            </div>
                        </div>
                        <div className="login__btn">
                            <button className="login__btn--btn">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
