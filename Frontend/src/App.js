import { useState,useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protected from './components/Protected';
// import Protectedroute from './ProtectedRoute';

function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    
    <>
      <Navbar auth={auth1}/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>}/>
        {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
        <Route path="/dashboard"
                        element={
                            <Protected isLoggedIn={auth}>
                                <Dashboard />
                            </Protected>
                        }
                    />
        <Route exact path="/logout" element={<Logout/>}/>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
