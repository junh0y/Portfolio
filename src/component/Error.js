import React from 'react'
import '../public/css/Error.css';
import { Link } from 'react-router-dom';

export default function Error({ systemText }) {
  let locale = document.documentElement.lang;
  let text = systemText[locale];

    return (
        <div className='error'>
          <div>
            <p>404</p>
            <Link to='/'>{ text.goToTheSite }</Link>
          </div>
        </div>
    ) 
}