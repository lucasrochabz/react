import { useState } from 'react';

export const Exercicio = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
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
      <h2>Exercício Checkbox</h2>
      {cores}
      <form>
        {coresArray.map((cor, index) => (
          <label key={index} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              // Para caso de valores repetidos: value={cor + index}
              value={cor}
              // Para caso de valores repetidos: checked={cor.includes(cor + index)}
              checked={cores.includes(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        ))}
      </form>
    </>
  );
};
