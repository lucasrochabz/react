import { useState } from 'react';
import './App.css';

export const App = () => {
  const [mensagem, setMensagem] = useState('');

  return (
    <form>
      <textarea
        name=""
        id=""
        value={mensagem}
        rows={5}
        cols={50}
        onChange={({ target }) => setMensagem(target.value)}
      />
      {mensagem}
    </form>
  );
};
