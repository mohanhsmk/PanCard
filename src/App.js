import React,{useContext} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";


function App(props) {
  return (
    <>
    <BrowserRouter>
        <Header/>
       <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route path = "/About" element={<About/>}/>
          <Route path = "/About" element={<About/>}/>

       </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;




