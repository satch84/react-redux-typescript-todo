import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_TODO } from '../../const/taskStatus';
import { IStore } from '../../models';

export const getAllTasks = (state: IStore) => state.tasks.taskList.map(task => task.content);;
export const getToDoTasks = (state: IStore) => 
    state.tasks.taskList.filter(task => task.status === TASK_STATUS_TODO);
export const getInProgressTasks = (state: IStore) => 
    state.tasks.taskList.filter(task => task.status === TASK_STATUS_IN_PROGRESS);
export const getDoneTasks = (state: IStore) => 
    state.tasks.taskList.filter(task => task.status === TASK_STATUS_DONE);