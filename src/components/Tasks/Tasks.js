import React from 'react'
import { useSelector } from 'react-redux';

import styles from './Tasks.module.css';
import TasksItem from './TasksItem';

function Tasks() {
  //с помощью хука useSelector забираем из localStorage все задачи и передаем их в массив
  const tasks = useSelector((state) => state.todo.tasks);
  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const filteredTodoList  = tasks.filter((task) => { 
    if(filterStatus === 'all'){
      return true;
    }
    else {
      return task.completed === false;
    }
  });


  return (
    <div className={styles.tasksWrapper}>
        <div className={styles.tasksContaier}>
          {filteredTodoList && filteredTodoList.length > 0 ? filteredTodoList.map((todo) => (
            <TasksItem todo={todo} key={todo.id}></TasksItem>
          )) : <span className={styles.taskNotice}>Задач не найдено. Добавте задачу или уберите фильтр.</span>}
        </div>
    </div>
  )
}

export default Tasks