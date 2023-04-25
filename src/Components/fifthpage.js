import React,{useState,useEffect} from 'react'

const fifthpage = () => {


  const [lastName,setLastName] = useState("");
  const [firstName,setFirstName] = useState("");
  const [middleName,setMiddleName] = useState("");
  const [fullName,setFullName] = useState("");

  const getItem = () => {
    let data = JSON.parse(localStorage.getItem('user-info'));
    console.log(data);
    setLastName(data.LastName);
    setFirstName(data.firstName);
    setMiddleName(data.MiddleName);
    setFullName(data.firstName+" "+data.MiddleName+" "+data.LastName);
}
useEffect(() => {
  getItem();
},[]);

  return (
    <div className='container p-5'>
      <h6>Documents submitted as Proof of Identity (POI), Proof of Address (POA) and Proof of Date of Birth (DOB)*</h6>
      <div className='docu-submite'>
        <div className='container p-5'>
          <div className='row'>
          <h5>We have enclosed</h5>
            <div className='col-lg-4'>
              <p>Proof of identity</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='col-lg-4'>
              <p> 
Proof of address</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='col-lg-4'>
              <p>Proof of date of birth</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <p className='declare'>Declaration</p>
      <div className='Declaration'>
        <div className='container p-5'>
        <p className='declare'>Declaration</p>
          <div class="mb-3">
            <input  style={{ width: "30%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <p>do hereby declare that what is stated above is true to the best of my/our information and belief.</p>

          <div className='row'>
            <div className='col-lg-6'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Place</label>
                <input style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className='col-lg-6'>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Date</label>
                <input style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default fifthpage;










