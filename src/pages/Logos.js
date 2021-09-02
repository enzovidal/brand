import React from 'react';
import logoLiderBrandbook from '../assets/img/logo-brandbook.png';
import logoLiderCLBrandbook from '../assets/img/logo-lidercl-brandbook.png';
import logoExpressBrandbook from '../assets/img/logo-express-brandbook.png';
import logoPickupBrandbook from '../assets/img/logo-pickup-brandbook.png';
import logoSparkBrandbook from '../assets/img/logo-spark-brandbook.png';
import logosBrandbook from '../assets/img/logos-brandbook.png';
import preLiderBlue from '../assets/img/prev_Lider_spark_logo-digital-blue.png';
import preLiderTransparent from '../assets/img/prev_Lider_spark_logo-digital-alpha.png';
import preLiderWhite from '../assets/img/prev_Lider_spark_logo-digital-black-one-color.png';
import preLiderBlack from '../assets/img/prev_Lider_spark_logo-digital-white-one-color.png';
import preLiderOther from '../assets/img/prev_Lider_spark_logo-digital-other-colors.png';
import margenesSpark from '../assets/img/seguridad-spark.jpg';
import practicasSpark from '../assets/img/buenas-practicas-spark.jpg';

export const Logos = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2>Omnicanalidad</h2>
      <p>Cuando necesites aplicar todos los logos con sus canales de distribución en una misma gráfica, los ubicarás con el siguiente orden: Lider, Express y Lider.cl Lider App y a continuación en la parte inferior Despacho a tu casa, Pickup.</p>
      <img src={logosBrandbook} alt='aplicacion de colores' className='img-fluid' />

    </div>
  );
};

export const LogosOne = () => {
  return (
    <div className='container'> 

      <h1>Logos</h1>
      <h2>Lider</h2>
      <p>El logotipo Lider se construye a partir de dos elementos: el logo Lider y el Spark que contiene una R de marca registrada, la cual siempre tiene que estar presente.</p>
      <p>El logotipo se compone de dos colores Pantone, y también tienen sus equivalencias a CMYK(cuatricromía), para que lo uses en soportes impresos y la versión en RGB (pantalla) para soportes digitales.</p>
      <ul>
        <li>Usa esta versión solo cuando el fondo sea blanco.</li>
        <li>Cuando necesites aplicar el logotipo sobre un fondo azul corporativo, tendrás que elegir el Pantone 285 C, con sus letras en color blanco y Spark en Pantone amarillo 1235 C.</li>
      </ul>
      <p><strong>Nota:</strong> No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</p>
      <img src={logoLiderBrandbook} alt='aplicacion de colores' className='img-fluid' />

    </div>
  );
};

export const LogosTwo = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Lider.cl</h2>
      <p>El logotipo se compone de dos colores Pantone, y también tienen sus equivalencias a CMYK (cuatricromía), para que lo uses en soportes impresos y la versión en RGB (pantalla) para soportes digitales.</p>
      <ul>
        <li>Usa esta versión solo cuando el fondo sea blanco.</li>
        <li>Cuando necesites aplicar el logotipo sobre un fondo azul corporativo, tendrás que elegir el Pantone 285 C, con sus letras en color blanco y Spark en Pantone amarillo 1235 C.</li>
      </ul>
      <p><strong>Nota:</strong> No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</p>
      <img src={logoLiderCLBrandbook} alt='aplicacion de colores' className='img-fluid' />

    </div>
  );
};

export const LogosThree = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Express de Lider</h2>
      <p>El logotipo se compone de dos colores Pantone, y también tienen sus equivalencias a CMYK (cuatricromía), para que lo uses en soportes impresos y la versión en RGB (pantalla) para soportes digitales.</p>
      <ul>
        <li>Usa esta versión solo cuando el fondo sea blanco.</li>
        <li>Cuando necesites aplicar el logotipo sobre un fondo azul corporativo, tendrás que elegir el Pantone 285 C, con sus letras en color blanco y los Pantones correspondientes verde 375 C y cian 306 C.</li>
      </ul>
      <p><strong>Nota:</strong> No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</p>
      <img src={logoExpressBrandbook} alt='aplicacion de colores' className='img-fluid' />
    
    </div>
  );
};

export const LogosFour = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>    
      <h2 className='mt-2'>Pickup</h2>
      <p>El logotipo se compone de dos colores Pantone, y también tienen sus equivalencias a CMYK(cuatricromía), para que lo uses en soportes impresos y la versión en RGB (pantalla) para soportes digitales.</p>
      <ul>
        <li>Usalo solo sobre el color Pantone 185 C, con sus letras en color blanco y Spark en Pantone amarillo 1235 C.</li>
      </ul>
      <p><strong>Nota:</strong> No modifique ni intente recrear estos elementos de ninguna manera. Utilice siempre el logotipo aprobado.</p>
      <img src={logoPickupBrandbook} alt='aplicacion de colores' className='img-fluid' />

    </div>
  );
};

export const LogosFive = () => {
  return (
    <div className='container'>

      <h1>Logos</h1>
      <h2 className='mt-2'>Spark</h2>
      <p>El spark es nuestro ícono, entrega la fuerza y la energía.</p>
      <p>Se usa principalmente en Amarillo, también se puede usar en azul o blanco, dependiendo del contexto y contraste. Debe ir acompañado de la R encerrada en un círculo.</p>
      <p>No se debe rotar, ni deformar, ni superponer.</p>
      <p>Está permitido usar medio Spark, para dar énfasis, jamás como uso decorativo.</p>
      <p><strong>Conclusión:</strong> Cuando estés trabajando una pieza pregúntate, “¿suma?”, si la respuesta es “no”, entonces sácalo. Asegúrate de que el spark o medio spark es un punto activo en la comunicación.</p>
      <p>
        <img src={logoSparkBrandbook} alt='aplicacion de colores' className='img-fluid' />
      </p>

      <h3>Área de Seguridad</h3>
      <p>El área de protección es un espacio delimitado por márgenes en torno al logotipo que debe ser siempre respetado y quedar libre de otros elementos gráficos para asegurar la legibilidad del logotipo.</p>
      <p>Esta área (x) la define el ancho de un elemento del Spark por todo el contorno del ícono.</p>
      <p><img src={margenesSpark} alt='margenes spark' className='img-fluid' /></p>
      
      <h3>Buenas Prácticas</h3>
      <ul>
        <li>NO quites Sparklets sin aprobación.</li>
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

    </div>
  );
};