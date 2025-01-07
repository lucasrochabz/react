import { useState } from 'react';
import './App.css';

export const App = () => {
  const [select, setSelect] = useState('');
  return (
    <form>
      <select
        name="produtos"
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
};
