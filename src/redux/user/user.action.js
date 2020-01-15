import { UserActinTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActinTypes.SET_CURRENT_USER,
    payload: user
});