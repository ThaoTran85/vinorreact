import React from 'react'

const Accessories = () => {
  return (
    <section className="accessory section bd-container" id="accessory">
    <h2 className="section-title">
      Sản phẩm
    </h2>

    <div className="accessory__container bd-grid">
      <div className="accessory__content">
          <div className="accessory__img">
              <img src="assets/img/accessory1.png" alt="" />
          </div>
        <h3 className="accessory__title">Phần mềm trưng bày kiosk</h3>
        <span className="accessory__category">Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng</span>
      </div>

      <div className="accessory__content">
        <div className="accessory__img">
            <img src="assets/img/accessory2.png" alt="" />
        </div>
        <h3 className="accessory__title">Quản lý thẩm định giá</h3>
        <span className="accessory__category">Giải pháp toàn diện cho doanh nghiệp lĩnh vực thẩm định</span>
      </div>

      <div className="accessory__content">
        <div className="accessory__img">
            <img src="assets/img/accessory3.png" alt="" />
        </div>
        <h3 className="accessory__title">Quản lý thu phạt ngành thuế</h3>
        <span className="accessory__category">Lập giấy mời, biên bản, thông báo, quyết định thu phạt ngành thuế</span>
      </div>

      <div className="accessory__content">
        <div className="accessory__img">
            <img src="assets/img/accessory4.png" alt="" />
        </div>
        <h3 className="accessory__title">Ứng dụng đặt hàng cho SPA</h3>
        <span className="accessory__category">Giải pháp tạo ,quản lý đơn hàng, in đơn hàng cho spa sử dụng điện thoại</span>
      </div>

      <div className="accessory__content">
        <div className="accessory__img">
            <img src="assets/img/accessory5.png" alt="" />
        </div>
        <h3 className="accessory__title">Quản lý gia phả</h3>
        <span className="accessory__category">Quản lý thông tin gia phả, trưng bày gia phả bằng gương thông minh</span>
      </div>
      <div className="accessory__content">
        <div className="accessory__img">
            <img src="assets/img/accessory5.png" alt="" />
        </div>
        <h3 className="accessory__title">Quản lý khách sạn</h3>
        <span className="accessory__category">Cung cấp các giải pháp quản lý khách sạn web và mobile</span>
      </div>
    </div>
  </section>
  )
}

export default Accessories