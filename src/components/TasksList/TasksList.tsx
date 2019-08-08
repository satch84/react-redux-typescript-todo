import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';
import { Button, Fab } from '../';
import { InterfaceTask } from '../../models';

interface ITasksListProps {
    handleTaskUpdate: (uuid: string, status: string) => () => void;
    handleTaskDelete: (uuid: string) => () => void;
    tasks: InterfaceTask[],
};

const TasksList: React.FC<ITasksListProps> = ({ tasks, handleTaskDelete, handleTaskUpdate }) => (
    <ul>
        {tasks.length > 0 ?
            tasks.map((task: InterfaceTask, key: number) => {
                return (
                    <li key={task.uuid}>
                        {task.content}
                        | {task.date}
                        | <Button variant="outlined" onClick={handleTaskUpdate(task.uuid, task.status)}>{task.status}</Button>
                        | <Fab onClick={handleTaskDelete(task.uuid)}><DeleteIcon /></Fab>
                    </li>
                );
            })
            :
            <li>Aucune tâche créée</li>
        }
    </ul>
);

export { TasksList };