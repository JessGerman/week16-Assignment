import React from 'react';
//renders a list item with a checkbox for marking as complete and a delete button, getting props like completed, id, title, toggleTodo, deleteTodo, and styles.
export default function ToDoItem({ completed, id, title, toggleTodo, deleteTodo, styles }) {
  return (
    <li>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button 
      className={styles.deleteBtn}
      onClick={() => deleteTodo(id)}>
      Delete
    </button>
  </li>
  )
}