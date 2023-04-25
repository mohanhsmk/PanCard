import React,{useState,useEffect} from 'react'
import "./App.css"
import img from "../images/logo_light.png"
import {Data3,Data4} from "../Components/data"
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const [AppliType,setAppliType] = useState("");
    const [lastName,setLastName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [middleName,setMiddleName] = useState("");
    const [email,setEmail] = useState("");
    const [phonenumber,setPhoneNumber] = useState("");
    const [check,setCheck] = useState("");
    const [fullName,setFullName] = useState("");



    const setData = () => {
        let data = {
            "firstName" : firstName,
            "MiddleName" : middleName,
            "LastName" : lastName
        };

        localStorage.setItem('user-info',JSON.stringify(data));
        console.log(data);
    }

    useEffect(() => {
        getItem();
      },[]);

       const disablekey = (e) => {
          if (e.target.value.length > 9 && e.keyCode > 47 && e.keyCode < 58) {
            e.preventDefault();
          }
        }
    const Value = (e) => {
        setLastName(e.target.value);
    }

    const Value1 = (e) => {
        setFirstName(e.target.value);
        console.log(e.target.value);
    }

    const Value2 = (e) => {
        setMiddleName(e.target.value);
    }

    const Value3 = (e) => {
        setEmail(e.target.value);
    }

    const Value4 = (e) => {
        setPhoneNumber(e.target.value);
    }

    const Value5 = (e) => {
        setCheck(e.target.checked);
    }
     const Value6 = (e) => {
        setAppliType(e.target.value);
    }

    
      const getItem = () => {
        let data = JSON.parse(localStorage.getItem('user-info'));
        console.log(data);
        setLastName(data.LastName);
        setFirstName(data.firstName);
        setMiddleName(data.MiddleName);
        setFullName(data.firstName+" "+data.MiddleName+" "+data.LastName)
    }

    const handlChange = (e) => {
        if(lastName === "") {
            alert("lastname is required")
        }
        else if (AppliType === "") {
            alert("Please select the application type")
        }

        else if (firstName === "") {
            alert("firstName is required")
        }
        else if (middleName === "") {
            alert("middleName is required")
        }
        else if (email === "") {
            alert("email is required")
        }
        else if(phonenumber === "") {
            alert("phone number is required")
 
        }
        else if(check === ""){
            alert("plz check") ;  
        }
        else {           
                let path = `/Nav`; 
                navigate(path);
        }
        setData();
    
    }
 
    const [state,setState]= useState(0);
    const [dist,setDist] = useState([]);

    const Add = (e) => {
        if(e.target.value == 1) {
          setState(e.target.value);
          let distric = Data4.filter((item) => item.stateId == e.target.value);
          console.log(distric)
          setDist(distric)
        }
        else {
          let distric = Data4.filter((item) => !item.stateId);
          setDist(distric);
        }    
      }

  return (
    <>
       <div className='hhh'>
        <div className='hhh-img'>
          <img src={img} alt="img" />
         <div className='token'>
          <p>{firstName}</p>
          <p >{middleName}</p>
          <p>{lastName}</p>
          </div>
          </div>
       </div>      
          <div className='container p-5'>
              <button type="button" className='btn-1'>Apply Online</button> <button onClick={handlChange} type="button" className='btn-2'>Continue With Application</button>
              <h1>Online pan Application</h1><br></br>
              <p>As per ITD guidelines,'Request for New PAN Card or/and Changes or Correction in PAN Data' application is presently to be used only for update/correction in PAN database. For procedure to link Aadhaar with PAN, please click here.</p><br></br>
              <p>As per provisions of Section 272B of the Income Tax Act., 1961, a penalty of ₹ 10,000 can be levied on possession of more than one PAN.</p>
              <hr></hr>
              <div className='application-1'>
                  <div className='row'>
                      <div className='col-lg-6'>
                          <div className='container p-4'>
                              <p>Application Type*</p>
                              <select onChange={Value6} style={{ width: "400px", marginTop: "10px" }} class="form-select" aria-label="Default select example">
                                  <option selected>----Please Select----</option>
                                  <option value="1">New PAN - Indian Citizen (Form 49A)</option>
                                  <option value="2">New PAN - Foreign Citizen (Form 49AA)</option>
                                  <option value="3">Changes or Correction in existing PAN Data /<br></br>
                                      Reprint of PAN Card (No changes in existing PAN Data)</option>
                              </select>
                          </div>
                      </div>
                      <div className='col-lg-6'>
                          <div className='container p-4'>
                              <p>Category*</p>
                              <select style={{ width: "400px", marginTop: "10px" }} class="form-select" aria-label="Default select example" onChange={Add}>
                                  <option selected>----Please Select----</option>
                                  {Data3.map((item) => (
                                      <>
                                          <option value={item.id}>{item.name}</option>
                                      </>
                                  ))}
                              </select>
                          </div>
                      </div>
                  </div>
              </div>
              <p style={{ marginTop: "30px", fontSize: "30px" }}>Applicant Information</p>
              <div className='application-2'>
                  <div className='container p-4'>
                      <p>Title</p>
                      <select style={{ width: "400px", marginTop: "10px" }} class="form-select" aria-label="Default select example" onChange={Add}>
                          <option selected>Open this select menu</option>
                          {dist.map((item) => (
                              <option value={item.id}>{item.name}</option>
                          ))}
                      </select>
                  </div>
                  <div className='container p-4'>
                      <div className='row'>
                          <div className='col-lg-6'>
                              <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Last Name / Surname*</label>
                                  <input onChange={Value} type="email" class="form-control in-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                          </div>
                          <div className='col-lg-3'>
                              <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">First Name</label>
                                  <input onChange={Value1} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                              
                          </div>
                          <div className='col-lg-3'>
                              <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Middle Name</label>
                                  <input onChange={Value2} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                          </div>
                      </div>

                      <div className='row'>
                          <div className='col-lg-6'>
                              <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Date of Birth / Incorporation / Formation (DD/MM/YYYY)*</label>
                                  <input type="Date" class="form-control in-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                          </div>
                          <div className='col-lg-3'>
                              <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Email ID*</label>
                                  <input onChange={Value3} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                          </div>
                          <div className='col-lg-3'>
                              <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label">Mobile Number*</label>
                                  <input onChange={Value4} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                              </div>
                          </div>
                          <div class="mb-3 form-check">
                              <input onChange={Value5} type="checkbox" class="form-check-input" id="exampleCheck1" />
                              <label class="form-check-label" for="exampleCheck1">By submitting data to us and/or using our Protean e-Gov TIN web site https://www.onlineservices.Protean.com/paam/endUserRegisterContact.html you give your consent that all personal data/information that you submit to avail tax related services from Protean eGov Technologies Limited may be received, stored, processed, transmitted and or made available for view /use as mandated by law or otherwise, shall be dealt with by us in the manner and for the purposes specified / as described in the privacy policy or as mandated by law.</label>
                          </div>
                      </div>
                  </div>
              </div><br></br>
              <div className='bt-1'>
                  <button className='btt-1' style={{ backgroundColor: "#00b2c9" }} type="button">Reset</button> <button onClick={handlChange} className='btt-1' type="button">Submit</button>
              </div>
          </div>
       </>
  )
}
export default Home;


