/* import logo from './logo.svg'; */
import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate - Executa toda vez que o componente atualiza
  /* useEffect(() => {
    console.log('componentDidUpdate');
  }); */

  //componentDidMount - Executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componentWillUmount - Limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1: {counter} C2: {counter2}{' '}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>++</button>
    </div>
  );
}

/* function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Inverse {counter}
          </button>
        </p>
      </header>
    </div>
  );
} */

export default App;
