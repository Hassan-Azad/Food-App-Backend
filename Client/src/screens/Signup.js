import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {

  const [credentials, setcredentials] = useState({
    // default values
    name:"",
    email:"",
    password:"",
    geoLocation:""
  })


  const handleChange = (event) =>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:credentials.name, email: credentials.email, password:credentials.password, location:credentials.geoLocation})
    }) 
    
    const data = await response.json()
    console.log(data)

    if(!data.success){
      alert("Invalid Credentials")
    }
  }



  return (
    <>
    <div className="container container border border-success w-25 h-auto bg-light" style={{"margin-top": '100px'}}>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <h4 className=" mt-4 mb-5 text-success">SIGNUP</h4>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="geoLocation"
            value={credentials.geoLocation}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className=" m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className=" m-3 btn btn-danger">Already a User</Link>
      </form>
    </div>
    </>
  );
}
