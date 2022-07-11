import { TodoItem } from "./TodoItem"
import { ITodo } from "../types/Data"

interface TodoListProps {
    items: ITodo[];
    remove: (id: number) => void;
    add: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const { remove, add } = props
    return <div>
        {props.items.map(todo => <TodoItem remove={remove} add={add} key={todo.id} {...todo} />)}
    </div>
}

export { TodoList }