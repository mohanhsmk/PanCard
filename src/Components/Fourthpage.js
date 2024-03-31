import React, { useState } from 'react'

const Fourthpage = () => {
  const [select,setSelect] = useState(false);
  const [table,setTable] = useState(false);
  const [table1,setTable1] = useState(false);

const Value1 = (data) => {
     if(data == "indian") {
        setSelect(true);
        setTable1(false);
     }
     else if (data == "Nri") {
        setTable(true);
        setSelect(false);
        setTable1(false);
     }
     if (data == "Defence") {
          setTable1(true);
          setTable(false);
     }
}



  return (
    <>
      <div className='container p-5'>
        <div className='Area-code'>
          <div className='container p-5'>
            <div className='row'>
              <div className='col-lg-3'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Area code*</label>
                  <input  style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-3'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">AO type*</label>
                  <input style={{ width: "100%" }} name="town" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-3'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Range code*</label>
                  <input name="area" style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
              <div className='col-lg-3'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    AO No.*</label>
                  <input style={{ width: "100%" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className='area-para'>For help on AO code, select from the following</p>
      </div>
      <div className='container p-5'>
        <div className='for-help'>
          <div className='container p-5'>
            <div class="form-check form-check-inline">
              <input onChange={() => Value('indian')} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Indian Citizens</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={() => Value('Nri')} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">NRIs and Foreign Citizens</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={() => Value('Defence')} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Defence employees</label>
            </div>
            <div class="form-check form-check-inline">
              <input disabled class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label" for="inlineRadio1">Government Category</label>
            </div>
          </div>
           {select ?
          <div className='container p-5'>
            <div className='row'>
              <div className='col-lg-6'>
                <p>State</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>                  </div>
              <div className='col-lg-6'>
                <p>City</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        :
        null
}
        
          <div className='container p-5'>
            <p>Choose AO Code</p>
            <div className='choose-AO-Code'>
              {table ?
              <div className='container p-5'>
                <table>
                  <tr>
                    <th>Select</th>
                    <th>Description</th>
                    <th>Additional Description</th>
                    <th>Area Code</th>
                    <th>AO Type</th>
                    <th>Range Code</th>
                    <th>AO Number</th>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                  </tr>
                  <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Mexico</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Austria</td>
                  </tr>
                  <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                    <td>UK</td>
                  </tr>
                  <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                    <td>Canada</td>
                  </tr>
                  <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                    <td>Italy</td>
                  </tr>
                </table>
              </div>
              : 
          null
}
{table1 ?
              <div className='container p-5'>
                <table>
                  <tr>
                    <th style={{fontSize:"15px"}}>Select</th>
                    <th style={{fontSize:"15px"}}>Description</th>
                    <th style={{fontSize:"15px"}}>Additional Description</th>
                    <th style={{fontSize:"15px"}}>Area Code</th>
                    <th style={{fontSize:"15px"}}>AO Type</th>
                    <th style={{fontSize:"15px"}}>Range Code</th>
                    <th style={{fontSize:"15px"}}>AO Number</th>
                  </tr>
                  <tr>

                  </tr>
                  <tr>

                  </tr>
                  <tr>

                  </tr>
                  <tr>

                  </tr>
                  <tr>

                  </tr>
                  <tr>

                  </tr>
                </table>
                </div>
: null
}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Fourthpage;



