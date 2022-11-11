import { useEffect, useState } from "react";
import Image from 'next/image';
import { StyledButton } from "../../styles/List.styled";

function Item({ todo, setTodos }) {
    const [isChecked, setIsChecked] = useState(todo.done);

    useEffect(() => {
        setIsChecked(todo.done);
    }, [todo]);

    useEffect(() => {
        setTodos(todos => todos.map(t => {
            if(t.id === todo.id) {
                return {
                    ...todo,
                    done: isChecked,
                }
            } else {
                return t;
            }
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked]);

    const handleChange = () => {
        setIsChecked(prevState => !prevState);
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