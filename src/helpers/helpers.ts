import uuid from 'uuid';
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

/** check entered task does not exist yet */
export const checkExistingTask = (taskContent: string, taskList: InterfaceTask[]) => {
    let taskExists = false;

    if (taskList.length > 0) {
        taskList.map((task: InterfaceTask) => {
            if (task.content === taskContent) {
                taskExists = true;
            }
        });
    }
    if (taskExists === false)
        return true;
    else
        return false;
};
