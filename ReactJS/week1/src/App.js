import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nama kalian.
        </p>
        <a
          className="App-link"
          href="https://website.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kunjungi website kami
        </a>
      </header>
    </div>
  );
}

export default App;
