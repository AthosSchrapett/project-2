import { P } from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import './App.css';

//actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      console.log('Mudar Titulo');
      return { ...state, title: 'Qualquer Coisa' };
  }
  return { ...state };
};

//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = () => {
    dispatch({ type: actions.CHANGE_TITLE });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);

  return <h1 onClick={() => context.changeTitle}>{context.title}</h1>;
};

//App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <h1>Oi</h1>
      </div>
    </AppContext>
  );
}

export default App;
