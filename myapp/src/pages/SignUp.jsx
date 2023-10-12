import React from 'react'
import '../pages-style/signup.css'

const SignUp = () => {
  return (
    <div className='signup-form'>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form action="">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" className='account' placeholder='Email' />
          <br />
          <input type="password" className='account' placeholder='Password' />
          <br />
          <input type="password" className='account' placeholder='Confirm password' />
          <button className='submit-button primary-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
