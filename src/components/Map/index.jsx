import React from 'react'

const Map = () => {
  return (
    <section className='map section bd-container' id='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.160243470619!2d106.67697931505619!3d10.799036261728297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d7a839e4b3%3A0x4296396dc7eb4bb5!2zMzcgSG_DoG5nIFbEg24gVGjhu6UsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1651332414656!5m2!1sen!2s'
        loading='lazy'
        className="map__config"
      ></iframe>
    </section>
  )
}

export default Map