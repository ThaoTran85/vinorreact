import React from 'react'

const Share = () => {
  return (
    <section className="share section bd-container" id="share">
    <div className="share__container bd-grid">
      <div className="share__data">
        <h2 className="section-title-center">
          Sharing Is The Best Gift <br />
          You Can Give
        </h2>
        <p className="share__description">
          Sharing these holidays is the best gift you can give, give a
          present or share your love with the people you love the most and
          celebrate with great happiness.
        </p>
        <a href="#" className="button">Send a Gift</a>
      </div>
      <div className="share__img">
        <img src="assets/img/shared.png" alt="" />
      </div>
    </div>
  </section>
  )
}

export default Share