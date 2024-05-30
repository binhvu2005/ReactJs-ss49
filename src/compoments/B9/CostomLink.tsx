import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomLink = () => {
  const location = useLocation();
  
  if (location.pathname === '/home-page') {
    return <Link to="/home-page">Go to Home Page</Link>;
  } else {
    return <Link to="/not-found">Go to Not Found Page</Link>;
  }
};

export default CustomLink;
