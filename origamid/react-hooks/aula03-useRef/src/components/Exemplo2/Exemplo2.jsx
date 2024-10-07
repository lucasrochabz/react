import { useRef, useState } from 'react';
import '../../App.css';

export const Exemplo2 = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Enviar notificação {carrinho}</button>
    </div>
  );
};
