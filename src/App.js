import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('chamou inverter');
      const { title } = state;
      return {
        ...state,
        title: title.split('').reverse().join(''),
      };
    }
  }
  console.log('Nenhuma Action Encontrada');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  console.log(body);
  return (
    <div>
      <h1>
        {title} - {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-br') })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: '' })}>Nenhuma Action</button>
    </div>
  );
}

export default App;
