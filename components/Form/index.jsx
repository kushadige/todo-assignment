import { useState } from "react";
import { nanoid } from 'nanoid';
import { StyledForm } from '../../styles/Form.styled';
import { addTodo, checkAllDone } from '../../slices/todo';
import { useDispatch, useSelector } from 'react-redux';

function Form() {

    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todo);

    const [todo, setTodo] = useState({
        text: '',
        done: false,
        id: nanoid(),
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo({
            text: '',
            done: false,
            id: nanoid(),
        });
    }

    const checkAll = () => {
        const t = todos.map(todo => {
            return {
                ...todo,
                done: todos[0]?.done === true ? false : true,
            }
        });
        dispatch(checkAllDone(t));
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