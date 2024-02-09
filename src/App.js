import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ChiSono from './components/ChiSono';
import Contatti from './components/Contatti';
import EsperienzeComponent from './components/EsperienzeComponent';
import Footer from './components/Footer';
import ProgettiComponent from './components/ProgettiComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/job" element={<EsperienzeComponent/>} />
          <Route path="/projects" element={<ProgettiComponent/>} />
          <Route path="/about" element={<ChiSono/>} />
          <Route path="/contatti" element={<Contatti/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
