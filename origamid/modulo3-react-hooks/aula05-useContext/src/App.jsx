import { GlobalStorage } from './contexts/GlobalContext';
import { Produto } from './components/Produto';
import { Limpar } from './components/Limpar';
import './App.css';

export const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};
