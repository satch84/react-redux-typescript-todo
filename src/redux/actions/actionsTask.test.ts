import { TASK__CLEAR, TASK__CREATE, TASK__DELETE, TASK__UPDATE } from '../../const/actions';
import { taskClear, taskCreate, taskDelete, taskUpdate } from './actionsTask';

const task = {
    content: 'content',
    date: 'date',
    status: 'to do',
    uuid: 'uuid',
};

describe('action tasks', () => {
    it('should send a TASK__CLEAR action', () => {
        const expectedAction = { 
            type: TASK__CLEAR,
        };
        expect(taskClear()).toEqual(expectedAction);
    });

    it('should send a TASK__CREATE action', () => {
        const expectedAction = {
            type: TASK__CREATE,
            task,
        };
        expect(taskCreate(task)).toEqual(expectedAction);
    });

    it('should send a TASK__DELETE action', () => {
        const expectedAction = {
            type: TASK__DELETE,
            uuid: 'taskUuid',
        };
        expect(taskDelete('taskUuid')).toEqual(expectedAction);
    });

    it('should send a TASK__UPDATE action', () => {
        const expectedAction = {
            type: TASK__UPDATE,
            uuid: 'taskUuid',
            status: 'new status',
         };
        expect(taskUpdate('taskUuid', 'new status')).toEqual(expectedAction);
    });
});
