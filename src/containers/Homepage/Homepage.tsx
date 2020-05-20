import { Grid } from '@material-ui/core';
import * as React from 'react';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { TaskForm } from '../../components/Form';
import { Header } from '../../components/Header';
import { MainContent } from '../../components/MainContent';
import { TasksList } from '../../components/TasksList';
import { InterfaceTask } from '../../models';
import { Modal } from '../Modal';
import { TaskListsOrdered } from '../TaskListsOrdered';
import { MainContentStyled, TaskContentWrapper } from './Homepage.style';

export interface HomepageProps {
    checkTaskUpdate: (uuid: string, status: string) => void;
    checkTaskDelete: (uuid: string) => void;
    isModalOpened: boolean;
    checkTaskCreate: (taskList: InterfaceTask[], value: string) => void;
    checkTaskClear: () => void;
    tasks: InterfaceTask[];
    modalType: string;
    cancelModal: () => void;
    confirmModal: () => void;
};

export const Homepage: React.FC<HomepageProps> = ({
    checkTaskUpdate,
    checkTaskDelete,
    isModalOpened,
    checkTaskClear,
    checkTaskCreate,
    tasks,
    modalType,
    cancelModal,
    confirmModal,
}) => {
    const [value, setValue] = React.useState(null);

    const handleChange = (event: any) => setValue(event.target.value);
    const handleTaskCreate = () => checkTaskCreate(tasks, value);
    const handleTaskUpdate = (uuid: string, status: string) => () => checkTaskUpdate(uuid, status);
    const handleCheckTaskDelete = (uuid: string) => () => checkTaskDelete(uuid);

    return (
        <MainContentStyled>
            {isModalOpened && <Modal type={modalType} onCancel={cancelModal} onConfirm={confirmModal} />}
            <Header />
            <MainContent>
                <Grid container={true}>
                    <TaskContentWrapper item={true} xs={12} sm={6}>
                        <TasksList tasks={tasks} handleTaskDelete={handleCheckTaskDelete} handleTaskUpdate={handleTaskUpdate} />
                    </TaskContentWrapper>
                    <TaskContentWrapper item={true} xs={12} sm={6}>
                        <TaskForm
                            value={value}
                            handleChange={handleChange}
                            handleTaskCreate={handleTaskCreate}
                        />
                        <TaskListsOrdered />
                        {tasks.length > 0 && 
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={checkTaskClear}
                                data-testid="clear-button"
                            >
                                Clear tasks list
                            </Button>
                        }
                    </TaskContentWrapper>
                </Grid>
            </MainContent>
            <Footer />
        </MainContentStyled>
    );
};
