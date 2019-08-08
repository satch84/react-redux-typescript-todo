import { IActionTypes, ICreateTaskAction, IDeleteTaskAction, IUpdateTaskAction } from '../../models';
import { initialState } from '../store/initialState'; 
import { TASK__CREATE, TASK__DELETE, TASK__CLEAR, TASK__UPDATE } from '../../const/actions';

export const tasks = (state = initialState.tasks, action: IActionTypes)   => {
    const { type } = action;

    switch (type) {
        case TASK__CREATE:
            const {
                payload: { task },
            } = action as ICreateTaskAction;

            return {
                ...state,
                taskList: [...state.taskList, task]
            };

        case TASK__UPDATE:
            const {
                payload: { uuid, status },
            } = action as IUpdateTaskAction;

            return {
                ...state,
                taskList: state.taskList.map(task => task.uuid === uuid ?
                    { ...task, status: status } : task
                )
            };

        case TASK__DELETE: {
            const {
                payload: { uuid },
            } = action as IDeleteTaskAction;

            return {
                ...state,
                taskList: state.taskList.filter( task => task.uuid !== uuid )
            };
        } 

        case TASK__CLEAR:
            return {
                ...state,
                taskList: []
            };

        default:
            return state;
    }
};
