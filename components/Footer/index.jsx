import { useEffect, useState } from "react";
import { StyledFooter } from "../../styles/Footer.styled";

function Footer({ todos, setTodos, status, setStatus }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        let counter = 0;
        todos.forEach(todo => {
            if(!todo.done){
                counter++;
            }
        });
        setActive(counter);
    }, [todos]);

    const clearCompleted = () => {
        setTodos(todos => todos.filter(todo => !todo.done));
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
                <button onClick={clearCompleted}>Clear completed</button>
            </div>
        </StyledFooter>
    );
}

export default Footer;