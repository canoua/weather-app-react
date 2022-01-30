import React from 'react';
import './css/Content.css';
import ContentImages from './components/ContentImages';

function Content() {
  return(
    <div className='Content'>
      <div className='Content-inner'>
        <ContentImages/>
        <div className='Content__box'>
          <div className='Content__title'>
            19º
          </div>
        </div>
      </div>
      <div className='Content__info'>Преимущественно солнечно</div>
    </div>
  )
}

export default Content;