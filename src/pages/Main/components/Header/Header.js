
import React from 'react';
import './css/Header.css';


function Header() {

  
  return(
    <div className="Header-inner">
      <div className='Header__box-left'>
        <div className='Header__city'>Омск</div>
        <div className='Header__location'>
          <div className='Header__location_item'>
            Сменить город
          </div>
          <div className='Header__location_item'>
            Мое местоположение
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;