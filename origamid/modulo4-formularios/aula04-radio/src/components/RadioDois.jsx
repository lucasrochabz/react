import { useState } from 'react';

export const RadioDois = () => {
  const [produto, setProduto] = useState('');
  const [cor, setCor] = useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <>
      <h2>Exemplo 2</h2>
      <h3>Produtos</h3>
      <form>
        {produto}
        <label>
          <input
            type="radio"
            checked={produto === 'smartphone'}
            value="smartphone"
            onChange={handleChange}
          />
          Smartphone
        </label>

        <label>
          <input
            type="radio"
            checked={produto === 'notebook'}
            value="notebook"
            onChange={handleChange}
          />
          Notebook
        </label>
      </form>

      <h3>Cores</h3>
      <form>
        {cor}
        <label>
          <input
            type="radio"
            checked={cor === 'azul'}
            value="azul"
            onChange={({ target }) => setCor(target.value)}
          />
          Azul
        </label>

        <label>
          <input
            type="radio"
            checked={cor === 'vermelho'}
            value="vermelho"
            onChange={({ target }) => setCor(target.value)}
          />
          Vermelho
        </label>
      </form>
    </>
  );
};
