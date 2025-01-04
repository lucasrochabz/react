import { useCallback, useState } from 'react';

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('teste');
  };

  const func2 = useCallback(() => {
    console.log('teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1: ', set1);
  console.log('Set2: ', set2);

  return (
    <>
      <p onClick={func1}>Produto</p>
      <p onClick={func2}>Produto</p>
    </>
  );
};

export const UseCallback = () => {
  const [contar, setContar] = useState(0);

  return (
    <>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};
