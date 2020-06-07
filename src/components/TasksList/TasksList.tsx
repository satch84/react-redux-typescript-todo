import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Fab } from '../';
import { TASK_STATUS_DONE } from '../../const/taskStatus';
import { InterfaceTask } from '../../models';
import { 
    ButtonWrapper,
    TaskContent,
    TaskContentWrapper,
    TaskDateWrapper,
    TaskItem,
    TaskItemList,
    TaskTitle,
} from './TasksList.style';

export interface TasksListProps {
    taskUpdate: (uuid: string, status: string) => void,
    taskDelete: (uuid: string) => void,
    tasks: InterfaceTask[],
}

export const TasksList: React.FC<TasksListProps> = ({ tasks, taskDelete, taskUpdate }) => {
    const { t } = useTranslation();
    const handleTaskUpdate = (uuid: string, status: string) => () => taskUpdate(uuid, status);
    const handleTaskDelete = (uuid: string) => () => taskDelete(uuid);

    return(
        <TaskItemList>
            {tasks.length > 0 ?
                tasks.map((task: InterfaceTask, key: number) => {
                    return (
                        <TaskItem key={key}>
                            <TaskDateWrapper>
                                <TaskTitle variant="body2" color="primary">{task.date}</TaskTitle>
                            </TaskDateWrapper>
                            <TaskContentWrapper>
                                <TaskContent variant="body1">{task.content}</TaskContent>
                            </TaskContentWrapper>
                            <ButtonWrapper>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleTaskUpdate(task.uuid, task.status)}
                                    isDisabled={task.status === TASK_STATUS_DONE}
                                    dataTestId="button-task-update"
                                >
                                    {task.status}
                                </Button>
                                <Fab 
                                    onClick={handleTaskDelete(task.uuid)}
                                    size="small"
                                    color="secondary"
                                    dataTestId="button-task-delete"
                                >
                                    <DeleteIcon />
                                </Fab>
                            </ButtonWrapper>
                        </TaskItem>
                    );
                })
                :
                <TaskItem>{t('no_task_created')}</TaskItem>
            }
        </TaskItemList>
    );
};
