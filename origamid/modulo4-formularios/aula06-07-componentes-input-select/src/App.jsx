import { useState } from 'react';
import { Input } from './components/Input';
import { Select } from './components/Select';
import './App.css';

export const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [produto, setProduto] = useState('');

  return (
    <>
      <h2>Componente Input</h2>
      <form>
        <Input
          // Posso definir o tipo do input também. Exemplo: type={'text'}
          label={'Nome'}
          id="nome"
          value={nome}
          setValue={setNome}
          required
        />
        <Input
          label={'Email'}
          id="email"
          value={email}
          setValue={setEmail}
          required
        />

        <button>Enviar</button>
      </form>

      <h2>Componente Select</h2>
      <form>
        <Select
          options={['Notebook', 'Smartphone']}
          value={produto}
          setValue={setProduto}
        />
      </form>
    </>
  );
};
