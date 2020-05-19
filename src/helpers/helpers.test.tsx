import { checkExistingTask, createUuid, getDateAndHour } from "./Helpers";

const tasks = [
    {
        content: 'content',
        date: 'date',
        status: 'to do',
        uuid: 'uuid',
    }
]

describe('Helpers', () => {
    test('should return current date and hour', () => {
        expect(getDateAndHour()).toBeDefined();
    });

    test('should return an uuid', () => {
        expect(createUuid()).toBeDefined();
    });

    test('should check if a task already exist', () => {
        expect(checkExistingTask('content', tasks)).toBeFalsy();
        expect(checkExistingTask('new content', tasks)).toBeTruthy();
        expect(checkExistingTask('content', [])).toBeTruthy();
    });
});
