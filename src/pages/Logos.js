import React from 'react';

import logoLiderBrandbook from '../assets/img/logo-brandbook.png';
import logoLiderBuenasPracticas from '../assets/img/logo-lider-buenas-practicas.png';
import logoLiderSeguridad from '../assets/img/logo-lider-seguridad.png';

import logoLiderCLBrandbook from '../assets/img/logo-lidercl-brandbook.png';
import logoLiderCLBuenasPracticas from '../assets/img/logo-liderCL-buenas-practicas.png';
import logoLiderCLSeguridad from '../assets/img/logo-liderCL-seguridad.png';

import logoExpressBrandbook from '../assets/img/logo-express-brandbook.png';
import logoExpressBuenasPracticas from '../assets/img/logo-express-buenas-practicas.png';
import logoExpressSeguridad from '../assets/img/logo-express-seguridad.png';

import logoPickupBrandbook from '../assets/img/logo-pickup-brandbook.png';
import logoPickupTagline from '../assets/img/logo-pickup-tagline.png';

import logoSparkBrandbook from '../assets/img/logo-spark-brandbook.png';
import logosBrandbook from '../assets/img/logos-brandbook.png';

import preLiderBlue from '../assets/img/prev_Lider_spark_logo-digital-blue.png';
import preLiderTransparent from '../assets/img/prev_Lider_spark_logo-digital-alpha.png';
import preLiderWhite from '../assets/img/prev_Lider_spark_logo-digital-black-one-color.png';
import preLiderBlack from '../assets/img/prev_Lider_spark_logo-digital-white-one-color.png';
import preLiderOther from '../assets/img/prev_Lider_spark_logo-digital-other-colors.png';
import preLiderCLBlue from '../assets/img/prev_LiderCL_spark_logo-digital-blue.png';
import preLiderCLTransparent from '../assets/img/prev_LiderCL_spark_logo-digital-alpha.png';
import preLiderCLWhite from '../assets/img/prev_LiderCL_spark_logo-digital-black-one-color.png';
import preLiderCLBlack from '../assets/img/prev_LiderCL_spark_logo-digital-white-one-color.png';
import preLiderCLOther from '../assets/img/prev_LiderCL_spark_logo-digital-other-colors.png';
import preExpressBlue from '../assets/img/prev_Express_logo-digital-blue.png';
import preExpressTransparent from '../assets/img/prev_Express_logo-digital-alpha.png';
import preExpressWhite from '../assets/img/prev_Express_logo-digital-black-one-color.png';
import preExpressBlack from '../assets/img/prev_Express_logo-digital-white-one-color.png';
import prePickupOrange from '../assets/img/prev_Pickup_spark_logo-digital-orange.png';
import prePickupPuntoCompra from '../assets/img/prev_Pickup_punto_compra_logo-digital-orange.png';
import prePickupPuntoRetiro from '../assets/img/prev_Pickup_punto_retiro_logo-digital-orange.png';
import prePickupOther from '../assets/img/prev_Pickup_logo-digital-other_color.png';
import preDeliveryOther from '../assets/img/prev_Despacho_logo-digital-other_color.png';


import margenesSpark from '../assets/img/seguridad-spark.jpg';
import practicasSpark from '../assets/img/buenas-practicas-spark.jpg';

export const Logos = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2>Omnicanalidad</h2>
      <p>Cuando necesites aplicar todos los logos con sus canales de distribuci??n en una misma gr??fica, los ubicar??s con el siguiente orden: Express de Lider, Lider App, Lider.cl y Lider, y a continuaci??n en la parte inferior Despacho a tu casa, Pickup.</p>
      <img src={logosBrandbook} alt='aplicacion de colores' className='img-fluid' />

    </div>
  );
};

export const LogosOne = () => {
  return (
    <div className='container'> 

      <h1>Logos</h1>
      <h2>Lider</h2>
      <p>El logotipo Lider se construye a partir de dos elementos: <strong>el logo Lider y el Spark</strong> que contiene una R de marca registrada, la cual siempre tiene que estar presente.</p>
      <p>El logotipo se compone de dos colores Pantone, y tambi??n tienen sus equivalencias a CMYK(cuatricrom??a), para que lo uses en <strong>soportes impresos</strong> y la versi??n en RGB (pantalla) para <strong>soportes digitales</strong>.</p>
      <p><img src={logoLiderBrandbook} alt='aplicacion de colores' className='img-fluid' /></p>
      <ul>
        <li>Usa esta versi??n solo cuando el fondo sea blanco.</li>
        <li>Cuando necesites aplicar el logotipo sobre un fondo azul corporativo, tendr??s que elegir el Pantone 285 C, con sus letras en color blanco y Spark en Pantone amarillo 1235 C.</li>
      </ul>
      <p><strong>No modifiques ni intentes recrear estos elementos de ninguna manera. Utiliza siempre el logotipo aprobado.</strong></p>

      <h3 className='mb-1'>??rea de Seguridad</h3>
      <p>El ??rea de protecci??n es un espacio alrededor del logotipo que permite que quede libre de otros elementos gr??ficos. Gracias a esto aseguras la legibilidad del logotipo.</p>
      <p>Esta ??rea (letra r) define el resguardo del logotipo.</p>
      <p><img src={logoLiderSeguridad} alt='aplicacion de colores' className='img-fluid' /></p>

      <h3 className='mb-1'>Usos Incorrectos</h3>
      <p>El objetivo de restringir las aplicaciones incorrectas de la marca corporativa es lograr una coherencia en la comunicaci??n. Solo son correctas las aplicaciones que est??n expl??citamente en este manual, cualquier cambio de color, orientaci??n, proporci??n combinaci??n es incorrecta. Aqu?? te mostramos algunos ejemplos de cosas que no debes hacer:</p>
      <p><img src={logoLiderBuenasPracticas} alt='Buenas pr??cticas' className='img-fluid' /></p>
    
    </div>
  );
};

