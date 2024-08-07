import './Header.css';

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
