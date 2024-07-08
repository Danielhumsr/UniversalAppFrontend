import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginVista from './components/LogIn/LoginVista';
import ListaUsuarios from './components/LogIn/ListarUsuariosVista';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginVista></LoginVista>}></Route>
        <Route path='/ListaUsuarios' element={<ListaUsuarios></ListaUsuarios>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