export const LogosTwo = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Lider.cl</h2>
      <p>El logotipo se compone de dos colores Pantone, y tambi??n tienen sus equivalencias a CMYK (cuatricrom??a), para que lo uses en <strong>soportes impresos</strong> y la versi??n en RGB (pantalla) para <strong>soportes digitales</strong>.</p>
      <p><img src={logoLiderCLBrandbook} alt='aplicacion de colores' className='img-fluid' /></p>
      <ul>
        <li>Usa esta versi??n solo cuando el fondo sea blanco.</li>
        <li>Cuando necesites aplicar el logotipo sobre un fondo azul corporativo, tendr??s que elegir el Pantone 285 C, con sus letras en color blanco y Spark en Pantone amarillo 1235 C.</li>
      </ul>
      <p><strong>No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</strong></p>
      
      <h3 className='mb-1'>??rea de Seguridad</h3>
      <p>El ??rea de protecci??n es un espacio alrededor del logotipo que permite que quede libre de otros elementos gr??ficos. Gracias a esto aseguras la legibilidad del logotipo.</p>
      <p>Esta ??rea (letra r) define el resguardo del logotipo.</p>
      <p><img src={logoLiderCLSeguridad} alt='aplicacion de colores' className='img-fluid' /></p>

      <h3 className='mb-1'>Usos Incorrectos</h3>
      <p>El objetivo de restringir las aplicaciones incorrectas de la marca corporativa es lograr una coherencia en la comunicaci??n. Solo son correctas las aplicaciones que est??n expl??citamente en este manual, cualquier cambio de color, orientaci??n, proporci??n combinaci??n es incorrecta. Aqu?? te mostramos algunos ejemplos de cosas que no debes hacer:</p>
      <p><img src={logoLiderCLBuenasPracticas} alt='Buenas pr??cticas' className='img-fluid' /></p>

    </div>
  );
};

export const LogosThree = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Express de Lider</h2>
      <p>El logotipo se compone de dos colores Pantone, y tambi??n tienen sus equivalencias a CMYK (cuatricrom??a), para que lo uses en <strong>soportes impresos</strong> y la versi??n en RGB (pantalla) para <strong>soportes digitales</strong>.</p>
      <p><img src={logoExpressBrandbook} alt='aplicacion de colores' className='img-fluid' /></p>
      <ul>
        <li>Usa esta versi??n solo cuando el fondo sea blanco.</li>
        <li>Cuando necesites aplicar el logotipo sobre un fondo azul corporativo, tendr??s que elegir el Pantone 285 C, con sus letras en color blanco y los Pantones correspondientes verde 375 C y cian 306 C.</li>
      </ul>
      <p><strong>No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</strong></p>
      
      
      <h3 className='mb-1'>??rea de Seguridad</h3>
      <p>El ??rea de protecci??n es un espacio alrededor del logotipo que permite que quede libre de otros elementos gr??ficos. Gracias a esto aseguras la legibilidad del logotipo.</p>
      <p>Esta ??rea (letra r) define el resguardo del logotipo.</p>
      <p><img src={logoExpressSeguridad} alt='aplicacion de colores' className='img-fluid' /></p>

      <h3 className='mb-1'>Usos Incorrectos</h3>
      <p>El objetivo de restringir las aplicaciones incorrectas de la marca corporativa es lograr una coherencia en la comunicaci??n. Solo son correctas las aplicaciones que est??n expl??citamente en este manual, cualquier cambio de color, orientaci??n, proporci??n combinaci??n es incorrecta. Aqu?? te mostramos algunos ejemplos de cosas que no debes hacer:</p>
      <p><img src={logoExpressBuenasPracticas} alt='Buenas pr??cticas' className='img-fluid' /></p>
    
    </div>
  );
};

