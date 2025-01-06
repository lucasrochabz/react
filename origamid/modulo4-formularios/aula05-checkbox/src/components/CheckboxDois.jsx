import { useState } from 'react';

export const CheckboxDois = () => {
  const [cores, setCores] = useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  return (
    <>
      <h2>Múltiplos itens</h2>
      {cores}
      <form>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleChange}
          />
          Azul
        </label>

        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>

        <label>
          <input
            type="checkbox"
            value="branco"
            checked={cores.includes('branco')}
            onChange={handleChange}
          />
          Branco
        </label>
      </form>
    </>
  );
};
