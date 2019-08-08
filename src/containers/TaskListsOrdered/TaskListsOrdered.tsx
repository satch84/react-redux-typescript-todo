import * as React from 'react';
import { InterfaceTaskType } from '../../models';

interface ITaskListsOrderedProps {
    allTasksList: [],
    doneTasksList: [],
    todoTasksList: [],
    inProgressTasksList: [],
    tasks: InterfaceTaskType;
};

const TaskListsOrdered: React.FC<ITaskListsOrderedProps> = props => {
    const { allTasksList, doneTasksList, todoTasksList, inProgressTasksList, tasks } = props;
    return(
        <>
        {tasks.taskList.length > 0 &&
            <div>
                <strong>Suivi de votre to-do list</strong>
                <ul>
                    <li>Total des tâches : <strong>{allTasksList.length}</strong></li>
                    <li>Tâches terminées : <strong>{doneTasksList.length}</strong></li>
                    <li>Tâches en cours : <strong>{inProgressTasksList.length}</strong></li>
                    <li>Tâches à faire : <strong>{todoTasksList.length}</strong></li>
                </ul>
            </div>
        }
        </>
    );
};

export { TaskListsOrdered };
