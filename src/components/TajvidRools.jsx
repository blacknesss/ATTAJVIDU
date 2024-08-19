import React from 'react';
import TajComponent from './TajComponent';
import baza from '../baza.json';
import arrowUp from '../img/arrowUp.png';

function TajvidRools() {

  return (
    <div className='taj-wrapper'>
      <div className='bg-taj bg-arabic'>
        <div className='container'>
          <div className='taj arabic'>
            <h1 id='tr'>Правила таджвида</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="taj-main">
          {baza.map(item => (
            <TajComponent key={item.id} item = {item}/>  
          ))}
          <a href='#tr' className="arrUp"><img className='arrUpImg' src={arrowUp} alt="#" /></a>
        </div>
      </div>
    </div>
  );
}

export default TajvidRools;
