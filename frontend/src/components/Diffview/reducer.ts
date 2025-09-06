import { handleActions, ReduxCompatibleReducer } from 'redux-actions';
import { diffViewActionState } from './actions.types.ts';

export interface DiffViewState {
    diff: String,
}

export const diffViewInitialState: DiffViewState = {
    diff: '',
};

export const diffViewReducer: ReduxCompatibleReducer<DiffViewState, any> = handleActions<DiffViewState, any>({
    [diffViewActionState.SET_DIFF]: (state, action) => ({...state, diff: action.payload}),
    [diffViewActionState.RESET_DIFF]: (state) => ({...state, diff: ''}),
}, diffViewInitialState);