import React from 'react';
import Colaboradores from '../assets/img/colaboradores.jpg'
import imgOmni from '../assets/img/fotoOmnicanal.jpg'
import LogoLider from '../assets/img/Lider_spark_logo-digital-alpha.png'
import LogoExpress from '../assets/img/Express_logo-digital-alpha.png'
import LogoLiderCL from '../assets/img/LiderCL_spark_logo-digital-alpha.png'

export const Home = () => {
  return (
    <div className='container'>
      <h1>Principios y pautas de identidad de la marca</h1>
      <h2>Lo que nos inspira</h2>
      <h3 className="cite mb-1">"Si trabajamos juntos, reduciremos el costo de vida para todos ... le daremos al mundo una oportunidad para ver cómo es ahorrar y tener una vida mejor"</h3>
      <h3 className='text-blue text-right'>Sam Walton <br />Fundador Walmart</h3>
      <p className='mt-2'>
        <img src={imgOmni} alt='Omnicanalidad' className='img-fluid' />
      </p>
    </div>
  );
};

export const HomeOne = () => {
  return (
    <div className='container'>
      <h1>Principios y pautas de identidad de la marca</h1>
      <h2>¿Que nos mueve?</h2>
        <p>
          Facilitar la vida de nuestros clientes, <strong>ahorrándoles tiempo y dinero</strong>, acompañándolos sin importar dónde viven o el medio por el cuál prefieren comprar, para ayudarlos a vivir mejor, es nuestro propósito fundamental.
        </p>
        <p>
        <img src={Colaboradores} alt='Colaboradores' className='img-fluid' />
      </p>
    </div>
  );
};

export const HomeTwo = () => {
  return (
    <div className='container'>
      <h1>Principios y pautas de identidad de la marca</h1>
      <h2>¿En qué nos diferenciamos?</h2>
      <ul>
        <li><strong>Precios más bajos</strong> de supermercados, todos los días</li>
        <li><strong>Experiencia Omnicanal</strong> consistente y personalizada. Simplificamos la vida del cliente, dónde, cuándo y cómo quiera</li>
        <li><strong>Amplitud de surtido</strong>, complementada en sus canales (SUPERMERCADOS, LIDER APP, LIDER.CL )</li>
        <li>Relacionamiento y fidelización del <strong>cliente</strong> </li>
        <li><strong>Calidad y Frescura</strong> inteligente que ofrece la mejor relación precio/calidad/experiencia</li>
        <li>Aporte a la <strong>comunidad</strong> para vivir mejor</li>
      </ul>
    </div>
  );
};

export const HomeThree = () => {
  return (
    <div className='container'>
      <h1>Principios y pautas de identidad de la marca</h1>
      <h2>¿Cómo somos?</h2>
        <ul>
          <li>Somos <strong>cariñosos</strong>, damos la bienvenida a nuestros clientes, nos preocupamos por ellos y sus familias, por la comunidad. Nuestros clientes confían en nosotros y trabajamos duro para no defraudarlos.</li>
          <li>Somos <strong>auténticos y humanos</strong>, gente común como nuestros clientes.</li>
          <li>Somos <strong>innovadores</strong>, estamos siempre pensando en como mejorar la experiencia de nuestros clientes en cada canal de compra.</li>
          <li>Somos <strong>sencillos y sinceros</strong> con nuestros clientes, proveedores y compañeros.</li>
          <li>Más que agradables, <strong>somos optimistas</strong>. Nuestro optimismo se basa en nuestra creencia de que podemos lograr nuestro propósito de ahorrar dinero a las personas para que puedan vivir mejor. Consideramos los problemas como oportunidades y los contratiempos como experiencias de aprendizaje. Porque somos optimistas, creemos y ayudamos a nuestros clientes a alcanzar sus sueños de una vida mejor. Nuestro optimismo es contagioso, motiva a los proveedores y genera confianza en los clientes.</li>
        </ul>
    </div>
  );
};

export const HomeFour = () => {
  return (
    <div className='container'>
      <h1>Principios y pautas de identidad de la marca</h1>
      <h2>¿Qué debemos tener en cuenta?</h2>
      <p>En la tarea que te haya sido encomendada, ya sea atender un reclamo o crear una pieza gráfica, ten siempre en cuenta:</p>
        <ul>
          <li>Ser empáticos</li>
          <li>Ser transparentes en la información.</li>
          <li>Ser claros y  no dar  cabida a interpretaciones. </li>
          <li>Ser proactivos en la información. </li>
          <li>Ofrecer soluciones y  no más preguntas. </li>
          <li>Ser reflexivos ante los requerimientos. </li>
          <li>No todas las personas buscan lo mismo, no  todos pueden recibir  la misma respuesta.</li>
          <li>Darle continuidad a la comunicación, sobre  todo en la etapa de postventa.  </li>
          <li>Tratar  de  forma individualizada cada caso a resolver.</li>
        </ul>
    </div>
  );
};

export const HomeFive = () => {
  return (
    <div className='container'>
      <h1>Principios y pautas de identidad de la marca</h1>
      <h2>Nuestros Formatos</h2>
      <p>Tenemos distintos tipos de clientes, según el canal de compra que elige, y el momento en qué lo hace. No son distintos clientes, pero nos buscan en diferentes momentos por diferentes necesidades.</p>

      <div className='row'>
        
        <div className='col col-33 p-2'>
          <div className='logo-formatos'>
            <img src={LogoLider} className='img-fluid' alt='logo lider' />
          </div>
          <div>
            <h3>Lider / Supermercado</h3>
            <p>
              Buscan comprar todo en un mismo lugar, amplitud de surtido, experiencia integral.
            </p>
          </div>
        </div>

        <div className='col col-33 p-2'>
          <div className='logo-formatos'>
            <img src={LogoExpress} className='img-fluid' alt='logo lider' />
          </div>
          <div>
            <h3>Express de Lider</h3>
            <p>
              Se enfocan en productos de alimentación y consumo inmediato. Experiencia rápida y cercana
            </p>
          </div>
        </div>

        <div className='col col-33 p-2'>
          <div className='logo-formatos'>
            <img src={LogoLiderCL} className='img-fluid' alt='logo lider' />
          </div>
          <div>
            <h3>Lider.cl / Lider App</h3>
            <p>
              Esperan una experiencia personalizada, que se tenga en cuenta sus preferencias previas. Amplitud y profundidad el surtido, que cubra todas sus necesidades de compra, cuándo y cómo quiera
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};