export const LogosFour = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>    
      <h2 className='mt-2'>Pickup</h2>
      <p>El logotipo se compone de dos colores Pantone, y tambi??n tienen sus equivalencias a CMYK(cuatricrom??a), para que lo uses en <strong>soportes impresos</strong> y la versi??n en RGB (pantalla) para <strong>soportes digitales</strong>.</p>
      <p><img src={logoPickupBrandbook} alt='aplicacion de colores' className='img-fluid' /></p>
      <ul>
        <li>Usalo sobre el color Pantone 166 C, con sus letras en color blanco y Spark en Pantone amarillo 1235 C.</li>
      </ul>
      <p><strong>No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</strong></p>

      <h3 className='mb-1'>Logo con Tagline</h3>
      <p><img src={logoPickupTagline} alt='logo con tagline' className='img-fluid' /></p>

    </div>
  );
};

export const LogosFive = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Spark</h2>
      <ul>
        <li>El spark es nuestro ??cono, entrega la fuerza y la energ??a.</li>
        <li>Se usa principalmente en Amarillo, tambi??n se puede usar en azul o blanco, dependiendo del contexto y contraste. Debe ir acompa??ado de la R encerrada en un c??rculo.</li>
        <li>No se debe rotar, ni deformar, ni superponer.</li>
        <li>Est?? permitido usar medio Spark, para dar ??nfasis, jam??s como uso decorativo.</li>
      </ul>
      
      <p><strong>Cuando est??s trabajando una pieza preg??ntate, ?????suma????, si la respuesta es ???no???, entonces s??calo. Aseg??rate de que el spark o medio spark es un punto activo en la comunicaci??n.</strong></p>
      <p>
        <img src={logoSparkBrandbook} alt='aplicacion de colores' className='img-fluid' />
      </p>

      <h3 className='mb-1'>??rea de Seguridad</h3>
      <p>El ??rea de protecci??n es un espacio delimitado por m??rgenes en torno al logotipo que debe ser siempre respetado y quedar libre de otros elementos gr??ficos para asegurar la legibilidad del logotipo.</p>
      <p>Esta ??rea (x) la define el ancho de un elemento del Spark por todo el contorno del ??cono.</p>
      <p><img src={margenesSpark} alt='margenes spark' className='img-fluid' /></p>
      
      <h3 className='mb-1'>Usos Incorrectos</h3>
      <ul>
        <li>NO quites Sparklets sin aprobaci??n.</li>
        <li>NO uses un solo Sparklet.</li>
        <li>NO modifiques los bordes o la forma del Sparklet.</li>
      </ul>
      <p><img src={practicasSpark} alt='margenes spark' className='img-fluid' /></p>

    </div>
  );
};

export const LogosSix = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Descargas</h2>
      <p>Logotipos vectoriales digitales (archivos PDF RGB Adobe Illustrator)</p>
      <div className='row'>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderBlue} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-blue.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-blue.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-blue.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderTransparent} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-alpha.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-alpha.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-alpha.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderWhite} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-black-one-color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-black-one-color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-black-one-color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderBlack} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-white-one-color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-white-one-color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-white-one-color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderOther} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-other-colors.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-other-colors.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/lider/Lider_spark_logo-digital-other-colors.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className='row'>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderCLBlue} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-blue.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-blue.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-blue.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderCLTransparent} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-alpha.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-alpha.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-alpha.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderCLWhite} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-black-one-color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-black-one-color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-black-one-color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderCLBlack} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-white-one-color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-white-one-color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-white-one-color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preLiderCLOther} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-other-colors.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-other-colors.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/liderCL/LiderCL_spark_logo-digital-other-colors.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className='row'>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preExpressBlue} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-blue.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-alpha.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-alpha.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preExpressTransparent} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-alpha.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-alpha.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-alpha.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preExpressWhite} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-black-one-color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-black-one-color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-black-one-color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preExpressBlack} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-white-one-color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-white-one-color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/express/Express_logo-digital-white-one-color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className='row'>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={prePickupOrange} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_spark_logo-digital-orange.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_spark_logo-digital-orange.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_spark_logo-digital-orange.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={prePickupPuntoRetiro} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_punto_retiro_logo-digital-orange.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_punto_retiro_logo-digital-orange.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_punto_retiro_logo-digital-orange.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={prePickupPuntoCompra} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_punto_compra_logo-digital-orange.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_punto_compra_logo-digital-orange.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_punto_compra_logo-digital-orange.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={prePickupOther} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_logo-digital-other_color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_logo-digital-other_color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Pickup_logo-digital-other_color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

        <div className='col col-20'>
          <div className='card download bg-gray'>
            <div>
              <img src={preDeliveryOther} className='img-fluid' alt='Vista previa logo lider' />
            </div>
            <ul>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Despacho_logo-digital-other_color.pdf%5D&sink=format%5Bpdf%5D' target='_blank' rel="noreferrer" className='btn-download'>PDF</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Despacho_logo-digital-other_color.svg%5D&sink=format%5Bsvg%5D' target='_blank' rel="noreferrer" className='btn-download'>SVG</a></li>
              <li><a href='https://images.lider.cl/wmtcl?source=url%5Bfile:/brandbook/digital/servicios/Despacho_logo-digital-other_color.png%5D&sink=format%5Bpng%5D' target='_blank' rel="noreferrer">PNG</a></li>
            </ul>
          </div>
        </div>

      </div>


    </div>
  );
};