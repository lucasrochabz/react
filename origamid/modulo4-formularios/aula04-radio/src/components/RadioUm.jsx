import { useState } from 'react';

export const RadioUm = () => {
  const [produto, setProduto] = useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <>
      <h2>Exemplo 1</h2>
      <form action="">
        {produto}
        <label>
          <input
            type="radio"
            name="produto"
            value="smartphone"
            onChange={handleChange}
          />
          Smartphone
        </label>

        <label>
          <input
            type="radio"
            name="produto"
            value="notebook"
            onChange={handleChange}
          />
          Notebook
        </label>
      </form>
    </>
  );
};
