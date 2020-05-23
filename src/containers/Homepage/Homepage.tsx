import { Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { TaskForm } from '../../components/Form';
import { MainContent } from '../../components/MainContent';
import { TasksList } from '../../components/TasksList';
import { InterfaceTask } from '../../models';
import { Header } from '../Header';
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
    const { t } = useTranslation();

    const [taskValue, setTaskValue] = React.useState(null);

    const handleChange = (event: any) => setTaskValue(event.target.value);

    return (
        <MainContentStyled>
            {isModalOpened && <Modal type={modalType} onCancel={cancelModal} onConfirm={confirmModal} />}
            <Header />
            <MainContent>
                <Grid container={true}>
                    <TaskContentWrapper item={true} xs={12} sm={6}>
                        <TasksList tasks={tasks} taskDelete={checkTaskDelete} taskUpdate={checkTaskUpdate} />
                    </TaskContentWrapper>
                    <TaskContentWrapper item={true} xs={12} sm={6}>
                        <TaskForm
                            value={taskValue}
                            onChange={handleChange}
                            tasks={tasks}
                            taskCreate={checkTaskCreate}
                        />
                        <TaskListsOrdered />
                        {tasks.length > 0 && 
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={checkTaskClear}
                                data-testid="clear-button"
                            >
                                {t('clear_task_list')}
                            </Button>
                        }
                    </TaskContentWrapper>
                </Grid>
            </MainContent>
            <Footer />
        </MainContentStyled>
    );
};
