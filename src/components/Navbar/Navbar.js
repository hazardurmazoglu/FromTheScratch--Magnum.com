import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import magnumlogo from "../../assets/img/magnum-logo.png";

const Navbar = () => {
  const [click,setClick] = useState(false);

  const handleClick= () => setClick(!click);

  const clickFalse =() => setClick(false)

  return (

    <nav >
      <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-upper">
          
          <div onClick={handleClick} className="navbar-item navbar-sidebar menu-toggle">
            <i className={click ? 'fas fa-times navbar-sidebar-logo' : 'fas fa-bars navbar-sidebar-logo'} ></i>
          </div>
          <div className="navbar-item " onClick={clickFalse}>
              <Link to="/">
              <img src={magnumlogo} alt="" className="navbar-logo"></img>
              </Link>
            
          </div>
          <div className="navbar-item " onClick={clickFalse}>
            <Link className="navbar-search">
              <i class="fas fa-search navbar-search-icon"></i>
              <span>ARAMA</span>
            </Link>
          </div>
        </div>
        <div className="navbar-container-down">
            <div className="navbar-item  dropdown">
                <Link className="navbar-title">ÜRÜNLER
                <i class="fas fa-angle-down navbar-icon" ></i>
                </Link>
                <div className="dropdown-content">
                    <Link className="navbar-subtitle">TÜMÜ</Link>
                    <Link className="navbar-subtitle">MAGNUM STICK</Link>
                    <Link className="navbar-subtitle">MAGNUM CUP</Link>
                    <Link className="navbar-subtitle">MAGNUM MİNİ</Link>
                    <Link className="navbar-subtitle">MAGNUM BITES</Link>
                    <Link className="navbar-subtitle">MAGNUM CRACK</Link>
                </div>
            </div>
            <div className="navbar-item">
                <Link className="navbar-title">KAMPANYALAR</Link>
            </div>
            <div className="navbar-item  dropdown">
                <Link className="navbar-title">HİKAYELER
                <i class="fas fa-angle-down navbar-icon"></i>
                </Link>
                <div className="dropdown-content">
                    <Link className="navbar-subtitle">HAZ DOLU TARİFLER</Link>
                    <Link className="navbar-subtitle">ÇİKOLATA HİKAYELERİ</Link>
                    <Link className="navbar-subtitle">MODA HİKAYELERİ</Link>
                    <Link className="navbar-subtitle">YAŞAM HİKAYELERİ</Link>
                </div>
            </div>
            <div className="navbar-item">
                <Link className="navbar-title">MAGNUM STORE</Link>
            </div>
            <div className="navbar-item">
                <Link className="navbar-title">PORSCHE KAMPANYASI</Link>
            </div>
        </div>
      </div>
      </div>
      
      <div className={click ? 'navbar--sidebar active' : 'navbar--sidebar passive' } >
      <div className='sidebar active'>
            <ul className="sidebar-menu-flex">
                <li className="sidebar-menu-item dropdown-sidebar">
                    <Link to="/" className="sidebar-menu-link" >ÜRÜNLER 
                    <i class="fas fa-angle-down sidebar-icon"></i>
                    </Link>
                    <div className="dropdown-content-sidebar" onClick={clickFalse}>
                        <Link className="sidebar-subtitle">TÜMÜ</Link>
                        <Link className="sidebar-subtitle">MAGNUM STICK</Link>
                        <Link className="sidebar-subtitle">MAGNUM CUP</Link>
                        <Link className="sidebar-subtitle">MAGNUM MİNİ</Link>
                        <Link className="sidebar-subtitle">MAGNUM BITES</Link>
                        <Link className="sidebar-subtitle">MAGNUM CRACK</Link>
                    </div>
                </li>
                <li className="sidebar-menu-item" onClick={clickFalse}>
                    <Link to="/" className="sidebar-menu-link">KAMPANYALAR</Link>
                </li>
                <li className="sidebar-menu-item dropdown-sidebar">
                    <Link to="/" className="sidebar-menu-link">HİKAYELER
                    <i class="fas fa-angle-down sidebar-icon"></i>
                    </Link>
                    <div className="dropdown-content-sidebar" onClick={clickFalse}>
                        <Link className="sidebar-subtitle">HAZ DOLU TARİFLER</Link>
                        <Link className="sidebar-subtitle">ÇİKOLATA HİKAYELERİ</Link>
                        <Link className="sidebar-subtitle">MODA HİKAYELERİ</Link>
                        <Link className="sidebar-subtitle">YAŞAM HİKAYELERİ</Link>
                    </div>
                </li>
                <li className="sidebar-menu-item" onClick={clickFalse}>
                    <Link to="/" className="sidebar-menu-link">MAGNUM STORE</Link>
                </li>
                <li className="sidebar-menu-item" onClick={clickFalse}>
                    <Link to="/" className="sidebar-menu-link">PORSCHE KAMPANYASI</Link>
                </li>
            </ul>
        </div>
      </div>
      
    </nav>
    
    
  );
};

export default Navbar;
