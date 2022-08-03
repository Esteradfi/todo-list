import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.scss";

function TodoList({ todo, setTodo }) {

    const [value, setValue] = useState('');
    const [edit, setEdit] = useState(null);
    const [editValue, setEditValue] = useState('');

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id);
        setEditValue(title);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map( item => {
            if (item.id === id) {
                item.title = editValue;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }

    function completeTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = "complete";
            }
            return item;
        });
        setTodo(newTodo);
    }

    function doTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = "in process";
            }
            return item;
        });
        setTodo(newTodo);
    }

    function waitTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = "wait";
            }
            return item;
        });
        setTodo(newTodo);
    }

    function createTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: "wait",
            }]
        )
        setValue('');
    }

    return (
        <div className="TodoList">
            {
                todo.map( item => (
                    <div key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input value={editValue} onChange={ (e) => setEditValue(e.target.value) } />
                                </div> :
                                <div>{ item.title }</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <button onClick={() => saveTodo(item.id)}>Сохранить</button>
                                </div> :
                                <div>
                                <button onClick={() => deleteTodo(item.id)}>Удалить</button>
                                <button onClick={() => editTodo(item.id, item.title)}>Редактировать</button>
                                <button onClick={() => waitTodo(item.id)}>Ждёт выполнения</button>
                                <button onClick={() => doTodo(item.id)}>Начать делать</button>
                                <button onClick={() => completeTodo(item.id)}>Выполнено</button>
                                </div>
                        }
                    </div>
                ))
            }
            <div>
            <input placeholder={"Введите задачу"} value={value} onChange={ (e) => setValue(e.target.value) } />
            <button onClick={createTodo}>Добавить</button>
            </div>
        </div>
    )
}

export default TodoList;