import React from 'react'
import { useState } from 'react'
// import { SignUp } from '@pages';
const Index = () => {
const [form, setForm] = useState ({})
    const handleChange=(event)=>{
        const {value, name} = event.target
        setForm ({...form, [name]:value})
      }
      const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(form);
      }
  return (
    <div className="container">
    <div className="row mt-2">
      <div className="col-md-6 offset-3">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">SignUp</h1>
        </div>
        <div className="card-body">
        <form id="submit" onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" name="Email" onChange={handleChange} type="text" id="email" className="my-2" />
        <TextField fullWidth label="Full name" name="full_name" onChange={handleChange} type="text" id="full_name"  className="my-2" />
        <TextField fullWidth label="Password" name="password" onChange={handleChange} type="password" id="password"  className="my-2" />
        <TextField fullWidth label="Phone number" name="phone_number" onChange={handleChange} type="text" id="phone_number"  className="my-2" />
        </form>
        </div>
        <div className="card-footer">
          <button type="submit" form="submit" className="btn btn-success">SignUp</button>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Index
