import React from 'react'
import { Routes , Route , Link, NavLink, Navigate} from 'react-router-dom'
import B1 from './compoments/B1' 
import B2 from './compoments/B2'
import B3 from './compoments/B3'
import B4 from './compoments/B4'
import Notfound from './compoments/B5'
import B6 from './compoments/B6'
import B7 from './compoments/B7'
import B8 from './compoments/B8'
import CustomLink from './compoments/B9/CostomLink'
import HomePage from './compoments/B9/Homepage'
import NotFound from './compoments/B9/NotFound'
import ListUser from './compoments/B10/ListUser'
import UserDetail from './compoments/B10/UserDetail'

export default function App() {
  const activeStyle = ({ isActive } : {isActive : boolean}) => {
    return {
        color: isActive? 'blue' : 'black',
        fontWeight: isActive? 'bold' : 'normal'
    }
}
const acctive = ({ isActive } : {isActive : boolean}) => {
  return {
      background: isActive ? 'blue' : 'white',
      color: isActive? 'white' : 'black',
      fontWeight: isActive? '700' : '100'
  }
}
  return (
    <div>
         <Link to="/">home</Link> <br />
      <Link to="/contact">contact</Link><br />

      <NavLink to = "/" style={activeStyle}>Home</NavLink>
      <NavLink to = "/contact" style={activeStyle}>contact</NavLink>
      <NavLink to = "/detal" style={activeStyle}>Detal</NavLink>
      <br />
      <NavLink to = "/" style={acctive}>Home</NavLink>
      <NavLink to = "/contact" style={acctive}>contact</NavLink>
      <NavLink to = "/detal" style={acctive}>Detal</NavLink>
      <Routes>
        <Route path="/" element={<B1 />} />
      <Route path="/contact" element={<B2/>} />
      <Route path="/login" element={<B3 />} />
      <Route path="/register" element={<B4 />} />
      <Route path="*" element={<Notfound />} />
      <Route path="" element={<B6 />} />
      <Route path="" element={<B7 />} />
      <Route path="" element={<B8 />} />

      <Route path="/home-page" element={<HomePage />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />

          <Route path="/user" element={<ListUser />} />
        <Route path="/user/:id" element={<UserDetail />} />



      </Routes>
      
    </div>
  )
}
