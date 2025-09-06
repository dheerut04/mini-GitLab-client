import { connect } from 'react-redux';
import { Login } from './Login';
import {loginActions} from './actions.types';

const mapstateToProps = (state: any) => ({
    token: state.login.token,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        resetToken: () => dispatch(loginActions.resetToken()),
        setToken: (token: string) => dispatch(loginActions.setToken(token)),
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Login);