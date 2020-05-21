import * as React from 'react';
import { Button, Textfield } from '../../';
import { InterfaceTask } from '../../../models';
import { FormTitle, FormWrapper } from './TaskForm.style'; 

export interface TaskFormProps {
    onChange: (event: any) => void;
    taskCreate: (tasks: InterfaceTask[], value: string) => void;
    tasks: InterfaceTask[];
    value: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ taskCreate, tasks, value, onChange }) => {
    const handleTaskCreate = () => taskCreate(tasks, value);

    return(
        <FormWrapper>
            <FormTitle variant="h3" color="primary">Manage ToDo list:</FormTitle>
            <form name='to_do_list'>
                <Textfield label='Type a task' value={value || ''} fullWidth={true} isRequired={true} onChange={onChange} />
                <Button
                    color='primary'
                    variant='contained'
                    fullWidth={true}
                    onClick={handleTaskCreate}
                >
                    Add a task
                </Button>
            </form>
        </FormWrapper>
    );
};
