import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Textfield } from '../../';
import { InterfaceTask } from '../../../models';
import { FormTitle, FormWrapper } from './TaskForm.style'; 

export interface TaskFormProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    taskCreate: (tasks: InterfaceTask[], value: string) => void;
    tasks: InterfaceTask[];
    value: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ taskCreate, tasks, value, onChange }) => {
    const { t } = useTranslation();  
    const handleTaskCreate = () => taskCreate(tasks, value);

    return(
        <FormWrapper>
            <FormTitle variant="h3" color="primary">{t('manage_to_do_list')}</FormTitle>
            <form name='to_do_list'>
                <Textfield label={t('type_task')} value={value || ''} fullWidth={true} isRequired={true} onChange={onChange} />
                <Button
                    color='primary'
                    variant='contained'
                    fullWidth={true}
                    onClick={handleTaskCreate}
                >
                    {t('add_task')}
                </Button>
            </form>
        </FormWrapper>
    );
};
