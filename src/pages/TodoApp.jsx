import React from 'react';
import  ListItem  from '../components/Listitem';
import  TaskField  from '../components/TaskField';

const TodoApp = () => {

  const [tasks, setTasks] = React.useState([
    {
      text: 'Выполнить задание',
      description: 'Разработать приложение со списком задач',
      completed: true,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
            ...task,
            completed: !task.completed,
          }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text, description, date) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        description,
        completed: false,
      },
    ]);
  };
  
  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Список задач</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            description={task.description}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;