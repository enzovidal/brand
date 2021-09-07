import React from 'react';
import imgtopTipografia from '../assets/img/topTipografia.png';
import imgTipografia from '../assets/img/tipografia.jpg';
import imgBotones from '../assets/img/botones.jpg';

export const Tipografia = () => {
  return (
    <div className='container'>
      <h1>Tipografía y Botones</h1>
      <h2>Bogle es nuestra fuente personalizada, inspirada por el Spark y lleva el nombre de uno de los primeros gerentes de tienda de Sam Walton. Es moderno, amigable y versátil.</h2>
      <p>
        <img src={imgtopTipografia} alt='Tipografía' className='img-fluid' />
      </p>
    </div>
  );
};

export const TipografiaOne = () => {
  return (
    <div className='container'>
      <h1>Tipografía y Botones</h1>
      <h2>Tipografía</h2>
      <p>Nuestras comunicaciones de marca utilizan tres pesos tipográficos: Bogle regular, Bogle medium y Bogle bold.</p>
      <p>
        <img src={imgTipografia} alt='Tipografía' className='img-fluid' />
      </p>
      <p className='text-center my-2'>
        <a href='#' className='lider-btn lider-btn--primary'>Descargar tipografías</a>
      </p>
    </div>
  );
};

export const TipografiaTwo = () => {
  return (
    <div className='container'>
      <h1>Tipografía y Botones</h1>
      <h2>Tamaños Tipográficos en Digital</h2>
      <p>El tamaño de fuente por defecto para el cuerpo de un publicación debe ser de 16px, pero para una landing, sitio web o aplicación prefiere utilizar su equivalencia en EM o REM para que el usuario pueda manipular los elementos del sitio desde su navegador.</p>
      <h3 className='mb-1'>Small Screens (0 - 899px)</h3>
      <table className='tableTipo'>

        <tr className='font-display-0'>
          <td className='col-50'>
            Display 0<br/>
            <div className='font-body'>
              <div>font-weight: bold;</div>
              <div>font-size: 42px;</div>
              <div>line-height: 52px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-display-1'>
          <td className='col-50'>
            Display 1<br/>
            <div className='font-body'>
              <div>font-weight: bold;</div>
              <div>font-size: 28px;</div>
              <div>line-height: 40px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-display-2'>
          <td className='col-50'>
            Display 2<br/>
            <div className='font-body'>
              <div>font-weight: bold;</div>
              <div>font-size: 24px;</div>
              <div>line-height: 36px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-title'>
          <td className='col-50'>
            Title<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 20px;</div>
            <div>line-height: 28px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-headline lg'>
          <td className='col-50'>
            Headline<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 18px;</div>
            <div>line-height: 24px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-subhead lg'>
          <td className='col-50'>
            Subhead<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 16px;</div>
            <div>line-height: 24px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-subhead-small lg'>
          <td className='col-50'>
            Subhead Small<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 14px;</div>
            <div>line-height: 20px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-body'>
          <td className='col-50'>
            Body<br/>
            <div className='font-body'>
            <div>font-weight: normal;</div>
            <div>font-size: 16px;</div>
            <div>line-height: 24px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.</td>
        </tr>

        <tr className='font-body-small'>
          <td className='col-50'>
            Body Small<br/>
            <div className='font-body'>
            <div>font-weight: normal;</div>
            <div>font-size: 14px;</div>
            <div>line-height: 20px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </td>
        </tr>

      </table>

      <hr />

      <h3 className='mb-1'>Large Screens (899px +)</h3>
      <table className='tableTipo'>

        <tr className='font-display-0 lg'>
          <td className='col-50'>
            Display 0<br/>
            <div className='font-body'>
              <div>font-weight: bold;</div>
              <div>font-size: 48px;</div>
              <div>line-height: 60px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-display-1 lg'>
          <td className='col-50'>
            Display 1<br/>
            <div className='font-body'>
              <div>font-weight: bold;</div>
              <div>font-size: 42px;</div>
              <div>line-height: 52px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-display-2 lg'>
          <td className='col-50'>
            Display 2<br/>
            <div className='font-body'>
              <div>font-weight: bold;</div>
              <div>font-size: 32px;</div>
              <div>line-height: 44px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-title'>
          <td className='col-50'>
            Title<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 24px;</div>
            <div>line-height: 36px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-headline lg'>
          <td className='col-50'>
            Headline<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 20px;</div>
            <div>line-height: 28px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-subhead lg'>
          <td className='col-50'>
            Subhead<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 18px;</div>
            <div>line-height: 24px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-subhead-small lg'>
          <td className='col-50'>
            Subhead Small<br/>
            <div className='font-body'>
            <div>font-weight: bold;</div>
            <div>font-size: 16px;</div>
            <div>line-height: 24px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.</td>
        </tr>

        <tr className='font-body'>
          <td className='col-50'>
            Body<br/>
            <div className='font-body'>
            <div>font-weight: normal;</div>
            <div>font-size: 16px;</div>
            <div>line-height: 24px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.</td>
        </tr>

        <tr className='font-body-small'>
          <td className='col-50'>
            Body Small<br/>
            <div className='font-body'>
            <div>font-weight: normal;</div>
            <div>font-size: 14px;</div>
            <div>line-height: 20px;</div>
            </div>
          </td>
          <td>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </td>
        </tr>

      </table>

    </div>
  );
};

export const TipografiaThree = () => {
  return (
    <div className='container'>
      <h1>Tipografía y Botones</h1>
      <h2>Botones</h2>
      <p>El uso del tamaño del botón es específico y no intercambiable. El lenguaje de la llamada a la acción debe ser breve y directo.</p>
      <p>El tamaño de la tipografía del botón es de 14px, pero para una landing, sitio web o aplicación prefiere utilizar su equivalencia en EM o REM (0.875) para que el usuario pueda manipular los elementos desde su navegador.</p>
      <p>El uso del color del botón está limitado a los colores que ve en esta página.</p>
      <p>La flecha CTA solo debe usarse en pequeñas comunicaciones digitales o para una navegación simple en Walmart.com.</p>
      <p>El contenedor del botón de llamada a la acción puede flexionarse para adaptarse a una copia más larga, pero debe conservar el mismo radio de esquina y, de lo contrario, no debe ajustarse ni modificarse.</p>
      <p>
        <img src={imgBotones} alt='Botones' className='img-fluid' />
      </p>
    </div>
  );
};