import React, { useEffect, useState } from 'react'
import { data } from './data'
import './styles.css'
const Slide = () => {
    const [current, setCurrent] = useState(0)
    const length = data.length

    const handlePrevBtn = () => {
        setCurrent(current == 0 ? length - 1 : current - 1)

    }
    const handleNextBtn = () => {
        setCurrent(current == length - 1 ? 0 : current + 1)
    }
    setTimeout(() => {
        // setCurrent(prev => prev + 1)handleNextBtn
        handleNextBtn()
    }, 3000)

    console.log(current)
    return (
        <section className='products section bd-container' id='profile'>
               <h2 className='section-title'>Hồ sơ năng lực</h2>
            <div className='slide__container bd-container'>
                {/* <button onClick={handlePrevBtn}>Prev</button> */}
                {
                    data.map((item, index) =>
                        <div className={index == current ? 'slide__item active' : 'slide__item'} key={index}>
                            {
                                index == current &&
                                <img src={item} alt='' className='images' />
                            }
                        </div>)
                }
            </div>
        </section>

    )
}

export default Slide