import React from 'react'
import doitac from '../../img/doitac.png'
const Customer = () => {
  return (
    <section className='profile section bd-container' id='customer'>
    <h2 className='section-title'>Khách hàng, đối tác</h2>
    <div className='profile__container bd-grid'>
        <img src={doitac} alt='' className="imageConfig" />
    </div>
</section>
  )
}

export default Customer