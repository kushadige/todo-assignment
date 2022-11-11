import { useEffect, useState } from "react";
import Image from 'next/image';
import { StyledButton } from "../../styles/List.styled";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, checkDone } from '../../slices/todo';

function Item({ todo }) {
    const [isChecked, setIsChecked] = useState(todo.done);
    const dispatch = useDispatch();
    
    const { todos } = useSelector(state => state.todo);

    useEffect(() => {
        setIsChecked(todo.done);
    }, [todo]);

    const handleChange = () => {
        const t = todos.map(t => {
            if(t.id === todo.id) {
                return {
                    ...todo,
                    done: !isChecked,
                }
            } else {
                return t;
            }
        });
        dispatch(checkDone(t));
        setIsChecked(prevState => !prevState);
    }
    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    return(
        <li>
            <StyledButton checked={isChecked} onClick={handleChange}>
                {isChecked && (
                    <Image src="/icon-check.svg" width={10} height={10} alt="next" />    
                )}
            </StyledButton>
            <p className={isChecked ? 'active': ''}>{todo.text}</p>
        </li>
    );
}

export default Item;