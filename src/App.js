import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Páginas/Login';
import Cadastro from './Páginas/Cadastro';
import Extrato from './Páginas/Extrato';
import Entrada from './Páginas/Entrada';
import Saida from './Páginas/Saida';

import ContextUsuario from './Contexts/Context';

function App() {

  const [token, setToken] = useState('');
  

  return (

    <ContextUsuario.Provider value={{ setToken, token }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/extrato" element={<Extrato />} />
          <Route path="/entrada" element={<Entrada />} />
          <Route path="/saida" element={<Saida />} />
        </Routes>
      </BrowserRouter>

    
    </ContextUsuario.Provider >
  );
}

export default App;
