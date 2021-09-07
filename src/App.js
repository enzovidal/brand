import './App.css';
import Sidebar from './components/Sidebar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, HomeOne, HomeTwo, HomeThree, HomeFour, HomeFive }  from './pages/Home';
import { Colores, ColoresOne, ColoresTwo, ColoresThree } from './pages/Colores';
import { Logos, LogosOne, LogosTwo, LogosThree, LogosFour, LogosFive, LogosSix } from './pages/Logos';
import { Voz, VozViaje } from './pages/Voz';
import { Tipografia, TipografiaOne, TipografiaThree, TipografiaTwo } from './pages/Tipografia';
import { Recursos, RecursosOne, RecursosThree, RecursosTwo } from './pages/recursos';

function App() {
  return (
    <div className="containe-fluid">
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/colores' exact component={Colores} />
          <Route path='/colores/paleta-de-colores' exact component={ColoresOne} />
          <Route path='/colores/accesibilidad' exact component={ColoresTwo} />
          <Route path='/colores/buenas-practicas' exact component={ColoresThree} />
          <Route path='/logos' exact component={Logos} />
          <Route path='/logos/lider' exact component={LogosOne} />
          <Route path='/logos/lider-cl' exact component={LogosTwo} />
          <Route path='/logos/express' exact component={LogosThree} />
          <Route path='/logos/pickup' exact component={LogosFour} />
          <Route path='/logos/spark' exact component={LogosFive} />
          <Route path='/logos/descargas' exact component={LogosSix} />
          <Route path='/tipografia-botones' exact component={Tipografia} />
          <Route path='/tipografia-botones/tipografia' exact component={TipografiaOne} />
          <Route path='/tipografia-botones/tamanos' exact component={TipografiaTwo} />
          <Route path='/tipografia-botones/botones' exact component={TipografiaThree} />
          <Route path='/recursos' exact component={Recursos} />
          <Route path='/recursos/supermercado' exact component={RecursosOne} />
          <Route path='/recursos/catalogo' exact component={RecursosTwo} />
          <Route path='/recursos/mail' exact component={RecursosThree} />
          <Route path='/voz-tono' exact component={Voz} />
          <Route path='/voz-tono/momentos-viaje' exact component={VozViaje} />
          <Route path='/' exact component={Home} />
          <Route path='/nuestra-marca/proposito' exact component={HomeOne} />
          <Route path='/nuestra-marca/propuesta-de-valor' exact component={HomeTwo} />
          <Route path='/nuestra-marca/personalidad' exact component={HomeThree} />
          <Route path='/nuestra-marca/relacion-clientes' exact component={HomeFour} />
          <Route path='/nuestra-marca/nuestros-formatos' exact component={HomeFive} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
