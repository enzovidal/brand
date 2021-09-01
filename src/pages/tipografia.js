import React from 'react';
import imgTipografia from '../assets/img/tipografia.jpg';

export const Tipografia = () => {
  return (
    <div className='container'>
      <h1>Tipografía y Botones</h1>
      <h2>Bogle es nuestra fuente personalizada, inspirada por el Spark y lleva el nombre de uno de los primeros gerentes de tienda de Sam Walton. Es moderno, amigable y versátil.</h2>
      <p>
        <img src={imgTipografia} alt='Tipografía' className='img-fluid' />
      </p>
    </div>
  );
};

export const TipografiaOne = () => {
  return (
    <div className='container'>
      <h1>Tipografía y Botones</h1>
      <h2>Buenas Prácticas</h2>

    </div>
  );
};