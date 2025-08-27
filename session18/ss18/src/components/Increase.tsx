import { useReducer } from 'react';

const reducer = (state: number, action: string): number => {
  switch (action) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
};

function Increase() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch('increment')}>Increase</button>
    </div>
  );
}

export default Increase;