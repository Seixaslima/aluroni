import Menu from 'Components/Menu';
import PaginaPadrao from 'Components/PaginaPadrao';
import Cardapio from 'Pages/Cardapio';
import Inicio from 'Pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}