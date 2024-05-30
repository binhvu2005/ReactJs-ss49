import React from 'react'

export default function B4() {
  return (
    <div>
      <h1>Register account</h1>
      <label htmlFor="">email</label><br />
      <input type="text" placeholder='email...'/><br />
      <label htmlFor="">password</label><br />
      <input type="text" placeholder='password...'/><br />
      <label htmlFor="">comfirm password</label><br />
      <input type="text" placeholder='password...'/><br />
      <button>create</button>
      <p>có acc chưa chưa thì <a href="/">Đăng nhập</a></p>
    </div>
  )
}
