import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../Todoitem';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onDeleteTodo: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onDeleteTodo: null,
};

function TodoList({todoList, onDeleteTodo}) {
    return (
        <div className="todo-list">
            <ul>
                {todoList.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        onDelete={onDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
