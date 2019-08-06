import * as React from 'react';
import { HomepageMainStyled } from './Homepage.style';
import { Button, Footer, Header, MainContent, Textfield } from '../../components/';
import { getDateAndHour, createUuid } from '../../helpers';
import { InterfaceTask, InterfaceTaskType } from '../../models';
import { TASK_STATUS_TODO, TASK_STATUS_IN_PROGRESS, TASK_STATUS_DONE } from '../../const/taskStatus';

interface HomepageState {
    value: string;
};

interface HomepageProps {
    isLoading: boolean;
    taskCreate: (task: InterfaceTask) => () => void;
    taskDelete: (uuid: string) => () => void;
    taskUpdate: (uuid: string, status: string) => () => void;
    taskClear: () => () => void;
    allTasksList: [],
    doneTasksList: [],
    todoTasksList: [],
    inProgressTasksList: [],
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

    private checkExistingTask = (taskContent: string) => {
        const taskList = this.props.tasks.taskList;
        let taskExists = false;

        if (taskList.length > 0) {
            taskList.map((task: InterfaceTask, key: number) => {
                if (task.content === taskContent) {
                    alert('Cette tâche existe déjà !');
                    taskExists = true;
                }
            });
        }
        if (taskExists === false)
            return true;
        else
            return false;
    };

    private handleTaskCreate = () => {
        const taskContent = this.state.value;

        if (this.checkExistingTask(taskContent)) {    
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
        const { allTasksList, doneTasksList, todoTasksList, inProgressTasksList } = this.props;
 
        return (
            <>
                <Header />
                    <MainContent>
                        <HomepageMainStyled>
                            {/** form */}
                            <form name='to_do_list'>
                                <Textfield label='Entrez une tâche' value={this.state.value || ''} isRequired={true} onChange={this.handleChange} />
                                <Button color='primary' variant='outlined' onClick={this.handleTaskCreate}>Ajouter</Button>
                            </form>
                            {/** tasksList */}
                            <ul>
                                {/* tslint:disable-next-line: jsx-no-multiline-js */}
                                {taskList.length > 0 ?
                                    taskList.map((task: InterfaceTask, key: number) => {
                                        return (
                                            <li key={task.uuid}>
                                                {task.content}
                                                | {task.date}
                                                | <Button variant="outlined" onClick={this.handleTaskUpdate(task.uuid, task.status)}>{task.status}</Button>
                                                | <Button variant="outlined" onClick={this.handleTaskDelete(task.uuid)}>DELETE</Button>
                                            </li>
                                        );
                                    })
                                :
                                    <li>Aucune tâche créée</li>
                                }
                            </ul>
                            {/** button => clear task list */}
                            {taskList.length > 0 && <Button variant="outlined" onClick={this.props.taskClear}>Supprimer toutes les tâches</Button>}
                            {/** stats */}
                            <p>
                                {/** selectors go here */}
                            </p>
                        </HomepageMainStyled>         
                    </MainContent>
                <Footer />
            </>
        );
    };
    
};

export { Homepage };