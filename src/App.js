import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Header from './pages/components/Header';
import Error from './pages/Error';
import Clothes from './pages/components/Clothes';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {

    const loggedin=false;

    const data={
      message:"You are not logedin"
    }
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/clothes/:shirt" element={<Clothes/>}/>
    {/* yaha :shirt dynamic URL h */}

    <Route path="*" element={<Error/>}/>
     {/* default jo page hamare pass nhi hoga user try kare use liye Error page pr route hoga */}

    <Route path='/dashboard' element={loggedin?<Dashboard/>:<Navigate to={"/login"} state={data}/>}/>
      {/* conditional routing */}

      {/* url me path route ko upadate krne k liye navigate ka use krte h */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App