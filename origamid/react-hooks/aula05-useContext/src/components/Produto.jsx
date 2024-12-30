import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const Produto = () => {
  const { dados } = useContext(GlobalContext);

  if (dados === null) {
    return null;
  }

  return (
    <>
      <h1>Produto:</h1>
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </>
  );
};
