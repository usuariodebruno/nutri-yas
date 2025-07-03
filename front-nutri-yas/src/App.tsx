import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Questionario from './pages/Questionario';
import AreaPaciente from './pages/AreaPaciente';
import ConteudoEducativo from './pages/ConteudoEducativo';
import PlanoAlimentar from './pages/PlanoAlimentar';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/questionario" element={<Questionario />} />
          <Route path="/area-paciente" element={<AreaPaciente />} />
          <Route path="/conteudo-educativo" element={<ConteudoEducativo />} />
          <Route path="/plano-alimentar" element={<PlanoAlimentar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;