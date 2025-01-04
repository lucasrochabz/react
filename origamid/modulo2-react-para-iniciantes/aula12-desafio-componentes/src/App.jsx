import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Produtos from './components/Produtos';

export const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};
