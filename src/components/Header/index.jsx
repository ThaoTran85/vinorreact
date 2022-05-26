import React from 'react'
import logo from '../../img/logo.png'
const Header = () => {
  return (
    <header className="l-header" id="header">
    <nav className="nav bd-container">
      <div>
      <a href="#" className="nav__logo">
        <img src={logo} alt=''/>
      </a>
      </div>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">Trang chủ</a>
          </li>
          <li className="nav__item">
            <a href="#share" className="nav__link">Về chúng tôi</a>
          </li>
          <li className="nav__item">
            <a href="#decoration" className="nav__link">Sản phẩm</a>
          </li>
          <li className="nav__item">
            <a href="#accessory" className="nav__link">Hồ sơ năng lực</a>
          </li>
          <li className="nav__item">
            <a href="#accessory" className="nav__link">Đội ngũ</a>
          </li>
          <li className="nav__item">
            <a href="#accessory" className="nav__link">Liên hệ</a>
          </li>

          <li><i className="bx bx-toggle-left change-theme" id="theme-button"></i></li>
        </ul>
      </div>

      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
  )
}

export default Header