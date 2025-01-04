import { useState } from 'react';
import './Form.css';

export const FormDois = () => {
  const formFields = [
    {
      label: 'Nome',
      type: 'text',
      id: 'nome',
    },
    {
      label: 'Email',
      type: 'email',
      id: 'email',
    },
    {
      label: 'Senha',
      type: 'password',
      id: 'senha',
    },
    {
      label: 'Cep',
      type: 'text',
      id: 'cep',
    },
    {
      label: 'Rua',
      type: 'text',
      id: 'rua',
    },
    {
      label: 'Numero',
      type: 'text',
      id: 'numero',
    },
    {
      label: 'Bairro',
      type: 'text',
      id: 'bairro',
    },
    {
      label: 'Cidade',
      type: 'text',
      id: 'cidade',
    },
    {
      label: 'Estado',
      type: 'text',
      id: 'estado',
    },
  ];

  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [response, setResponse] = useState(null);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );

    if (response.ok) {
      const data = await response.json();
      alert(`Usuário ${data.display_name} cadastrado com sucesso`);
      setResponse(response);
    } else {
      const data = await response.json();
      console.log(data.message);
      alert(`Erro ao cadastar usuário: ${data.message}`);
    }

    setForm({
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            name={id}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      ))}

      {response && response.ok && <p>Formulário enviado</p>}

      <button>Enviar</button>
    </form>
  );
};
