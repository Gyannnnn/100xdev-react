import React from "react";
import { BrowserRouter, Routes, Route, Link  , useNavigate} from "react-router-dom";

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/class11">class11</Link>
      <Link to="/class12">class12</Link>
        <Routes>
          <Route path="/class11" element={<Class11/>} />
          <Route path="/class12" element={<Class12/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Err/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Class11(){
  return <div>
    Welcome to class11
  </div>
}

function Class12(){

const navigate = useNavigate()

function redirectUser(){
  navigate("/")
}


  return <div>
    Welcome to class 12
    <button onClick={redirectUser}>Go Back To The Home Page</button>
  </div>
}

function Home(){
  return <div>
    Home page
  </div>
}

function  Err(){
  return <div>
    Sorry page Not Found !
  </div>
}