import React from 'react';

import facebook from '../../assets/images/facebook.png';
import './styles.css';

export default function Header() {
  return (
    <div className='header-container'>
      <img className='facebook' src={facebook} alt='Facebook' />
      <p className='perfil'>Meu perfil</p>
    </div>
  );
}
