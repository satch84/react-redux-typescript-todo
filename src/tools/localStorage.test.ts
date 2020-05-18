import { clearState, loadSerializedState, saveState } from './localStorage';

const state = {
    tasks: [
        {
            content: 'content',
            date: 'date',
            status: 'to do',
            uuid: 'uuid',
        }
    ]
};

describe('localStorage', () => {
    it('should return undefined when the persisted state is empty', () => {
        const getItem = jest.spyOn(window.localStorage.__proto__, 'getItem');
        const expectedValue = loadSerializedState();

        expect(getItem).toHaveBeenCalled();
        expect(expectedValue).toEqual(undefined);
    });
    it('should save the input state', () => {
        const expectedValue = JSON.stringify(state);
        const setItem = jest.spyOn(window.localStorage.__proto__, 'setItem');
        saveState(state);

        expect(setItem).toHaveBeenCalledWith('current_tasklist', expectedValue);
    });
    it('should return undefined when the persisted state is empty', () => {
        const getItem = jest.spyOn(window.localStorage.__proto__, 'getItem');
        const expectedValue = loadSerializedState();

        expect(getItem).toHaveBeenCalled();
        expect(expectedValue).toEqual(state);
    });

    it('should save the input state', () => {
        const getItem = jest.spyOn(window.localStorage.__proto__, 'getItem');
        saveState(state);
        const expectedValue = loadSerializedState();

        expect(getItem).toHaveBeenCalledWith('current_tasklist');
        expect(expectedValue).toEqual(state);
    });

    it('should clear the persisted state', () => {
        const getItem = jest.spyOn(window.localStorage.__proto__, 'getItem');
        saveState(state);
        clearState();
        const expectedValue = loadSerializedState();

        expect(getItem).toHaveBeenCalledWith('current_tasklist');
        expect(expectedValue).toEqual(undefined);
    });
});