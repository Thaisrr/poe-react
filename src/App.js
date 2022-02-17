import './style/App.css'; // Pour lui dire d'utiliser ce fichier CSS
import Logo from './components/Logo.js';
import Presentation from './pages/Presentation.js';
import Routage from './pages/Routage.js';
import Navigation from "./components/Navigation.js";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Static from './pages/Static.js';
import State from "./pages/State.js";
import Props from "./pages/Props.js";
import NotFound from "./pages/NotFound.js";
import {BackBtn} from "./components/Buttons.js";
import Connexion from "./pages/Connexion.js";

function App() {


  return (
    <div className="App">
     <BrowserRouter>
        {/* 
        Avec le router, tous le code JSX, les composants ou autre qu'on souhaite
        mettre dans App doit se mettre entre ces balises.
        Elles indiquent à React que l'application utilise React Router Dom.

        Tous les composants ou le JSX passé dans Browser Router, en dehors des routes, 
        est du contenu static : commun à toutes les pages.
        Plus précisément, il ne se rechargera pas quand on clique sur un lien.
        */}

        <Logo/> {/* Logo est mis dans App, il s'affichera pour toutes les pages */}
        <Navigation/>

        <div className='main'>

          <Routes> {/* C'est à l'intérieur de cette balise que React va charger les routes */}
            <Route path="/" element={<Presentation/>} />
            <Route path="/routing" element={<Routage/>} />
            <Route path='/static' element={<Static/>} />
            <Route path='/hooks' element={<State/>} />
            <Route path="/props" element={<Props/>} />
            <Route path="/login" element={<Connexion/>} />
            <Route path="/accueil" element={<Navigate to="/" />} />
            <Route path="/acceuil" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>

            <BackBtn/>
          {/*
          Sur certaines Doc anciennes, vous pourriez amenés à voir 
          <Switch> à la place de <Routes>
          et ls routes : 
          <Route path="/" component={MonComposant} />

          -> C'était valable pour les version de React Router Dom ingérieur à la v6      
          */}

        </div>

     </BrowserRouter>
      
    </div>
  
  );
}

export default App;
