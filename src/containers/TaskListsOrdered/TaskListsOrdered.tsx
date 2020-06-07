import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InterfaceTask } from '../../models';
import { TasksListItem, TasksListTitle } from './TaskListsOrdered.style';

export interface TaskListsOrderedProps {
    allTasksList: [],
    doneTasksList: [],
    todoTasksList: [],
    inProgressTasksList: [],
    tasks: InterfaceTask[];
}

export const TaskListsOrdered: React.FC<TaskListsOrderedProps> = ({ allTasksList, doneTasksList, todoTasksList, inProgressTasksList, tasks }) => {
    const { t } = useTranslation();

    return(
        <>
        {tasks.length > 0 &&
            <div>
                <TasksListTitle variant="h3" color="primary">
                    {t('list_stats')}
                </TasksListTitle>
                <ul>
                    <TasksListItem>
                        <Typography variant="body1">
                            {t('total_tasks')} <strong>{allTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                    <TasksListItem>
                        <Typography variant="body1">
                            {t('todo_tasks')} <strong>{todoTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                    <TasksListItem>
                        <Typography variant="body1">
                            {t('progress_tasks')} <strong>{inProgressTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                    <TasksListItem>
                        <Typography variant="body1" color="secondary">
                            {t('done_tasks')} <strong>{doneTasksList.length}</strong>
                        </Typography>
                    </TasksListItem>
                </ul>
            </div>
        }
        </>
    );
};
