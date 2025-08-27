import { useReducer, useState, useEffect } from 'react';

type Task = {
  id: number;
  name: string;
};

type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'DELETE'; payload: number }
  | { type: 'LOAD'; payload: Task[] };

function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'ADD': {
      const newTask: Task = {
        id: Date.now(),
        name: action.payload,
      };
      const updated = [...state, newTask];
      localStorage.setItem('tasks', JSON.stringify(updated));
      return updated;
    }

    case 'DELETE': {
      const filtered = state.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filtered));
      return filtered;
    }

    case 'LOAD':
      return action.payload;

    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      dispatch({ type: 'LOAD', payload: JSON.parse(stored) });
    }
  }, []);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Nhập tên công việc</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập tên công việc"
        style={{ width: '70%', padding: '8px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px', marginLeft: '10px' }}>
        Thêm
      </button>

      <div style={{ padding: '0', marginTop: '20px' ,}}>
        {state.map((task: Task) => (
          <p
            key={task.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            {task.name}
            <button style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }} onClick={() => handleDelete(task.id)}>Xóa</button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;