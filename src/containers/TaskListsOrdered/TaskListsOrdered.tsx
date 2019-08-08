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
                <div>Total des tâches {allTasksList.length}</div>
                <div>Tâches terminées {doneTasksList.length}</div>
                <div>Tâches en cours {inProgressTasksList.length}</div>
                <div>Tâches à faire {todoTasksList.length}</div>
            </div>
        }
        </>
    );
};

export { TaskListsOrdered };
