import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../Todoitem';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoList: PropTypes.func,
    onDeleteTodo: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
    onDeleteTodo: null,
};

function TodoList({todoList, onTodoClick, onDeleteTodo}) {
    const handleTodoClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    };

    return (
        <div className="todo-list">
            <ul>
                {todoList.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        status={todo.status}
                        onClick={handleTodoClick}
                        onDelete={onDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
