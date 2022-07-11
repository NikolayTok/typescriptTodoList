import { ITodo } from '../types/Data'

interface ITodoItem extends ITodo {
    remove: (id: number) => void;
    add: (id: number) => void;
 }


const TodoItem: React.FC<ITodoItem> = (props) => {
    const { title, id, complete } = props

    return <div>

        <input type="checkbox" checked={complete} />
        {title}
        <button>x</button>
    </div>

}
export { TodoItem }