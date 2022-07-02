import React from 'react'
import { useSelector } from 'react-redux';

import s from './Tasks.module.css';
import TasksItem from './TasksItem';

const Tasks = () =>{
  //с помощью хука useSelector забираем из localStorage все задачи и передаем их в массив
  const tasks = useSelector((state) => state.todo.tasks);
  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const filteredTodoList  = tasks.filter((task) => filterStatus === 'all' || task.completed === false);

  return (
    <div className={s.tasksWrapper}>
        <div className={s.tasksContaier}>
          {filteredTodoList && filteredTodoList.length > 0 ? filteredTodoList.map((todo) => (
            <TasksItem todo={todo} key={todo.id}></TasksItem>
          )) : <span className={s.taskNotice}>Задач не найдено. Добавте задачу или уберите фильтр.</span>}
        </div>
    </div>
  )
}

export default Tasks