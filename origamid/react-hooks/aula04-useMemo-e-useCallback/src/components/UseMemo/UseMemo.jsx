import { useMemo, useState } from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

export const UseMemo = () => {
  const [contar, setContar] = useState(0);

  const t1 = performance.now();
  const valor = useMemo(() => operacaoLenta(), []);
  console.log(valor);
  console.log(performance.now() - t1);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};
