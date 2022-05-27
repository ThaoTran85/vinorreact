import React, { useState } from 'react'
import logo from '../../img/logo.png'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className="l-header" id="header">
    <nav className="nav bd-container">
      <div className='nav__logo'>
        <img src={logo} alt=''/>
      </div>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">Trang chủ</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">Về chúng tôi</a>
          </li>
          <li className="nav__item">
            <a href="#product" className="nav__link">Sản phẩm</a>
          </li>
          <li className="nav__item">
            <a href="#profile" className="nav__link">Hồ sơ năng lực</a>
          </li>
          <li className="nav__item">
            <a href="#customer" className="nav__link">Đội ngũ</a>
          </li>
          <li className="nav__item">
            <a href="#map" className="nav__link">Liên hệ</a>
          </li>
        </ul>
      </div>

      <div className="nav__toggle" id="nav-toggle" onClick={e=>setShowMenu(!showMenu)}>
        <i className="bx bx-grid-alt"></i>
      </div>

      <div className={`nav__menu__mobile ${showMenu ? 'active' : ''}`} id="nav-menu-mobile">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">Trang chủ</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">Về chúng tôi</a>
          </li>
          <li className="nav__item">
            <a href="#product" className="nav__link">Sản phẩm</a>
          </li>
          <li className="nav__item">
            <a href="#product" className="nav__link">Hồ sơ năng lực</a>
          </li>
          <li className="nav__item">
            <a href="#customer" className="nav__link">Đội ngũ</a>
          </li>
          <li className="nav__item">
            <a href="#map" className="nav__link">Liên hệ</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header