import React, { Component, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
        </div>
    )
}

const Protect = () => {
    return (
        <div>
            <h1>Protected page</h1>
        </div>
    )
}

const Unprotected = () => {
    return (
        <div>
            <h1>Unprotected page</h1>
        </div>
    )
}


const Protected = () => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login() {
        setAuthenticated(true)
        console.log("Logged in user" + isAuthenticated)
    }
    function logout() {
        setAuthenticated(false)
        console.log("Logged in user" + isAuthenticated)
    }

    return (
        <div>
            <nav >
                <ul >
                    <li>
                        <NavLink to="/">Link to Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/protected">Link to Protected Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Unprotected">Link to Unprotected page</NavLink>
                    </li>
                </ul>

                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>

            </nav>

            {/* <GuardedRoute path="/protected" element={<Protect />} auth={isAuthenticated}/> */}

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/protected" element={<Protect />}></Route>
                <Route exact path="/Unprotected" element={<Unprotected />}></Route>
            </Routes>

        </div>
    )
}

const GuardedRoute = ({element:Component,auth,...rest}) => (
    <Route {...rest} render = {(props) => (
        auth === true ? <Component {...props}/> : <Navigate to="/" />
    )}/>
)

export default Protected;