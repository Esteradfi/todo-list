import {useState} from "react";
import "./TodoList.scss";

function TodoList({ todo, setTodo }) {

    const [value, setValue] = useState('');

    function createTodo() {
        if (value !== '') {
            setTodo(
                [...todo, {
                    id: todo.length + 1,
                    title: value,
                    status: "wait",
                    selected: "no"
                }]
            )
            setValue('');
        }
    } // функция, создающая новую задачу

    function selectTodo(id) {

        for (let i = 0; i < todo.length; i++) {
            if (todo[i].selected === "yes") {
                todo[i].selected = "no";
                break;
            }
        }

        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.selected = "yes";
            }
            return item;
        });

        setTodo(newTodo);
    } // фунцкия, делающая задачу выбранной

    return (
        <div className="TodoList">
            {
                todo.map( item => (
                    <div key={item.id}>
                        <div className="list-item"
                             onClick={() => selectTodo(item.id)}
                             style={ {color: (item.status === "in process") ? 'blue' :
                                     (item.status === "complete") ? 'green' :
                                     'black'} }
                        > {/* Реализация вывода списка задач и цветовой индикации состояния прогресса выполнения задач */}
                            {item.title}
                        </div>
                    </div>
                ))
            }
            <div>
            <input className="input-create" placeholder={"Введите задачу"} value={value} onChange={ (e) => setValue(e.target.value) } />
            <button className="button-create" onClick={createTodo}>Добавить</button>
            </div> {/* Реализация добавления новых задач в список */}
        </div>
    )
}

export default TodoList;