import React from 'react'
import { NavLink } from 'react-router-dom'

export default function B8() {
    const acctive = ({ isActive } : {isActive : boolean}) => {
        return {
            background: isActive ? 'blue' : 'white',
            color: isActive? 'white' : 'black',
            fontWeight: isActive? '700' : 'normal'
        }
    }
  return (
    <div>
       <NavLink to = "/" style={acctive}>Home</NavLink>
      <NavLink to = "/contact" style={acctive}>contact</NavLink>
      <NavLink to = "/detal" style={acctive}>Detal</NavLink>
    </div>
  )
}
