import { createSlice } from "@reduxjs/toolkit";

const getInitialTasks = () =>{
    const localTasks = window.localStorage.getItem('tasks');
    if(localTasks){
        return JSON.parse(localTasks)
    }
    //если при загрузке страницы в localStorage ещё нет задач, то туда добавляется пустой масссив
    window.localStorage.setItem('tasks', JSON.stringify([]));
    return [];
};

const initialValue = {
    //как только приложение загружается, мы забираем все задачи из localStorage
    filterStatus: 'all',
    tasks: getInitialTasks()
}

export const todoSlice = createSlice ({
    name: 'todo', //название 1 редюсера
    initialState: initialValue, //дефолтное состояние приложения
    reducers:{ 
        //добавление новой задачи в localStorage  
        addTodo: (state, action) => {
            state.tasks.push(action.payload);
            //забираем все задачи, находящиеся в localStorage
            const tasks = window.localStorage.getItem('tasks');
            //делаем из всех существующих задач массив
            const tasksArray = tasks ? JSON.parse(tasks) : [];
            //добавляем новую задачу в массив
            tasksArray.push({
                ...action.payload
            });            
            //отправляем массив задач в localStorage
            window.localStorage.setItem('tasks', JSON.stringify(tasksArray))
            /*else{
                //если же в localStorage ещё нет ни одной задачи
                window.localStorage.setItem('tasks', JSON.stringify([{...action.payload}]));
            }*/
        },
        deleteTodo: (state, action) => {
            const tasks = window.localStorage.getItem('tasks');
            if(tasks){
                const tasksArray = JSON.parse(tasks).filter((todo, index) => todo.id !== action.payload);
                window.localStorage.setItem('tasks', JSON.stringify(tasksArray));
                state.tasks = tasksArray;
            }
        },
        updateTodo: (state, action) => {
            const tasks = window.localStorage.getItem('tasks');
            if(tasks){
                const {description, taskType, completed} = action.payload;
                const tasksArray = JSON.parse(tasks).map((todo, index) => todo.id === action.payload.id ? {...todo, description, taskType, completed} : todo)
                window.localStorage.setItem('tasks', JSON.stringify(tasksArray));
                state.tasks = tasksArray;
            }
        },
        updateFilterStatus: (state, action) => {
            state.filterStatus = action.payload;
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, updateFilterStatus} = todoSlice.actions;
export default todoSlice.reducer;