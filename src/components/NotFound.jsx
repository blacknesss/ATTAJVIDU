import React from 'react';
import { Link } from 'react-router-dom';
import '../css/notFound.css';

const NotFound = () => {
  return (
    <div className='container'>
      <p className='notFoundP'>Ничего не найдено</p>
      <Link to='/' className='backto'>
        Вернуться
      </Link>
    </div>
  );
};

export { NotFound };