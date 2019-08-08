import * as uuid from 'uuid';
import { TASK_STATUS_TODO, TASK_STATUS_IN_PROGRESS, TASK_STATUS_DONE } from '../const/taskStatus';
import { InterfaceTask } from '../models';

/** get current time and date */
export const getDateAndHour = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return `${date} ${time}`;
};

/** generate unique id (uuid) */
export const createUuid = () => {
    return uuid.v4();
};

/** check value entered is not empty, null or undefined */
export const checkValueIsNotEmpty = (value: string) => {
    if (value === null || value === '' || value === undefined) {
        alert('Veuillez saisir une tâche !');
        return false;
    }
    return true;
};

/** check entered task does not exist yet */
export const checkExistingTask = (taskContent: string, taskList: InterfaceTask[]) => {
    let taskExists = false;

    if (taskList.length > 0) {
        taskList.map((task: InterfaceTask, key: number) => {
            if (task.content === taskContent) {
                alert('Cette tâche existe déjà !');
                taskExists = true;
            }
        });
    }
    if (taskExists === false)
        return true;
    else
        return false;
};
