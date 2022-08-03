import {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoEdit from "./components/TodoEdit/TodoEdit";
import "./TodoDisplay.scss";

function TodoDisplay() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "First TODO",
            status: "wait",
        },
        {
            id: 2,
            title: "Second TODO",
            status: "in process",
        },
        {
            id: 3,
            title: "Third TODO",
            status: "complete",
        },
    ]);

    return (
        <div className="TodoDisplay">
            <TodoList todo={todo} setTodo={setTodo} />
            <TodoEdit />
        </div>
    )
}

export default TodoDisplay;