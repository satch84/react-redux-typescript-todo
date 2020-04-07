import { Grid } from '@material-ui/core';
import * as React from 'react';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { TaskForm } from '../../components/Form';
import { Header } from '../../components/Header';
import { MainContent } from '../../components/MainContent';
import { TasksList } from '../../components/TasksList';
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_TODO } from '../../const/taskStatus';
import { checkExistingTask, checkValueIsNotEmpty, createUuid, getDateAndHour } from '../../helpers';
import { InterfaceTask } from '../../models';
import { TaskListsOrdered } from '../TaskListsOrdered';
import { MainContentStyled, TaskContentWrapper } from './Homepage.style';

export interface HomepageProps {
    taskCreate: (task: InterfaceTask) => void;
    taskDelete: (uuid: string) => void;
    taskUpdate: (uuid: string, status: string) => void;
    taskClear: () => void;
    tasks: InterfaceTask[];
};

export const Homepage: React.FC<HomepageProps> = ({ taskCreate, taskDelete, taskUpdate, taskClear, tasks }) => {
    const [value, setValue] = React.useState(null);

    const handleChange = (event: any) => setValue(event.target.value);

    const handleTaskCreate = () => {
        const taskContent = value;
        const taskList = tasks;

        if (checkExistingTask(taskContent, taskList) && checkValueIsNotEmpty(taskContent)) {  
            const task = {
                uuid: createUuid(),
                date: getDateAndHour(),
                content: taskContent,
                status: TASK_STATUS_TODO,
            }
            taskCreate(task);
        }
    }

    const handleTaskUpdate = (uuid: string, status: string) => () => {
        switch (status) {
            case TASK_STATUS_TODO:
                status = TASK_STATUS_IN_PROGRESS;
                break;
            case TASK_STATUS_IN_PROGRESS:
                status = TASK_STATUS_DONE;
                break;
            case TASK_STATUS_DONE:
            default:
                return;
        }
        taskUpdate(uuid, status);
    };

    const handleTaskDelete = (uuid: string) => () => taskDelete(uuid);

    const taskList = tasks;
    return (
        <MainContentStyled>
            <Header />
            <MainContent>
                <Grid container={true}>
                    <TaskContentWrapper item={true} xs={12} sm={6}>
                        <TasksList tasks={taskList} handleTaskDelete={handleTaskDelete} handleTaskUpdate={handleTaskUpdate} />
                    </TaskContentWrapper>
                    <TaskContentWrapper item={true} xs={12} sm={6}>
                        <TaskForm value={value} handleChange={handleChange} handleTaskCreate={handleTaskCreate} />
                        <TaskListsOrdered />
                        {taskList.length > 0 && <Button color="primary" variant="contained" onClick={taskClear}>Clear tasks list</Button>}
                    </TaskContentWrapper>
                </Grid>
            </MainContent>
            <Footer />
        </MainContentStyled>
    );
};
