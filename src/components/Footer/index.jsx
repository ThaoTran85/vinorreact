import React from 'react'

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid bd-container">
        <div className="footer__content">
          <h3 className="footer__title">
            <a href="#" className="footer__logo" style={{ textTransform: 'uppercase' }}> Vinorsoft</a>
          </h3>
          <p className="footer__description">
            VINORSOFT là một doanh nghiệp trẻ, năng động, với một đội ngũ chuyên gia nhiệt tình, tâm huyết với công việc và có trình độ chuyên môn cao.
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Liên kết</h3>
          <ul>
            <li><a href="#" className="footer__link">Trang chủ</a></li>
            <li><a href="#" className="footer__link">Về chúng tôi</a></li>
            <li><a href="#" className="footer__link">Dịch vụ</a></li>
            <li><a href="#" className="footer__link">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="footer__link">Chính sách bảo mật</a></li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">contact us</h3>
          <ul>
            <li className='footer__description'>Địa chỉ: Số 115/30 Lê Quang Định
              Phường 14, quận Bình Thạnh
              Tp. Hồ Chí Minh.</li>
            <li className='footer__description'>Phone: (028)62715899</li>
            <li className='footer__description'>Email: support@vinorsoft.com</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Đăng ký nhận bản tin</h3>
          <p className='footer__description'>Hãy đăng ký email để cập nhật những công nghệ và chiến lược marketing mới từ chúng tôi!</p>
          <form className='footer__form'>
            <input></input>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <p className="footer__copy">&#169; 2021 All right reserve</p>
    </footer>
  )
}

export default Footer