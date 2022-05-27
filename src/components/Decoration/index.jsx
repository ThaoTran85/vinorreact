import React from 'react'
import about from '../../img/about-img.svg'
import about2 from '../../img/about-extra-1.svg'
import about3 from '../../img/about-extra-2.svg'
const Decoration = () => {
  return (
    <section className="decoration section bd-container" id="about">
      <h2 className="section-title">
        Về chúng tôi
      </h2>
      <p className='decoration__description' style={{ textAlign: 'center', marginBottom: '40px' }}>CÔNG TY CỔ PHẦN CÔNG NGHỆ VINORSOFT</p>

      <div className="decoration__container bd-grid">
        <div className="decoration__data">
          <img src={about} alt="" className='decoration__img'/>
          <h3 className="decoration__title">Ý tưởng</h3>
          <p className='decoration__description'>Vinorsoft bắt đầu từ ý tưởng tạo một cuộc cách mạng trong việc kết hợp các giải pháp công nghệ thông tin và viễn thông để ứng dụng vào việc xây dựng hệ thống cho doanh nghiệp. Với phương châm “Luôn tận tâm, luôn trung thực, luôn gắn kết”, Vinorsoft cam kết đưa đến khách hàng các giải pháp hàng đầu, chất lượng và tiết kiệm nhất.</p>
        </div>

        <div className="decoration__data">
          <div className='decoration__img'>
          <img src={about2} alt="" />
          </div>
          <h3 className="decoration__title">Tầm nhìn</h3>
          <p className='decoration__description'>Trở thành một Đối tác tin cậy của tất cả các doanh nghiệp/tổ chức trong việc Cung cấp các dịch vụ liên quan tới Sản xuất Phần mềm và Giải pháp Công nghệ Thông tin, dựa trên nền tảng hợp tác vững mạnh, lâu dài và bền vững.</p>
          <p className='decoration__description'>Chúng tôi luôn mong muốn gắn liền lợi ích của Tập thể với lợi ích Cá nhân, gắn liền lợi ích của Công ty với lợi ích của Khách hàng.</p>
        </div>

        <div className="decoration__data">
          <img src={about3} alt="" className='decoration__img' />
          <h3 className="decoration__title">Sứ mệnh</h3>
          <p className='decoration__description'>Phát triển các Giải pháp Phần mềm tổng thể giúp cho công việc kinh doanh của mọi Doanh nghiệp, cá nhân trở nên Dễ dàng và Hiệu quả hơn.</p>
          <p className='decoration__description'>Xây dựng môi trường làm việc chuyên nghiệp, sáng tạo và nhân văn. Tạo điều kiện và cơ hội phát triển công bằng cho tất cả nhân viên.</p>
          <p className='decoration__description'>Đồng hành phát triển, từng bước hiện đại hoá công tác quản lý vận hành của các Doanh nghiệp tiến tới nền công nghiệp 4.0</p>
        </div>
      </div>
    </section>
  )
}

export default Decoration