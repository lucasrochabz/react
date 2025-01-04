import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const Limpar = () => {
  const { limparDados } = useContext(GlobalContext);

  return <button onClick={limparDados}>Limpar</button>;
};
