import React from 'react';
import './css/Header.css';
import HeaderImages from './components/HeaderImages';

function Header() {
  return(
    <header className='Header'>
      <div className="Header-inner">
        <div className='Header__box-left'>
          <div className='Header__city'>Омск</div>
          <div className='Header__location'>
            <div className='Header__location_item'>
              Сменить город
            </div>
            <div className='Header__location_item'>
              <HeaderImages/>
              Мое местоположение
            </div>
          </div>
        </div>
        <div className='Header__box-right'>
          <div className='Header__scale'>
            <div className='Header__scale_item active'>c</div>
            <div className='Header__scale_item'>f</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;