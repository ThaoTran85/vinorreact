import React from 'react'
import products from '../../img/products.webp'
const Products = () => {
  return (
    <section className='products section bd-container' id='product'>
    <h2 className='section-title'>sản phẩm</h2>
    <p className='products__description'>
      Chúng tôi cung các các giải pháp và dịch vụ phần mềm:
    </p>

    <div className='products__container bd-grid'>
      <img src={products} alt=''  />
    </div>
  </section>
  )
}

export default Products