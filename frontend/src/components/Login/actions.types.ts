import {createAction} from '@reduxjs/toolkit';

export const loginActionState = {
    SET_TOKEN: 'Login[SET_TOKEN]',

    RESET_TOKEN: 'Login[RESET_TOKEN]',
};

export const loginActions = {
    setToken: createAction(loginActionState['SET_TOKEN']),
    resetToken: createAction(loginActionState['RESET_TOKEN']),
};