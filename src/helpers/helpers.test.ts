import { checkExistingTask, createUuid, getDateAndHour } from "./Helpers";

const tasks = [
    {
        content: 'content',
        date: 'date',
        status: 'to do',
        uuid: 'uuid',
    }
];

describe('Helpers', () => {
    test('should return current date and hour', () => {
        const today = new Date();
        const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const dateTime = `${date} ${time}`;

        expect(getDateAndHour()).toBeDefined();
        expect(getDateAndHour()).toEqual(dateTime);
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
