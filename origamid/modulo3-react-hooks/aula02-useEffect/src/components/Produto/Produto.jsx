import { useEffect, useState } from 'react';

export const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`).then(
        (response) => response.json().then((json) => setDados(json)),
      );
  }, [produto]);

  if (dados === null) return null;

  return (
    <div>
      <h2>{dados.nome}</h2>
      <p>{dados.preco}</p>
    </div>
  );
};
