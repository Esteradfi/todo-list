import {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoEdit from "./components/TodoEdit/TodoEdit";
import "./TodoDisplay.scss";

function TodoDisplay() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "Выполнить тестовое задание",
            status: "wait",
        },
        {
            id: 2,
            title: "Отравить тестовое задание",
            status: "in process",
        },
        {
            id: 3,
            title: "Ждать обратной связи",
            status: "complete",
        },
        {
            id: 4,
            title: "Поесть",
            status: "complete",
        },
        {
            id: 5,
            title: "Лечь спать",
            status: "complete",
        },
        {
            id: 6,
            title: "Получить обратную связь",
            status: "complete",
        },
    ]);

    console.log(todo);

    return (
        <div className="TodoDisplay">
            <TodoList todo={todo} setTodo={setTodo} />
            <TodoEdit todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default TodoDisplay;