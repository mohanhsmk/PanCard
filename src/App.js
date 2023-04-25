import React,{useContext} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Online from "./Components/Online";

function App(props) {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route path = "/Nav" element={<Nav/>}/>
          <Route path = "/online" element={<Online/>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;




