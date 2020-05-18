import { TASK__CLEAR, TASK__CREATE, TASK__DELETE, TASK__UPDATE } from '../../const/actions';
import { initialState } from '../store/initialState';
import { tasks } from './reducerTask';

const task = {
    content: 'content',
    date: 'date',
    status: 'to do',
    uuid: 'taskUuid',
};

const updatedTask = {
    ...task,
    status: 'in progress',
};

describe('Task reducer', () => {
    it('should return the initial state', () => {
        expect(tasks([], { type: '' })).toEqual(initialState.tasks);
    });

    it('should handle TASK__CLEAR', () => {
        expect(
            tasks([task], {
                type: TASK__CLEAR,
            }),
        ).toEqual([]);
    });

    it('should handle TASK__CREATE', () => {
        expect(
            tasks([], {
                type: TASK__CREATE,
                task,
            }),
        ).toEqual([task]);
    });

    it('should handle TASK__DELETE', () => {
        expect(
            tasks([task], {
                type: TASK__DELETE,
                uuid: 'taskUuid',
            }),
        ).toEqual([]);
    });

    it('should handle TASK__UPDATE', () => {
        expect(
            tasks([task], {
                type: TASK__UPDATE,
                uuid: 'taskUuid',
                status: 'in progress',
            }),
        ).toEqual([updatedTask]);

        expect(
            tasks([task], {
                type: TASK__UPDATE,
                uuid: 'uuid',
                status: 'in progress',
            }),
        ).toEqual([task]);
    });
});
