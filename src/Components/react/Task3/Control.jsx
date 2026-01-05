import React, { useState } from 'react'
import './Control.css'

const Control = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState()

  return (
    <div className='container'>
      <h2>Control the input types </h2>

      <div>
      <input type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
      {!name && <p>Name is required</p>}
      <p>Name :{name}</p></div>
      
      <div>
      <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      {!email.includes("@")&&email && <p>Invalid email</p>}
      <p>Name :{email}</p></div>

      <div>
      <input type='phone' placeholder='Enter phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
      {phone && phone.length !== 10 && <p>Phone must be 10 digits</p>}
      <p>Name :{phone }</p></div>
      
    </div>
  )
}

export default Control
