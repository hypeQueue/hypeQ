import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Signup = () => {
  return(
  <div>
    <form>
      <label>Create Username:</label>
      <input type='text'></input>
      <label>Create Password:</label>
      <input type='text'></input>
    </form>
    <body>
    <Link to="/home"><img className = "homepageButton" src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo2GGfKVvP2pRbnHwCVLFYiUVhhRXqQy1Zd_s1ZuQUQhW9GiXq3iD2WTHi3DlAdtba84&usqp=CAU'></img></Link>
    </body>
  </div>
  )
}

export default Signup;