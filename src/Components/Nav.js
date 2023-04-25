import React from 'react'
import "./App.css"
import img from "../images/logo_light.png"
import {useNavigate} from "react-router-dom"

const Nav = () => {
 
  const navigate = useNavigate();

const useNavigate1 = () => {
  let path = `/Online`; 
  navigate(path);
}
  

  return (
    <>
    <div className='hhh'>
    <div className='hhh-img'>
      <img src={img} alt="img" />
      </div>
   </div>

   <div className='container p-5'>
            <div className=''>
               <h3>Online PAN application</h3>
            </div><br></br>
            <hr></hr>
            <div className='online-pan-application'>
                  <div className='container p-5'>
                      <p className='online-1'>We thank you for using online PAN application service of Protean.</p>
                      <p className='online-2'>Your request is successfully Registered with Token Number 0121979696 and the same has been sent on your email id provided in the PAN application.</p>
                      <p className='online-3'>Kindly click below button to fill remaining PAN application form.</p>
                      <p className='online-4'>The above Token number 0121979696 will remain valid till 30 days from the token generation date. Please complete your online PAN application before it, to</p>
                      <p className='online-5'>avoid cancellation of application.</p>
                  </div>              
                    <button onClick={useNavigate1} className='bt-11' type="button">Continue with pan Application Form</button>
            </div>
   </div>
   </>
  )
}

export default Nav;



// import React,{useState} from 'react'

// const SecondPage = () => {

//   const [firstName,setName] = useState(true);
//   const [lastName,setlastName] = useState(false);


//   const Value = (Value) => {
//       if(Value == "p") {
//           setName(true)
//           setlastName(false)
//       }
//       else{
//         setName(false)
//         setlastName(false)
//       }
//   }

//   return (
//     <>

// <div class="form-check form-check-inline">
//   <input checked={firstName} onClick={(e) => Value("p")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
//   <label class="form-check-label" for="inlineRadio1">1</label>
// </div>
// <div class="form-check form-check-inline">
//   <input checked={lastName} onClick={(e) => Value("q")}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
//   <label class="form-check-label" for="inlineRadio2">2</label>
// </div>

//  {firstName ?
//     <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
// :
// <div class="mb-3">
// <label for="exampleInputPassword1" class="form-label">Password22222</label>
// <input type="password" class="form-control" id="exampleInputPassword1"/>
// </div>
// }
// </>
//   )
// }

// export default SecondPage;

