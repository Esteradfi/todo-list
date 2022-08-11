import {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoEdit from "./components/TodoEdit/TodoEdit";
import "./TodoDisplay.scss";

function TodoDisplay() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "Выполнить тестовое задание",
            status: "complete",
            selected: "no",
        },
        {
            id: 2,
            title: "Отравить тестовое задание",
            status: "in process",
            selected: "no",
        },
        {
            id: 3,
            title: "Ждать обратной связи",
            status: "wait",
            selected: "no",
        },
        {
            id: 4,
            title: "Поесть",
            status: "wait",
            selected: "no",
        },
        {
            id: 5,
            title: "Лечь спать",
            status: "wait",
            selected: "no",
        },
        {
            id: 6,
            title: "Получить обратную связь",
            status: "wait",
            selected: "yes",
        },
    ]);

    return (
        <div className="TodoDisplay">
            <TodoList todo={todo} setTodo={setTodo} />
            <TodoEdit todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default TodoDisplay;