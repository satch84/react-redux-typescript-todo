import { IStore } from '../../models';
import { TASK_STATUS_TODO, TASK_STATUS_IN_PROGRESS, TASK_STATUS_DONE } from '../../const/taskStatus';

export const getAllTasks = (state: IStore) => state.tasks.taskList.map(task => task.content);;
export const getToDoTasks = (state: IStore) => 
    state.tasks.taskList.filter(task => task.status === TASK_STATUS_TODO);
export const getInProgressTasks = (state: IStore) => 
    state.tasks.taskList.filter(task => task.status === TASK_STATUS_IN_PROGRESS);
export const getDoneTasks = (state: IStore) => 
    state.tasks.taskList.filter(task => task.status === TASK_STATUS_DONE);