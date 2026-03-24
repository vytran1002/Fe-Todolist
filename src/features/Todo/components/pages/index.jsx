import React, { useState } from "react";
import TodoList from "../TodoList";
import "./style.scss";

TodoFeature.propTypes = {};

function TodoFeature() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Một",
      status: "new",
    },
    {
      id: 2,
      title: "Hai",
      status: "completed",
    },
    {
      id: 3,
      title: "Ba",
      status: "new",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [filteredStatus, setfilteredStatus] = useState("all");

  const renderedTodoList = todoList.filter(
    todo => filteredStatus === 'all' || filteredStatus === todo.status
  );
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Math.max(...todoList.map((t) => t.id), 0) + 1,
      title: inputValue,
      status: "new",
    };

    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };
  const handleTodoClick = (todo) => {
    //clone current array to do the new one
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((t) => t.id === todo.id);
    console.log(todo, index);
    //toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    //update todo list
    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-feature">
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      
      <button onClick={() => setfilteredStatus('all')}>Show All</button>
      <button onClick={() => setfilteredStatus('completed')}>Show Completed</button>
      <button onClick={() => setfilteredStatus('new')}>Show New</button>

      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập công việc mới..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-todo"
        />
        <button onClick={handleAddTodo} className="btn-add">
          Thêm
        </button>
      </div>

      {/* Truyền data từ cha xuống con thông qua todoList */}
      <TodoList
        todoList={todoList}
        onTodoClick={handleTodoClick}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoFeature;
