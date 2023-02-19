// rafce

// import React from 'react';
// import "./Header.css";
// import logo from '../assets/images/logo.png';

// const Header = (props) => {
//   console.log('props',props);
//   return (
//     <div className='head'>Header {props.feature}
//     <button onClick={()=> props.get("data")}>click</button>
//       <img src={logo}/>
//       <img src={require('../assets/images/logo.png')}/>
//       <p id='demo'></p>
//     </div>

//   )
// }

// export default Header

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    const navigate = useNavigate();
    const gotoHome = () =>{
        navigate("/banner");
    }
  return (
    <div className='head'>Header
        <Link to="/banner">Go to Banner</Link>
        <Link to="/content">Go to Content</Link>
        <Link to="/footer">Go to Footer</Link>
        <button onClick={() => gotoHome()}>Navigate to Banner</button>
    </div>
  )
}

export default Header
