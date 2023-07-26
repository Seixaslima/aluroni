import Footer from 'Components/Footer';
import Menu from 'Components/Menu';
import PaginaPadrao from 'Components/PaginaPadrao';
import Cardapio from 'Pages/Cardapio';
import Inicio from 'Pages/Inicio';
import NotFound from 'Pages/NotFound';
import Prato from 'Pages/Prato';
import Sobre from 'Pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}