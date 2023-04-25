import React, { useState } from 'react'
import { Data5, Data6, Data7, Data8 } from "./data"

const Thirdpage = () => {


  const [state, setState] = useState(0);
  const [dist, setDist] = useState([]);

  const [disable, setDisable] = useState(false);
  const [disable1, setDisable1] = useState(false);

  const [age, setAge] = useState(false);

  const Result = (mm) => {
    if (mm == "yes") {
      setAge(true)
    }
    else {
      setAge(false)
    }
  }

  const Data = (data, e) => {
    if (data == "yes") {
      setDisable(true);
    }
    if (!e.target.checked) {
      setDisable(false);
    }
  }

  const Data1 = (data, e) => {
    if (data == "hh") {
      setDisable1(true);
    }
    if (!e.target.checked) {
      setDisable1(false);
    }
  }

  const Add = (e) => {
    if (e.target.value == 3) {
      setState(e.target.value);
      let distric = Data6.filter((item) => item.stateId == e.target.value);
      console.log(distric)
      setDist(distric)
    }
    else {
      let distric = Data6.filter((item) => !item.stateId);
      setDist(distric);
    }
  }

  console.log(disable);
  return (
    <div className='container p-5'>
      <p style={{ fontSize: "20px", color: "#007790", marginTop: "20px" }}>Source of Income*</p>
      <div className='third-1'>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-4'>
              <p style={{ fontWeight: "bold" }}>Please tick as applicable</p>
              <div class="mb-3 form-check">
                <input disabled={disable} type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Salary</label>
              </div>
              <div class="mb-3 form-check">
                <input disabled={disable} type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Income from House property</label>
              </div>
              <div class="mb-3 form-check">
                <input onChange={(e) => Data("yes", e)} type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">No income</label>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3 form-check">
                <input onChange={(e) => Data1("hh", e)} disabled={disable} type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Income from Business / Profession</label>
              </div>
              <div class="mb-3 form-check">
                <input disabled={disable} type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Income from Other sources</label>
              </div>
            </div>
            <div className='col-lg-4'>
              <select style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} disabled={disable1} class="form-select " aria-label="Default select example">
                {Data7.map((item) => (
                  <option value="1">{item.name}</option>
                ))}
              </select><br></br>
              <div class="mb-3 form-check">
                <input disabled={disable} type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Capital gains</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "20px", color: "#007790", marginTop: "30px" }}>Address for communication*</p>
      <div className='Adress-commu'>
        <div className='container p-5'>
          <p>Please tick as applicable</p>
          <div className='row'>
            <div className='col-lg-4'>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Residence</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Office</label>
              </div>
            </div>
            <div className='col-lg-8'>
              <p className='paragrapfh-1'>
                important instructions for paperless PAN application through e-KYC (Only For Individual)-<br></br>
                1.The address used in Aadhaar card would be used in PAN application as residence address and no need to fill residential address.<br></br>
                2. PAN card will be dispatched at address mentioned in Aadhaar.<br></br>
                3.If length of address as per Aadhaar database exceeds the length as specified by Income Tax Department then you will not be able to avail e-KYC service
              </p>
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: "20px", color: "#007790", marginTop: "30px" }}>Residence Address</p>
      <div className='Residence-adress'>
        <div className='container p-5'>
          <div className='row'>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Flat / Room / Door / Block No.</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name of Premises/Building/Village</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Road/Street/Lane/Post Office</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Area/Locality/Taluka/Sub-Division</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Town/City/District</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Country Name</label>
                <select style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} class="form-select" aria-label="Default select example" onChange={Add}>
                  {Data5.map((item) => (
                    <option value={item.id}>{item.state}</option>
                  ))}
                </select>              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">State/Union Territory</label>
                <select style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} class="form-select" aria-label="Default select example" onChange={Add}>
                  {dist.map((item) => (
                    <>
                      <option value={item.id}>{item.state}</option>
                    </>
                  ))}
                </select>              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Pin Code</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Zip Code</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "20px", color: "#007790", marginTop: "30px" }}>Office Address</p>
      <div className='office-adress'>
        <div className='container p-5'>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name of Office</label>
            <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className='row'>
            <div className="col-lg-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Flat / Room / Door / Block No.</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name of Premises/Building/Villagee</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Road/Street/Lane/Post Office</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className="col-lg-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Area/Locality/Taluka/Sub-Division</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Town/City/District</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Country Name</label>
                <select style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} class="form-select" aria-label="Default select example" onChange={Add}>
                  {Data5.map((item) => (
                    <option value={item.id}>{item.state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-lg-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">State/Union Territory</label>
                <select style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} class="form-select" aria-label="Default select example" onChange={Add}>
                  {dist.map((item) => (
                    <>
                      <option value={item.id}>{item.state}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Pin Code</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Zip Code</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "20px", color: "#007790", marginTop: "30px" }}>Telephone Number & Email ID details*</p>
      <div className='Telephone'>
        <div className='container p-5'>
          <div className="row">
            <div className='col-lg-4'>
              <label for="exampleInputEmail1" class="form-label">Country code (ISD code)*</label>
              <select style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} class="form-select" aria-label="Default select example">
                {Data8.map((item) => (
                  <option selected>{item.name}</option>
                ))}
              </select>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Area / STD Code</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-4'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Telephone / Mobile Number</label>
                <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email ID</label>
              <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "20px", color: "#007790", marginTop: "30px" }}>Representative Assessee</p>
      <div className='representative'>
        <div className='container p-5'>
          <p>Appointing Representative Assessee?</p>

          <div class="form-check form-check-inline">
            <input onChange={(e) => Result('yes')} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input onChange={(e) => Result('no')} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">no</label>
          </div>
        </div>
      </div>
      {age ?
        <div className='representative-1'>
          <div className='container p-5'>
            <h6>Full Name (Full expanded name : initials are not permitted)</h6>
            <label for="exampleInputEmail1" class="form-label">title<span style={{ color: "crimson" }}>*</span></label>
            <select style={{ width: "30%", border: "2px solid #e6e4eb", borderRadius: "3px" }} class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select><br></br>
            <div className='row'>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Last Name / Surname<span style={{ color: "crimson" }}>*</span></label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">First Name</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Middle Name</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div className='row'>
              <h6>Address<span style={{ color: "crimson" }}>*</span></h6>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Flat / Room / Door / Block No.</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name of Premises/Building/Village</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Road/Street/Lane/Post Office</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Area/Locality/Taluka/Sub-Division</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Town/City/District</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Country Name</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">State/Union Territory</label>
                  <input style={{ width: "100%", border: "2px solid #e6e4eb", borderRadius: "3px" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Pin Code</label>
                  <input style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Zip Code</label>
                  <input style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null
      }
      <button className='btt-1' type="button">Next</button>
    </div>
  )
}
export default Thirdpage;
