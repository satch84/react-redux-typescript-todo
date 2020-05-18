import { Typography } from '@material-ui/core';
import * as React from 'react';
import { InterfaceTask } from '../../models';
import { TasksListItem, TasksListTitle } from './TaskListsOrdered.style';

export interface TaskListsOrderedProps {
    allTasksList: [],
    doneTasksList: [],
    todoTasksList: [],
    inProgressTasksList: [],
    tasks: InterfaceTask[];
};

export const TaskListsOrdered: React.FC<TaskListsOrderedProps> = ({ allTasksList, doneTasksList, todoTasksList, inProgressTasksList, tasks }) => {
    return(
        <>
        {tasks.length > 0 &&
            <div>
                <TasksListTitle variant="h3" color="primary">
                    ToDo list stats:
                </TasksListTitle>
                <ul>
                    <TasksListItem>
                        <Typography variant="body1">
                            Total tasks: <strong>{allTasksList.length}</strong>
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
