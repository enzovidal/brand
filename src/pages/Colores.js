import React from 'react';
import referenciaColor from '../assets/img/colores.png';
import aplicacionColor from '../assets/img/aplicacion-colores.png';

export const Colores = () => {
  return (
    <div className='container'>
      <h1>Colores</h1>
      <h2>Walmart Blue es la clave de nuestra marca. Úsalo junto al blanco y al Spark Yellow. Estos son los colores definitivos que componen nuestra paleta de colores primarios y deben usarse siempre que sea posible.</h2>
      <img src={referenciaColor} alt='aplicacion de colores' className='img-fluid' />
    </div>
  );
};

export const ColoresOne = () => {
  return (
    <div className='container'>
      <h1>Colores</h1>
      <h2>Colores Primarios</h2>
      <p>
        Nuestro logo esta compuesto por los colores azul, blanco y amarillo. Walmart Blue es el color principal que debe aplicarse en todas las comunicaciones para mantener la coherencia de la marca.
      </p>
      <ul>
        <li>Para medios digitales, utiliza solo el azul digital en modo RGB para adaptarse a las necesidades de legibilidad.</li>
        <li>El blanco complementa al azul digital y es un color de fondo o un color tipográfico.</li>
        <li>Spark Yellow debe usarse como color de acento, siempre y cuando su color de fondo sea el azul digital de walmart.</li>
      </ul>
      <div className='mt-2'>
        <div className='row'>

          <div className='col col-20'>
            <div className='card'>
              <div className='color bg-blue'>
                <div>#0071DC</div>
                <div><strong>CMYK</strong> 100,45,0,0</div>
                <div><strong>PMS</strong> 285 C</div>
              </div>
              <p>Walmart Blue</p>
            </div>
          </div>

          <div className='col col-20'>
            <div className='card'>
              <div className='color bg-white'>
                <div>#FFFFFF</div>
                <div><strong>CMYK</strong> 0,0,0,0</div>
              </div>
              <p>White</p>
            </div>
          </div>

          <div className='col col-20'>
            <div className='card'>
              <div className='color bg-yellow'>
                <div>#FFC220</div>
                <div><strong>CMYK</strong> 0,25,100,0</div>
                <div><strong>PMS</strong> 1235 C</div>
              </div>
              <p>Spark Yellow</p>
            </div>
          </div>

        </div>
      </div>

      <h2>Color Complementario</h2>
      <p>
        Cuando los colores primarios aplicados a la tipografía fallan en legibilidad y cumplimiento, use Ozark Noir.
      </p>
      <div className='mt-2'>
        <div className='row'>

          <div className='col col-20'>
            <div className='card'>
              <div className='color bg-darkblue'>
                <div>#041E42</div>
                <div><strong>CMYK</strong> 100,88,42,51</div>
                <div><strong>PMS</strong> 282 C</div>
              </div>
              <p>Ozark Noir</p>
            </div>
          </div>

        </div>
      </div>

      <h2>Servicios/Promociones</h2>
      <p>
        Estos colores están asociados con los servicios: Pickup (Orange) y Liquidación (Yellow). Los colores exclusivos no deben separarse más allá de su propósito específico y deben aplicarse de manera consistente.
      </p>
      <div className='mt-2'>
        <div className='row'>

        <div className='col col-20'>
            <div className='card'>
              <div className='color bg-orange'>
                <div>#FA6400</div>
                <div><strong>CMYK</strong> 0,68,100,0</div>
                <div><strong>PMS</strong> 185 C</div>
              </div>
              <p>Orange: Pickup</p>
            </div>
          </div>

          <div className='col col-20'>
            <div className='card'>
              <div className='color bg-lightyellow'>
                <div>#FFF200</div>
                <div><strong>CMYK</strong> 0,0,100,0</div>
              </div>
              <p>Yellow: Liquidación</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const ColoresTwo = () => {
  return (
    <div className='container'>
      <h1>Colores</h1>
      <h2>Accesibilidad / Legibilidad</h2>
      <p>
      Nuestras paletas de colores y combinaciones que se muestran aquí cumplen con las pautas de la accesibilidad y legibilidad en la web. Todas las variaciones mostradas pasan las guías de nivel AA de WCAG 2.0.
      </p>
      <ul>
        <li>
        El nivel AA requiere una relación de contraste de al menos 4.5:1 para texto normal y 3:1 para texto grande, y una relación de contraste de al menos 3:1 para gráficos y componentes de interfaz de usuario (como bordes de entrada de formularios).
        </li>
        <li>
        El texto grande se define como 14 puntos (normalmente 18,66 píxeles) y negrita o más grande, o 18 puntos (normalmente 24 píxeles) o más.
        </li>
      </ul>
      <p>
        <img src={aplicacionColor} alt='aplicacion de colores' className='img-fluid' />
      </p>
    </div>
  );
};

export const ColoresThree = () => {
  return (
    <div className='container'>
      <h1>Colores</h1>
      <h2>Buenas prácticas</h2>
      <ul>
        <li>NO utilice el azul digital para impresión.</li>
        <li>NO use colores secundarios en los titulares.</li>
        <li>NO use variantes de los colores primarios.</li>
        <li>NO agregue texturas al azul.</li>
        <li>NO aplique colores digitales que no cumplan con la ADA.</li>
        <li>El amarillo Spark nunca debe usarse como color de fondo.</li>
      </ul>
    </div>
  );
};
