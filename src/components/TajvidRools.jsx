import React, { useState } from 'react';
import TajComponent from './TajComponent';
import baza from '../baza.json';
import arrowUp from '../img/arrowUp.png';

function TajvidRools() {

  const [value, setValue] = useState('')

  const filteredRools = baza.filter(rool => {
    return rool.roolName.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className='taj-wrapper'>
      <div className='bg-taj'>
        <div className="container">
          <form id='tr' className="search">
            <input 
              placeholder='search...'
              className='search__input'
              type="text"
              onChange={(e) => setValue(e.target.value)} />
          </form>
          <div className="taj-main">
              {filteredRools.map(item => (
                <TajComponent key={item.id} item = {item}/>  
              ))}
              <a href='#tr' className="arrUp"><img className='arrUpImg' src={arrowUp} alt="#" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TajvidRools;
