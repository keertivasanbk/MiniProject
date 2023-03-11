import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom" 
import About from "./components/About"
import Administration from "./components/Administration"
import Admission from "./components/Admission"
import Academics from "./components/Academics"
import FAQ from "./components/FAQ"
import Gallery from "./components/Gallery"
import Examination from "./components/Examination"
// import Image from 'C:\Users\kichu\Main_CDE\cde\src\cde_img.jpg'
const App = ()=>{
    return(
      <>
       <Router>
       <Navbar/>
       <Routes>
          <Route path='/' element ={<Home/ >} exact></Route>
          <Route path='/about' element ={<About/ >} ></Route>
          <Route path='/administration' element ={<Administration/ >} ></Route>
          <Route path='/admission' element ={<Admission/ >} ></Route>
          <Route path='/academics' element ={<Academics/ >} ></Route>
          <Route path='/faq' element ={<FAQ/ >} ></Route>
          <Route path='/gallery' element ={<Gallery/ >} ></Route>
          <Route path='/examination' element ={<Examination/ >} ></Route>
           </Routes>
       </Router>
   {/* <img src={Image} alt="logo"/> */}
       </>
    )
}
export default App