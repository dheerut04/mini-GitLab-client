import { handleActions, ReduxCompatibleReducer } from 'redux-actions';
import { loginActionState } from './actions.types.ts';
export interface LoginState {
    token: string,
}

export const logInInitialState: LoginState = {
    token: '',
};


export const loginReducer: ReduxCompatibleReducer<LoginState, any> = handleActions<LoginState, any>({
    [loginActionState.SET_TOKEN]: (state, action) => ({...state, token: action.payload}),
    [loginActionState.RESET_TOKEN]: (state) => ({...state, token: ''}),
}, logInInitialState);