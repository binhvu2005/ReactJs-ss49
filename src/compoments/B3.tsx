import React from 'react'

export default function B3() {
  return (
    <div>
      <h1>Login account</h1>
      <label htmlFor="">email</label><br />
      <input type="text" placeholder='email...'/><br />
      <label htmlFor="">password</label><br />
      <input type="text" placeholder='password...'/><br />
      <button>Login</button>
      <p>có acc chưa chưa thì <a href="/">Đăng kí</a></p>
    </div>
  )
}
