import { useState } from 'react';
import { Radio } from './components/Radio';
import { Checkbox } from './components/Checkbox';
import './App.css';

export const App = () => {
  const [cor, setCor] = useState('');
  const [fruta, setFruta] = useState('');
  const [linguagem, setLinguagem] = useState([]);
  const [termos, setTermos] = useState([]);

  return (
    <form>
      <h2>Radios</h2>
      <h3>Cores</h3>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />;
      <h3>Frutas</h3>
      <Radio
        options={['Banana', 'Uva', 'Laranja']}
        value={fruta}
        setValue={setFruta}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagem}
        setValue={setLinguagem}
      />
      <h2>Checkbox Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
};
