import {useState} from "react";
import "./TodoEdit.scss";

function TodoEdit({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [editValue, setEditValue] = useState('');

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    } //функция, удаляюзая задачу

    function editTodo(id, title) {
        setEdit(id);
        setEditValue(title);
    } //функция, включающая режим редактирования задачи

    function saveTodo(id) {
        let newTodo = [...todo].map( item => {
            if (item.id === id) {
                item.title = editValue;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    } //функция, сохраняющая отредактированную задачу

    function completeTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = "complete";
            }
            return item;
        });
        setTodo(newTodo);
    } // функция, отмечающая задачу как "выполненную"

    function doTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = "in process";
            }
            return item;
        });
        setTodo(newTodo);
    } // функция, отмечающая задачу как "в процессе"

    function waitTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = "wait";
            }
            return item;
        });
        setTodo(newTodo);
    } // функция, отмечающая задачу как "ждущую выполнения"

    return (
        <div className="TodoEdit">
            <div className="TodoName"> {/* Вывод имени задачи в компоненте TodoEdit */}
                {
                    todo.filter( item => item.selected === 'yes' ).map( item => (
                        <div>Задача: {item.title}</div>
                    ))
                }
            </div>
            {
                todo.filter( item => item.selected === 'yes' ).map( item => (
                    <div key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input className="input-edit" value={editValue} onChange={ (e) => setEditValue(e.target.value) } />
                                </div> :
                                null
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <button className="button button-save" onClick={() => saveTodo(item.id)}>Сохранить</button>
                                </div> :
                                <div className="buttons">
                                    <button className="button button-edit" onClick={() => editTodo(item.id, item.title)}>Редактировать</button>
                                    <div className="buttons-status">
                                        <button className="button button-wait" onClick={() => waitTodo(item.id)}>Ждёт выполнения</button>
                                        <button className="button button-do" onClick={() => doTodo(item.id)}>Начать делать</button>
                                        <button className="button button-complete" onClick={() => completeTodo(item.id)}>Выполнено</button>
                                    </div>
                                    <button className="button button-delete" onClick={() => deleteTodo(item.id)}>Удалить</button>
                                </div>
                        }
                    </div>
                ))
            } {/* Вывод кнопок взаимодействия с задачей в компоненте TodoEdit */}
        </div>
    )
}

export default TodoEdit;