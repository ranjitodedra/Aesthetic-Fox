import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./work/Navbar"
import Protected from "./work/Protected";
import Home from "./work/Home";
import About from "./work/About";
import Profile from "./work/Profile";

function App() {
    
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const logIn = () => {
        setisLoggedIn(true);
    };
    const logOut = () => {
        setisLoggedIn(false);
    };

    return (
            <div>
                <Navbar />
                {isLoggedIn ? (
                    <button  onClick={logOut}>Logout</button>
                ) : (
                    <button onClick={logIn}>Login</button>
                )}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile'
                        element={
                            <Protected isLoggedIn={isLoggedIn}>
                                <Profile />
                            </Protected>
                        }
                    />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
    );
}

export default App;