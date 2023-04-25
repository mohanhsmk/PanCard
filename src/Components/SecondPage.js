import React,{useEffect, useState} from 'react'

const SecondPage = () => {

    const [lastName,setLastName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [middleName,setMiddleName] = useState("");
    const [fullName,setFullName] = useState("");



    const [disable,setDisable] = useState(false);
    const [father, setFather] = useState(false);
    const [mother, setMother] = useState(false);

    // const disable3 = (e, type) => {
    //   console.log(e.target.checked);
    //   if(type == "Y") {
    //     setAadharOption(true);
    //     setAadharOption1(false);
    //     setDisable(true)
    //   }
    //   else{
    //     setAadharOption1(true);
    //     setAadharOption(false);
    //     setDisable(false);
    //   }
    // }

    const Disable3 = (long) => {
       if(long == "yes") {
          setMother(true);
          setFather(false);
          setDisable(true);
       }
       else {
        setMother(false);
        setFather(true);
        setDisable(false);

       }
    }

  
    const [data,setData] = useState(true);

    const Value = (mount) => {
        if(mount == "yes") {
            setData(true);
        }
        else{
          setData(false);
        }
    }


useEffect(() => {
    getItem();
  },[]);

  const getItem = () => {
    let data = JSON.parse(localStorage.getItem('user-info'));
    console.log(data);
    setLastName(data.LastName);
    setFirstName(data.firstName);
    setMiddleName(data.MiddleName);
    setFullName(data.firstName+" "+data.MiddleName+" "+data.LastName)
}
  return (
    <div className='container p-5'>
        <p className='para-applicant'>How do you want to submit your PAN application documents?</p>
      <div className='second-pan'>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-4'>
              <div class="form-check form-check-inline">
                <input   class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Submit digitally through e-KYC & e-Sign (Paperless)</label>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="form-check form-check-inline">
                <input  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Submit scanned images through e-Sign</label>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="form-check form-check-inline">
                <input   class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Forword application documents phisically</label>
              </div>
            </div>
          </div>
        </div>
        <div className='container p-5'>
          <p>Important instructions for paperless PAN application through e-KYC / e-Sign -</p>
          <p>1.To avail e-KYC / e-Sign Services, Aadhaar is mandatory and details given in Aadhaar should be exactly matched with applicant's Full name, Date of Birth and Gender as mentioined in this application form to authenticate Aadhaar.</p>
          <p>2.Once authentication of Aadhaar is successful then one time password (OTP) would be sent on your mobile number/email ID linked with your Aadhaar to generate Aadhaar Based e-Sign.</p>
          <p>3.To check registered mobile number/email ID in Aadhaar, please visit at https://resident.uidai.gov.in/verify-email-mobile.</p>
          <p>4.In e-Sign Service, applicant needs to upload Photo,Sign and supporting document as per prescribed format</p>
          <p>5.In e-KYC & e-Sign (Paperless), no need to upload Photo,Sign and supporting document. The photograph used in Aadhaar card would be printed in PAN card.</p>
          <p>6.e-KYC & e-Sign (Paperless) and e-Sign facility is not available for Minor applicants and other categories of applicants as provided u/s 160 of Income-tax Act, 1961 where Representative Assessee is appointed by the applicant.</p>
        </div>
      </div> <br></br>
      <div className='second-pan-1'>
        <div className='container p-4'>
          <p style={{ color: "#007790",fontSize:"20px",margin:"15px"}}>Whether Physical PAN Card is required?</p>          
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" for="inlineRadio1"><div class="dropdown">
  <p class="dropbtn1">Yes Fees Applicable</p>
  <div class="dropdown-content">
  <table>
  <tr>
    <th>Company</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>  </div>
</div></label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2"><div class="dropdown">
  <p class="dropbtn1">No fees Applicable</p>
  <div class="dropdown-content-1">
  <table>
  <tr>
    <th>Company</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
  </div>
</div></label>
          </div>
          <p className='para-1'>
            ** Important Note: As you have selected for not availing physical PAN Card, your email ID will be required mandatorily. You will receive only digitally signed e-PAN Card at the email ID given in your application.</p>
        </div>
      </div>
      <div className='second-pan-2'>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6>Aadhaar Number (Only for Individual)</h6>
              <p>Enter Aadhaar last four digits.</p>
              <div className='row'>
                <div className='col-lg-6'>
                  <div class="mb-3">
                    <input placeholder='xxxxxxxxxxx' style={{ width: "100px",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="in-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div class="mb-3" style={{ marginLeft: "-57%" }}>
                    <input style={{ width: "100px",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="in-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <h6>EID Number (If Aadhaar Number is not allotted-Only for Individual)</h6><br></br>
              <div className='row'>
                <div className='col-lg-6'>
                  <div class="mb-3">
                    <input style={{ width: "80%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="in-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>                          </div>
                <div className='col-lg-6'>
                  <div class="mb-3" style={{ marginLeft: "-28%" }}>
                    <input style={{ width: "80%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="in-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>                          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='second-pan-3'>
        <div className='row'>
          <div className='container' style={{margin:"45px"}}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name as Per the Adhar</label>
              <input style={{ width: "30%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>
        </div>
      </div>
      <p className='para-applicant'>Full Name of the Applicant </p>
      <div className='second-pan-4'>
        <div className='container p-5'>
        <p>Title*</p>
          <select style={{border:"2px solid #e6e4eb",borderRadius:"3px" }} class="form-select select-1" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Shri</option>
            <option value="2">Smt</option>
            <option value="3">Kumari</option>
          </select>
        </div>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Last Name / Surname *</label>
                <input  name='lastName'  style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" value={lastName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input  name='firstName' style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" value={firstName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Middle Name</label>
                <input name='middleName' style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" value={middleName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name that you would like printed on PAN card</label>
              <input value={fullName}  name='fullName' style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Date of Birth / Incorporation / Formation*</label>
                  <input style={{ width: "99%",border:"2px solid #e6e4eb",borderRadius:"3px" }}  type="Date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Gender (Only for individual)*</label>
                  <input style={{ width: "105%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Registration Number</label>
                <input style={{ width: "47%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='para-applicant'>Have you ever been known by any other name?</p>
      <div className='second-pan-5'>
        <div className='container p-5'>
        <div class="form-check form-check-inline">
  <input onChange={() => Value("yes")}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div class="form-check form-check-inline ">
  <input onChange={() => Value("no")}   class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">No</label>
</div>        
        </div>
      </div>
      {data ?
      <div className='second-pan-50'>
          <div className='container p-5'>
          <select style={{ width: "50%",border:"2px solid #e6e4eb",borderRadius:"3px" }} class="form-select select-1" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Shri</option>
            <option value="2">Smt</option>
            <option value="3">Kumari</option>
          </select><br></br><br></br>  
          <div className='row'>
              <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">FirsName</label>
                <input name='middleName' style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              </div>
              <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">MiddleName</label>
                <input name='middleName' style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              </div>
              <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">LastName</label>
                <input name='middleName' style={{ width: "100%" }} type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              </div>
          </div>         
          </div>
      </div>
      : null
}

      <p className='para-applicant'>Details of Parents (Applicable only for Individual applicants)</p>
      <div className='second-pan-6'>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-10'>
              <p style={{fontWeight:"bold"}}>Whether mother is a single parent and you wish to apply for PAN by furnishing the name of your mother only ?</p>
            </div>
            <div className='col-lg-2'>
              {/* <div class="form-check form-check-inline">
                <input onChange={(e) => Search("k")} disabled={name}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label  class="form-check-label" for="inlineRadio1">Yes</label>
              </div> */}

<div class="form-check form-check-inline">
  <input onChange={() => Disable3("yes")}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">yes</label>
</div>
<div class="form-check form-check-inline">
  <input  onChange={() => Disable3("no")}  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">no</label>
</div>

              {/* <div class="mb-3 form-check">
                          <input onChange={disable3} type="radio" class="form-check-input" id="exampleCheck1" disabled={name} />        
                          <label class="form-check-label" for="exampleCheck1">yes </label>
             </div> 
              <div class="form-check form-check-inline">
                <input onChange={(e) => Search("o")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">No</label>
              </div> */}
            </div>
            <p>(Please tick as applicable)<br></br>
              If yes,please fill in mother's name in the appropriate space provided below.</p>
          </div>
          <hr></hr>
          <h6>Father's Name (Even married women should fill in father's name only)</h6>
          <div className='row'>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Father's Last Name / Surname*</label>
                <input style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} disabled={disable}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Father's First Name</label>
                <input style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} disabled={disable} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Father's Middle Name</label>
                <input style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} disabled={disable}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
          <hr></hr>
          {/* <p> */}
            {/* Mother's Name {aadharOption1? "(Optional)": ""}</p> */}
          <div className='row'>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Mother's Last Name / Surname</label>
                <input style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
Mother's First Name</label>
                <input style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
Mother's Middle Name</label>
                <input style={{ width: "100%",border:"2px solid #e6e4eb",borderRadius:"3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
          <h6 style={{fontWeight:"bold"}}>Parents name to be printed on the PAN Card</h6>
         

<div class="form-check form-check-inline">
  <input checked={father} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"   />
  <label class="form-check-label" for="inlineRadio1">Father</label>
</div>
<div class="form-check form-check-inline">
  <input checked={mother} class="form-check-input" type="radio"name="aadharOption" id="inlineRadio1"    />
  <label class="form-check-label" for="inlineRadio2">Mother</label>
</div>
        </div>
      </div>
      {/* <button className='btt-1' type="button">Next</button> */}
    </div>
  )
}
export default SecondPage;





// import React,{useState} from 'react'

// const SecondPage = () => {
//  const [name,setName] = useState(true);

// const Value = (data) => {
//       if(data == "yes") {
//           setName(true)
//       }
//       else{
//         setName(false)
//       }
// }
//   return (
//     <div>

// <div class="form-check form-check-inline">
//   <input onChange={() => Value("yes")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
//   <label class="form-check-label" for="inlineRadio1">yes</label>
// </div>
// <div class="form-check form-check-inline">
//   <input onChange={() => Value("no")} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
//   <label class="form-check-label" for="inlineRadio2">no</label>
// </div>

// {name ?
//        <h1>Helo world</h1>
//        : null
// }
//     </div>
//   )
// }

// export default SecondPage
















