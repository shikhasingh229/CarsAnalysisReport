import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <section className="navbar-brand">
      <img src="logo.png" alt="" width="40" height="40" className="d-inline-block align-text-top mx-2"/>
        <strong>{props.title}</strong></section>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/info">Info</Link>
          </li>
          </ul>
          <div className='box' >
          <div className='content mx-2' >{props.mode==='dark'?'Light mode':'Dark Mode'}</div>
         <img src={props.mode==='dark'?'light.png':'dark.png'} alt='light' id='icon' style={props.mode==='dark'?{height:'40px',width:'40px'}:{height:'25px',width:'25px',marginRight:'2.5px'}}  onClick={props.toggleMode}></img>
         
         </div>
      </div>
    </div>
  </nav>


  )
}

//Proptypes
Navbar.propTypes ={
    title : PropTypes.string.isRequired 
}

//default props

Navbar.defaultProps={
    title:"Navbar title here"
}
