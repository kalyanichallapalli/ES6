import React from 'react'
import{BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashbord from './Dashbord';
import NavBar from './NavBar';

function Main() {
  return (
    <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* <Route path = "/" exact component = {Home}/>
            <Route path = "/dashbord" exact component = {Dashbord}/>
            <Route path = "/about" exact component = {About}/> */}
            <Route path="/" element={<Home/>} exact />
            <Route path="/" element={<Dashbord/>} exact />
            <Route path="/" element={<About/>} exact />

        </Routes>
       </BrowserRouter>

    </div>
  )
}

export default Main;