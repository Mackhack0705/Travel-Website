import React from 'react'
import '../pages-style/login.css'

const LoginForm = () => {
  return (
    <div className='login-form'>
      <div className="form-section">
        <h2>Login Form</h2>
        <form action="">
          <input type="email" className='account' placeholder='Email' />
          <br />
          <input type="password" className='account' placeholder='Password'/>
          <button className='submit-button primary-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
