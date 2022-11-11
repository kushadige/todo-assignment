import { StyledList } from "../../styles/List.styled";
import Item from "../Item";
import { useSelector } from 'react-redux';

function List({ status }) {

    const { todos } = useSelector(state => state.todo);

    return(
        <StyledList>
            {status === 'all' ? todos.map((todo, idx) => (
                <Item key={idx} todo={todo} />
            )) : status === 'active' ? todos.filter(todo => !todo.done).map((todo, idx) => (
                <Item key={idx} todo={todo} />
            )) : todos.filter(todo => todo.done).map((todo, idx) => (
                <Item key={idx} todo={todo} />
            ))}
        </StyledList>
    );
}

export default List;