import React from 'react';
import ToDoItem from './ToDoItem';

//displays a list of to-do items. It takes input and styles as props and  handles the case when there are no to-do items to show.
export default function ListOfToDos({ todos, toggleTodo, deleteTodo, styles }) {
  return (
    <div className={styles.list}>
    <ul>
      {todos.length === 0 && "No To-Dos"}
      {todos.map(todo => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            styles={styles}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
    </div>
  )
}