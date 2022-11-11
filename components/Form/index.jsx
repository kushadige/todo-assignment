import { useState } from "react";
import { nanoid } from 'nanoid';
import { StyledForm } from '../../styles/Form.styled';

function Form({ setTodos }) {
    const [todo, setTodo] = useState({
        text: '',
        done: false,
        id: nanoid(),
    });

    const onSubmit = (e) => {
        e.preventDefault();
        setTodos(todos => [todo, ...todos]);
        setTodo({
            text: '',
            done: false,
            id: nanoid(),
        });
    }

    const checkAll = () => {
        setTodos(todos => todos.map(todo => {
            return {
                ...todo,
                done: todos[0]?.done === true ? false : true,
            }
        }));
    }

    return(
        <StyledForm onSubmit={onSubmit} className='form'>
            <button type="button" onClick={checkAll}>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="form-control">
                <input type="text" placeholder="Create a new todo..." value={todo.text} id='text' onChange={(e) => setTodo({ ...todo, [e.target.id]: e.target.value })} />
            </div>
        </StyledForm>
    );
}

export default Form;