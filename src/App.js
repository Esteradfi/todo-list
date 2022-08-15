import './App.scss';
import {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoEdit from "./components/TodoEdit/TodoEdit";

function App() {

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
            selected: "yes",
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
            selected: "no",
        },
    ]); // Начальные задачи в списке

    //Вёрстка ломается при ширине экрана меньше 348px

  return (
    <div className="App">
        <header className="header">TODO List</header>
        <div className="display">
            <TodoList todo={todo} setTodo={setTodo} />
            <TodoEdit todo={todo} setTodo={setTodo} />
        </div>
    </div>
  );
}


export default App;