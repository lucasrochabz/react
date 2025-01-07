import { useState } from 'react';
import { Input } from './components/Input';
import './App.css';

export const App = () => {
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  const validateCep = (value) => {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };

  const handleChange = ({ target }) => {
    if (error) validateCep(target.value);
    setCep(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {cep}
      <Input
        label="CEP"
        id="cep"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={'00000-000'}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};
