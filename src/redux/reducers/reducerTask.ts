import { TASK__CLEAR, TASK__CREATE, TASK__DELETE, TASK__UPDATE } from '../../const/actions';
import { CreateTaskAction, DeleteTaskAction, IActionTypes, UpdateTaskAction } from '../../models';
import { initialState } from '../store/initialState';

export const tasks = (state = initialState.tasks, action: IActionTypes)   => {
    switch (action.type) {
        case TASK__CREATE: {
            const {
                task,
            } = action as CreateTaskAction;

            return [
                ...state,
                task,
            ];
        }

        case TASK__UPDATE: {
            const {
                uuid, status,
            } = action as UpdateTaskAction;

            return [
                ...state.map(
                    task => task.uuid === uuid ?
                    { ...task, status: status } : task
                ),
            ];
        }

        case TASK__DELETE: {
            const {
                uuid,
            } = action as DeleteTaskAction;

            return state.filter(task => task.uuid !== uuid);
        } 

        case TASK__CLEAR:
            return [];

        default:
            return state;
    }
};
