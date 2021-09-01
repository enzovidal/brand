import React from 'react';
import imgResearch from '../assets/img/research.png';
import imgShop from '../assets/img/shop.png';
import imgCare from '../assets/img/care.png';

export const Voz = () => {
  return (
    <div className='container'>
      <h1>Voz y Tono</h1>
      <h2>Nuestros principios son nuestra estrategia. Antes de diseñar o escribir recuerda</h2>
      <ul className='voz'>
        <li>
          <h3>Ahorrar dinero</h3>
          <h4 className='text-blue'>Se inteligente.</h4>
          <p>No expliques demasiado ni uses jerga.</p>
        </li>
        <li>
          <h3>Ahorrar tiempo</h3>
          <h4 className='text-blue'>Se simple.</h4>
          <p>Se conciso, claro, y descriptivo.</p>
        </li>
        <li>
          <h3>Vive mejor</h3>
          <h4 className='text-blue'>Se humano.</h4>
          <p>Habla como una persona, no una empresa.</p>
        </li>
      </ul>

      <h2>Principios Básicos</h2>
      <ul className='voz'>
        <li>
          <h3>Fácil de entender</h3>
          <p>Utiliza un lenguaje sencillo y directo.</p>
        </li>
        <li>
          <h3>Reducir la complejidad:</h3>
          <p>Si tienes que pensarlo, no está lo suficientemente claro.</p>
        </li>
      </ul>

    </div>
  );
};

export const VozViaje = () => {
  return (
    <div className='container'>
      <h1>Voz y Tono</h1>
      <h2>¿Cómo debemos hablar en cada etapa de la compra?</h2>

      <h3>1. Research</h3>
      <div>
        <p>Es muy importante poder ser entusiastas, accesibles y cercanos; para dar a entender al usuario que estamos ahí para ayudarlo en lo que necesite y ofrecerle los mejores productos, precios y servicios: se crean promesas de Líder, como un lugar donde puede ahorrar tiempo y dinero.</p>
        <p>En esta etapa, debemos transmitir que siempre estaremos felices de que vuelvas a tu lugar de siempre, sin importar quien seas.</p>
        <p>El mood de la comunicación de Lider en esta etapa del viaje debe demostrar que estamos agradecidos de que el usuario haya elegido Lider, siendo cálido, sencillo, y perceptivo a las realidades de nuestros usuarios, que son muchas y todas distintas unas de otras. Queremos poder llegar a tu vida y entender tus necesidades y poder satisfacerlas.</p>
        <p>Es necesario que consideremos el uso de palabras/imágenes que evoquen las características del mood de Lider  y que nos muestren acogedores, entusiastas, accesibles, cercanos, cálidos y sencillos.</p>
        <p>
        <img src={imgResearch} alt='aplicacion de colores' className='img-fluid' />
        </p>
      </div>

      <h3>2. Shop</h3>
      <div>
        <p>La marca debe mostrarse como un lugar donde el cliente puede ver cumplidas sus expectativas de compra; donde podrá encontrar todo lo que necesita y a buen precio, siempre teniendo ganas de volver a volver a verte o recibirte.</p>
        <p>El mood que debe adoptar Lider es el de alguien transparente, sincero, confiable, verídico y leal; de manera que nuestros usuarios lo vean reflejado en una experiencia de compra rápida y económica, donde existe una preocupación humana y la experiencia no está limitada a lo puramente transaccional.</p>
        <p>
        <img src={imgShop} alt='aplicacion de colores' className='img-fluid' />
        </p>
      </div>

      <h3>3. Care</h3>
      <div>
        <p>Esta etapa es una de las más importantes del viaje del usuario, ya que es donde estos deben percibir que Lider reafirma su compromiso con ellos. Acá, es crucial que las personas sientan que las promesas ofrecidas por Lider, respecto de su experiencia de compra, son efectivas y que además tiene cierre del proceso de compra, que es satisfactorio e incluso mejor de lo que esperaban, ello si nos ubicamos en la situación de que un usuario tenga un viaje sin contratiempos. </p>
        <p>Sin embargo, también puede ocurrir que este resulte ser un momento del viaje en el que nos encontremos con problemas o situaciones críticas (errores de productos en los pedidos, productos en mal estado, demoras excesivas de despacho, etc), por lo que los usuarios experimentarán frustraciones, decepciones e incluso enojo hacia la marca y sus colaboradores. En ese sentido, las personas necesitan ver que, como buen amigo, Lider siente genuinamente que debe pedir una disculpa y enmendar su error.</p>
        <p>Acá debe primar un mood contenedor, donde Lider atiende, comprende y resuelve aquello que esté pasando. Es en este momento donde la empatía toma más importancia que nunca porque se trata de una instancia especialmente difícil del viaje del usuario.</p>
        <p>
        <img src={imgCare} alt='aplicacion de colores' className='img-fluid' />
        </p>
      </div>
      

    </div>
  );
};