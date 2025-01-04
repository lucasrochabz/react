import { useState } from 'react';
import './Form.css';

export const FormUm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
        }),
      },
    );

    if (response.ok) {
      const data = await response.json();
      alert(`Usuário ${data.display_name} cadastrado com sucesso`);
    } else {
      const data = await response.json();
      console.log(data.message);
      alert(`Erro ao cadastar usuário: ${data.message}`);
    }

    setNome('');
    setEmail('');
    setSenha('');
    setCep('');
    setRua('');
    setNumero('');
    setBairro('');
    setCidade('');
    setEstado('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <label htmlFor="cep">Cep</label>
      <input
        type="number"
        id="cep"
        name="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <label htmlFor="rua">Rua</label>
      <input
        type="text"
        id="rua"
        name="rua"
        value={rua}
        onChange={(e) => setRua(e.target.value)}
      />

      <label htmlFor="numero">Número</label>
      <input
        type="number"
        id="numero"
        name="numero"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        name="bairro"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
      />

      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        name="estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};
