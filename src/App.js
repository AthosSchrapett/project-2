import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('O Filho renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('O pai renderizou');

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
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
