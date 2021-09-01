import React from 'react';
import imgTipografia from '../assets/img/tipografia.jpg';

export const Recursos = () => {
  return (
    <div className='container'>
      <h1>Recursos</h1>
      <h2>Bogle es nuestra fuente personalizada, inspirada por el Spark y lleva el nombre de uno de los primeros gerentes de tienda de Sam Walton. Es moderno, amigable y versátil.</h2>
      <p>
        <img src={imgTipografia} alt='Tipografía' className='img-fluid' />
      </p>
    </div>
  );
};

export const RecursosOne = () => {
  return (
    <div className='container'>
      <h1>Recursos</h1>
      <h2>Supermercado</h2>

    </div>
  );
};

export const RecursosTwo = () => {
  return (
    <div className='container'>
      <h1>Recursos</h1>
      <h2>Catálogo</h2>

    </div>
  );
};

export const RecursosThree = () => {
  return (
    <div className='container'>
      <h1>Recursos</h1>
      <h2>Mail</h2>

    </div>
  );
};