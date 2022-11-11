import { StyledList } from "../../styles/List.styled";
import Item from "../Item";

function List({ todos, setTodos, status }) {
    return(
        <StyledList>
            {status === 'all' ? todos.map((todo, idx) => (
                <Item key={idx} todo={todo} setTodos={setTodos} />
            )) : status === 'active' ? todos.filter(todo => !todo.done).map((todo, idx) => (
                <Item key={idx} todo={todo} setTodos={setTodos} />
            )) : todos.filter(todo => todo.done).map((todo, idx) => (
                <Item key={idx} todo={todo} setTodos={setTodos} />
            ))}
        </StyledList>
    );
}

export default List;