import { Grid } from '@material-ui/core';
import * as React from 'react';
import { Button, Footer, Header, MainContent, TaskForm, TasksList } from '../../components/';
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_TODO } from '../../const/taskStatus';
import { checkExistingTask, checkValueIsNotEmpty, createUuid, getDateAndHour } from '../../helpers';
import { InterfaceTask, InterfaceTaskType } from '../../models';
import { TaskListsOrdered } from '../TaskListsOrdered';
import { MainContentStyled, TaskContentWrapper } from './Homepage.style';

interface HomepageState {
    value: string;
};

interface HomepageProps {
    isLoading: boolean;
    taskCreate: (task: InterfaceTask) => () => void;
    taskDelete: (uuid: string) => () => void;
    taskUpdate: (uuid: string, status: string) => () => void;
    taskClear: () => () => void;
    tasks: InterfaceTaskType;
};

class Homepage extends React.Component<HomepageProps, HomepageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
        };
    }

    private handleChange = (event: any) => this.setState({ value: event.target.value });

    private handleTaskCreate = () => {
        const taskContent = this.state.value;
        const taskList = this.props.tasks.taskList;

        if (checkExistingTask(taskContent, taskList) && checkValueIsNotEmpty(taskContent)) {  
            const task = {
                uuid: createUuid(),
                date: getDateAndHour(),
                content: taskContent,
                status: TASK_STATUS_TODO,
            }
            this.props.taskCreate(task);
        }
    }

    private handleTaskUpdate = (uuid: string, status: string) => () => {
        if (status === TASK_STATUS_TODO) {
            status = TASK_STATUS_IN_PROGRESS;
        }
        else if (status === TASK_STATUS_IN_PROGRESS) {
            status = TASK_STATUS_DONE;
        }
        else if (status === TASK_STATUS_DONE) {
            return false;
        }
        this.props.taskUpdate(uuid, status);
    };

    private handleTaskDelete = (uuid: string) => () => this.props.taskDelete(uuid);

    public render() {
        const taskList = this.props.tasks.taskList;
        return (
            <MainContentStyled>
                <Header />
                    <MainContent>
                        <Grid container={true}>
                            <TaskContentWrapper item={true} xs={12} sm={6}>
                                <TasksList tasks={taskList} handleTaskDelete={this.handleTaskDelete} handleTaskUpdate={this.handleTaskUpdate} />
                            </TaskContentWrapper>
                            <TaskContentWrapper item={true} xs={12} sm={6}>
                                <TaskForm value={this.state.value} handleChange={this.handleChange} handleTaskCreate={this.handleTaskCreate} />
                                <TaskListsOrdered />
                                {taskList.length > 0 && <Button color="primary" variant="contained" onClick={this.props.taskClear}>Clear tasks list</Button>}
                            </TaskContentWrapper>
                        </Grid>
                    </MainContent>
                <Footer />
            </MainContentStyled>
        );
    };
    
};

export { Homepage };