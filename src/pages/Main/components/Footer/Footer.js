import React from 'react';
import './css/Footer.css';

function Footer() {
  return(
    <div className='Footer'>
      <div className='Footer-inner'>
        <div className='Footer__box'>
          <div className='Footer__box_title'>Ветер</div>
          <div className='Footer__box_description'>5 м/c, западный</div>
        </div>
        <div className='Footer__box'>
          <div className='Footer__box_title'>Давление</div>
          <div className='Footer__box_description'>752 мм рт. ст.</div>
        </div>
        <div className='Footer__box'>
          <div className='Footer__box_title'>Влажность</div>
          <div className='Footer__box_description'>60%</div>
        </div>
        <div className='Footer__box'>
          <div className='Footer__box_title'>Вероятность дождя</div>
          <div className='Footer__box_description'>10%</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;