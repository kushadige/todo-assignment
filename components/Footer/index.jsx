import { useEffect, useState } from "react";
import { StyledFooter } from "../../styles/Footer.styled";
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../../slices/todo';

function Footer({ status, setStatus }) {
    const [active, setActive] = useState(0);
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todo);

    useEffect(() => {
        let counter = 0;
        todos.forEach(todo => {
            if(!todo.done){
                counter++;
            }
        });
        setActive(counter);
    }, [todos]);

    const handleClearCompleted = () => {
        const t = todos.filter(todo => !todo.done);
        dispatch(clearCompleted(t));
    }
    const handleClickCompleted = () => {
        setStatus('completed');
    }
    const handleClickActive = () => {
        setStatus('active');
    }
    const handleClickAll = () => {
        setStatus('all');
    }
    return(
        <StyledFooter className="footer">
            <div>
                <span>{active}</span> items left
            </div>
            <div className="button-group">
                <button id="all" className={status === 'all' ? 'active' : ''} onClick={handleClickAll}>All</button>
                <button className={status === 'active' ? 'active' : ''} onClick={handleClickActive}>Active</button>
                <button className={status === 'completed' ? 'active' : ''} onClick={handleClickCompleted}>Completed</button>
            </div>
            <div>
                <button onClick={handleClearCompleted}>Clear completed</button>
            </div>
        </StyledFooter>
    );
}

export default Footer;