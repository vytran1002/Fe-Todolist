import React, { useState } from 'react';
import TodoList from '../TodoList';
import './style.scss';

TodoFeature.propTypes = {
    
};

function TodoFeature() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'Một'
        },
        {
            id: 2,
            title: 'Hai'
        },
        {
            id: 3,
            title: 'Ba'
        },
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Math.max(...todoList.map(t => t.id), 0) + 1,
            title: inputValue,
        };

        setTodoList([...todoList, newTodo]);
        setInputValue('');
    };

    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="todo-feature">
            <h3>Todo List</h3>
            
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Nhập công việc mới..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="input-todo"
                />
                <button onClick={handleAddTodo} className="btn-add">Thêm</button>
            </div>

            {/* Truyền data từ cha xuống con thông qua todoList */}
            <TodoList 
                todoList={todoList}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    );
}

export default TodoFeature;