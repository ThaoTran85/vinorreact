import React from 'react'
import home2 from '../../img/home2.png'
const Home = () => {
  return (
    <section className="home" id="home">
    <div className="home__container bd-container bd-grid">
      {/* <div className="home__img">
        <img src={home2} alt="" />
      </div> */}

      <div className="home__data">
        <h1 className="home__title">Giải pháp công nghệ vì <br /> <span>con người</span></h1>
        <p className="home__description">
        "Luôn tận tâm, luôn trung thực, luôn gắn kết"
        </p>
        <a href="#" className="button">Về chúng tôi</a>
      </div>
    </div>
  </section>
  )
}

export default Home