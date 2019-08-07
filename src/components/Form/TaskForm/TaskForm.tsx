import * as React from 'react';
import { Button, Textfield } from '../../';

interface ITaskFormProps {
    handleChange: (event: any) => void;
    handleTaskCreate: () => void;
    value: string;
}

const TaskForm: React.FC<ITaskFormProps> = ({ handleChange, handleTaskCreate, value }) => (
    <form name='to_do_list'>
        <Textfield label='Entrez une tâche' value={value || ''} isRequired={true} onChange={handleChange} />
        <Button color='primary' variant='outlined' onClick={handleTaskCreate}>Ajouter</Button>
    </form>
);

export { TaskForm };