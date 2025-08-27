import { useReducer } from 'react';

type State = {
  text: string;
};

type Action = {
  type: 'change';
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'change':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: '' });

  return (
    <div>
      <input
        type="text"
        placeholder="Input change"
        value={state.text}
        onChange={e =>
          dispatch({ type: 'change', payload: e.target.value })
        }
      />
      <p>{state.text}</p>
    </div>
  );
}

export default InputText;