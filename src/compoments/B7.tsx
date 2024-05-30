import React from 'react'
import { NavLink } from 'react-router-dom'

export default function B7() {
    const activeStyle = ({ isActive } : {isActive : boolean}) => {
        return {
            color: isActive? 'blue' : 'black',
            fontWeight: isActive? 'bold' : 'normal'
        }
    }
  return (
    <div>
      <NavLink to = "/" style={activeStyle}>Home</NavLink>
      <NavLink to = "/contact" style={activeStyle}>contact</NavLink>
      <NavLink to = "/detal" style={activeStyle}>Detal</NavLink>
    </div>
  )
}
