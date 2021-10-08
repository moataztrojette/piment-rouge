import React from 'react'
import {

  Link
} from "react-router-dom";
const Navbar = (props) => {
    return (   <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
      <div className="me-3">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
          <span className="icon-menu" />
        </button>
      </div>
      <div>
        <Link to ={'/'}><a className="navbar-brand brand-logo">
          <img src="/images/logo.svg" alt="logo" />
        </a></Link>
            </div>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-top"> 
      <ul className="navbar-nav">
        <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
          <h1 className="welcome-text">Good Morning, <span className="text-black fw-bold">Trojette</span></h1>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">

      
        <li className="nav-item">
          <form className="search-form" action="#">
            <i className="icon-search" />
            <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
          </form>
        </li>
 
   
        <li className="nav-item dropdown d-none d-lg-block user-dropdown">
          <Link  to='#' className="nav-link" id="UserDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
            <img className="img-xs rounded-circle" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="error" /> </Link>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
      
            <button  className="dropdown-item" onClick={props.logout}><i className="dropdown-item-icon mdi mdi-power text-primary me-2"  />Sign Out</button>
          </div>
        </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
        <span className="mdi mdi-menu" />
      </button>
    </div>
  </nav>  );
}
 
export default Navbar;