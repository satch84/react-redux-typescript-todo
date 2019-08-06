import * as uuid from 'uuid';

/** get current time and date */
export const getDateAndHour = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return `${date} ${time}`;
};

/** generate unique id (uuid) */
export const createUuid = () => {
    return uuid.v4();
};
