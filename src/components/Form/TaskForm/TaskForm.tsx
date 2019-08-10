import * as React from 'react';
import { Button, Textfield } from '../../';
import { FormTitle, FormWrapper } from './TaskForm.style'; 

interface ITaskFormProps {
    handleChange: (event: any) => void;
    handleTaskCreate: () => void;
    value: string;
}

const TaskForm: React.FC<ITaskFormProps> = ({ handleChange, handleTaskCreate, value }) => (
    <FormWrapper>
        <FormTitle variant="h3" color="primary">Manage ToDo list:</FormTitle>
        <form name='to_do_list'>
            <Textfield label='Type a task' value={value || ''} fullWidth={true} isRequired={true} onChange={handleChange} />
            <Button color='primary' variant='contained' fullWidth={true} onClick={handleTaskCreate}>Add a task</Button>
        </form>
    </FormWrapper>
);

export { TaskForm };