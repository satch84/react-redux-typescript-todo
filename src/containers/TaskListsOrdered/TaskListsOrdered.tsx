import { Typography } from '@material-ui/core';
import * as React from 'react';
import { InterfaceTaskType } from '../../models';
import { TasksListItem, TasksListTitle } from './TaskListsOrdered.style';

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
                <TasksListTitle variant="h3" color="primary">
                    ToDo list stats:
                </TasksListTitle>
                <ul>
                    <TasksListItem>
                        <Typography variant="body1">
                            TOTAL TASKS: <strong>{allTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                    <TasksListItem>
                        <Typography variant="body1">
                            Tasks to do: <strong>{todoTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                    <TasksListItem>
                        <Typography variant="body1">
                            In progress tasks: <strong>{inProgressTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                    <TasksListItem>
                        <Typography variant="body1" color="secondary">
                            Done tasks: <strong>{doneTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                </ul>
            </div>
        }
        </>
    );
};

export { TaskListsOrdered };
