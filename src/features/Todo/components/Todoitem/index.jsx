import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func,
};

TodoItem.defaultProps = {
    onDelete: null,
};

function TodoItem({ todo, onDelete }) {
    const handleDelete = () => {
        if (onDelete) {
            onDelete(todo.id);
        }
    };

    return (
        <li className="todo-item">
            <span className="todo-title">{todo.title}</span>
            <button className="btn-delete" onClick={handleDelete}>
                Xóa
            </button>
        </li>
    );
}

export default TodoItem;
