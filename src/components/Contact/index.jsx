import React from 'react'

const Contact = () => {
  return (
    <section className='contact section bd-container' id='contact'>
      <h2 className='section__title'>Liên hệ</h2>
      <p className='section__description'>
        Quy tụ đội ngũ chuyên gia giàu kinh nghiệm luôn cập nhật những xu hướng
        công nghệ mới
      </p>
      <div className='contact__container bd-grid'>
        <div className='contact__data'>
          <div className='contact__info'>
            <ion-icon name='locate' className='contact__icon'></ion-icon>
            <p>
              Số 115/30 Lê Quang Định, phường 14, quận Bình Thạnh, Tp. Hồ Chí
              Minh.
            </p>
          </div>
          <div className='contact__info'>
            <ion-icon name='mail-outline' className='contact__icon'></ion-icon>
            <p>Email:support@vinorsoft.com</p>
          </div>
          <div className='contact__info'>
            <ion-icon name='call-outline' className='contact__icon'></ion-icon>
            <p>Phone: (028) 62715899</p>
          </div>
        </div>
        <div className='contact__form'>
          <form className='formContent'>
            <div className='formItemWrap'>
              <div className='formItem'>
                <input name='name' placeholder='Họ tên' type='text' required />
              </div>
              <div className='formItem'>
                <input name='email' type='email' required placeholder='Email' />
              </div>
            </div>
            <input name='title' type='text' placeholder='Tiêu đề' required />
            <textarea name='content' placeholder='Nội dung' required></textarea>
            <button className='submitBtn'>Gửi</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact