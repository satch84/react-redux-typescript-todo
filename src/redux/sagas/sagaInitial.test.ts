import { put, takeLatest } from 'redux-saga/effects';
import { INITIAL__INIT } from '../../const/actions';
import { loadingStartAction, loadingStopAction } from '../actions';
import * as sagaInitial from './sagaInitial';

describe('test sagaInitial', () => {
    describe('Test the watcher: watchInit', () => {
        let generator: ReturnType<typeof sagaInitial.watchInitial>;
        beforeAll(() => {
            generator = sagaInitial.watchInitial();
        });

        it('should get a watcher for all INITIAL__INIT', () => {
            const expected = takeLatest(INITIAL__INIT, sagaInitial.init);
            const actual = generator.next().value;
            expect(actual).toEqual(expected);
        });

        it('should return undefined', () => {
            const expected: any = undefined;
            const actual = generator.next().value;
            expect(actual).toEqual(expected);
        });
    });

    describe('Test saga: init', () => {
        describe('Test the normal init flow', () => {
            let generator: ReturnType<typeof sagaInitial.init>;
            beforeAll(() => {
                generator = sagaInitial.init();
            });

            it('should call all the loaders actions', () => {
                expect(generator.next().value).toEqual(put(loadingStartAction()));
                expect(generator.next().value).toEqual(put(loadingStopAction()));
            });
        });
    });
});
