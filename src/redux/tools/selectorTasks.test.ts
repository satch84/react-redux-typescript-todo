import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_TODO } from '../../const/taskStatus';
import { initialState } from '../store/initialState';
import { getAllTasks, getDoneTasks, getInProgressTasks, getToDoTasks } from './selectorTasks';

const tasks = [
    {
        content: 'content',
        date: 'date',
        status: TASK_STATUS_TODO,
        uuid: 'uuid',
    },
    {
        content: 'content 2',
        date: 'date2',
        status: TASK_STATUS_IN_PROGRESS,
        uuid: 'uuid2',
    },
    {
        content: 'content 3',
        date: 'date3',
        status: TASK_STATUS_DONE,
        uuid: 'uuid3',
    }
];

describe('SelectorTasks', () => {
    it('#getAllTasks: return all the tasks from the store', () => {
        expect(getAllTasks({ ...initialState, tasks })).toEqual(['content', 'content 2', 'content 3']);
        expect(getAllTasks({ ...initialState})).toEqual([]);
    });

    it('#getDoneTasks: return all the done tasks from the store', () => {
        expect(getDoneTasks({ ...initialState, tasks })).toEqual([{
            content: 'content 3',
            date: 'date3',
            status: TASK_STATUS_DONE,
            uuid: 'uuid3',
        }]);
    });

    it('#getInProgressTasks: return all the in progress tasks from the store', () => {
        expect(getInProgressTasks({ ...initialState, tasks })).toEqual([{
            content: 'content 2',
            date: 'date2',
            status: TASK_STATUS_IN_PROGRESS,
            uuid: 'uuid2',
        }]);
    });

    it('#getToDoTasks: return all the todo tasks from the store', () => {
        expect(getToDoTasks({ ...initialState, tasks })).toEqual([{
            content: 'content',
            date: 'date',
            status: TASK_STATUS_TODO,
            uuid: 'uuid',
        }]);
    });
});
