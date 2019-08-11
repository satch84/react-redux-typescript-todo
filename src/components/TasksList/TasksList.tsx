import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';
import { Button, Fab } from '../';
import { TASK_STATUS_DONE } from '../../const/taskStatus';
import { InterfaceTask } from '../../models';
import { 
    ButtonWrapper,
    TaskContent,
    TaskContentWrapper,
    TaskDateWrapper,
    TaskItem,
    TaskItemList
} from './TasksList.style';

interface ITasksListProps {
    handleTaskUpdate: (uuid: string, status: string) => () => void;
    handleTaskDelete: (uuid: string) => () => void;
    tasks: InterfaceTask[],
};

const TasksList: React.FC<ITasksListProps> = ({ tasks, handleTaskDelete, handleTaskUpdate }) => (
    <TaskItemList>
        {tasks.length > 0 ?
            tasks.map((task: InterfaceTask, key: number) => {
                return (
                    <TaskItem key={key}>
                        <TaskDateWrapper>
                            <Typography variant="body2" color="primary">{task.date}</Typography>
                        </TaskDateWrapper>
                        <TaskContentWrapper>
                            <TaskContent variant="body1">{task.content}</TaskContent>
                        </TaskContentWrapper>
                        <ButtonWrapper>
                            <Button variant="contained" color="primary" onClick={handleTaskUpdate(task.uuid, task.status)} isDisabled={task.status === TASK_STATUS_DONE}>{task.status}</Button>
                            <Fab onClick={handleTaskDelete(task.uuid)} size="small" color="secondary">
                                <DeleteIcon />
                            </Fab>
                        </ButtonWrapper>
                    </TaskItem>
                );
            })
            :
            <TaskItem>No task has been created yet!</TaskItem>
        }
    </TaskItemList>
);

export { TasksList };