import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    status: PropTypes.string,
};

TodoItem.defaultProps = {
    onClick: null,
    onDelete: null,
    status: 'new',
};

function TodoItem({ todo, onClick, onDelete, status }) {
    const handleClick = () => {
        if (onClick) {
            onClick(todo);
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(todo.id);
        }
    };

    return (
        <li className={`todo-item ${status}`} onClick={handleClick}>
            <span className="todo-title">{todo.title}</span>
            <span className="todo-status">({status})</span>
            <button className="btn-delete" onClick={handleDelete}>
                Xóa
            </button>
        </li>
    );
}

export default TodoItem;
