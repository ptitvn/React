import { useReducer } from 'react';

type State = {
    gender: string;
};

type Action = {
    type: 'select';
    payload: string;
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'select':
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};

function InputRadio() {
    const [state, dispatch] = useReducer(reducer, { gender: '' });

    return (
        <div>
            <h2>Chọn giới tính</h2>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={state.gender === 'Nam'}
                    onChange={() => dispatch({ type: 'select', payload: 'Nam' })}
                />
                Nam
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={state.gender === 'Nữ'}
                    onChange={() => dispatch({ type: 'select', payload: 'Nữ' })}
                />
                Nữ
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Khác"
                    checked={state.gender === 'Khác'}
                    onChange={() => dispatch({ type: 'select', payload: 'Khác' })}
                />
                Khác
            </label>

            <p>Selected gender: {state.gender}</p>
        </div>
    );
}

export default InputRadio;