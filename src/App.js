import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [city,setCity] =useState("");
  const [state,setState] = useState("");
  const [record, setRecord] = useState([]);

  const handleSubmit = () => {
    axios.post(`https://react-ravina-3850c-default-rtdb.firebaseio.com/users.json`, {
      fname: fname, email: email,lname:lname,password:password,state:state,city:city
    })
      .then((res) => {
        alert("insert..");
        setEmail("");
        setFname("");
        setLname("");
        setPassword("");
        setCity("");
        setState("");
        getuser();
      })
      .catch((err) => {
        console.log(err);
        return false;
      })
  }

  const getuser = () => {
    axios.get(`https://react-ravina-3850c-default-rtdb.firebaseio.com/users.json`)
      .then((res) => {
        let data = res.data;
        let record = [];
        for (let i in data) {
          record.unshift({
            ...data[i], id: i,
          })
        }
        setRecord(record);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  useEffect(() => {
    getuser();
  })

  return (
    <>
      <center>
        <header><h2>From</h2></header>
      <div className='container'>
        <div className='row justify-content-center align-item-center'>
          
        <form class="row g-3 col-xl-4 from justify-content-center mt-5">
          <div class="col-md-11 position-relative">
            <label for="validationTooltip01" class="form-label">First name</label>
            <input type="text" class="form-control" name='fname' onChange={(e) => setFname(e.target.value)} value={fname} required/>
          </div>
          <div class="col-md-11 position-relative">
            <label for="validationTooltip02" class="form-label">Last name</label>
            <input type="text" class="form-control" name='lname' onChange={(e) => setLname(e.target.value)} value={lname} required/>
              
          </div>
          <div class="col-md-11 position-relative">
            <label for="validationTooltipUsername" class="form-label">Email Id</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input type="text" class="form-control" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                
            </div>
          </div>
          <div class="col-md-11 position-relative">
            <label for="validationTooltip05" class="form-label">password</label>
            <input type="text" class="form-control" name='password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
          </div>
          <div class="col-md-11 position-relative">
            <label  class="form-label f-weight">City</label>
            <input type="text" class="form-control" name='city' onChange={(e) => setCity(e.target.value)} value={city}  required/>
              
          </div>
          <div class="col-md-11 position-relative">
            <label for="validationTooltip04" class="form-label">State</label>
            <select class="form-select" name='state' onChange={(e) => setState(e.target.value)} value={state} required>
              <option selected disabled value="">Choose...</option>
              <option>Gujarat</option>
              <option>Maharatra</option>
              <option>Delhi</option>
              <option>Rajasthan</option>
              <option>Uttrakhand</option>
            </select>
            </div>
          
          <div class="col-12">
            <button class="btn btn-primary" type='button' onClick={()=>handleSubmit()}>Submit form</button>
          </div>
        </form>
        </div>
      </div>


        {/* <table border={1} cellPadding={10}>
          <tr>
            <td>Id</td>
            <td>FName</td>
            <td>LName</td>
            <td>Email</td>
            <td>password</td>
            <td>city</td>
            <td>state</td>
          </tr>
          {
            record.map((v) => {
              return (
                <tr>
                  <td>{v.id}</td>
                  <td>{v.fname}</td>
                  <td>{v.lname}</td>
                  <td>{v.email}</td>
                  <td>{v.password}</td>
                  <td>{v.city}</td>
                  <td>{v.state}</td>
                </tr>
              )
            })
          }
        </table> */}
      </center>
    </>
  );
}

export default App;
