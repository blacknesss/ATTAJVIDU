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
            <svg className='search__icon' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg>
            <input
              value={value}
              placeholder='search...'
              className='search__input'
              type="text"
              onChange={(e) => setValue(e.target.value)} />
            {value && (<svg onClick={() => setValue('')} className='search__close' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>)}
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
