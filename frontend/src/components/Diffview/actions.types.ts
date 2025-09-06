import {createAction} from '@reduxjs/toolkit';

export const diffViewActionState = {
    SET_DIFF: 'DiffView[SET_DIFF]',
    RESET_DIFF: 'DiffView[RESET_DIFF]',
};

export const diffViewActions = {
    setDiff: createAction(diffViewActionState['SET_DIFF']),
    resetDiff: createAction(diffViewActionState['RESET_DIFF']),
};