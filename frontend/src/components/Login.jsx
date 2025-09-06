import React from 'react';
import {GitHubIcon} from 'lucide-react';
import {styles} from './allStyles.module.scss';


export const Login = () => {
    const handleLogin = () => {
        console.log('Login button clicked');
    }
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}> Mini GitLab Client </h1>
            <button onClick={handleLogin} className={styles.loginButton}>
                <GitHubIcon size={20}/>
                Login with GitHub
            </button>
        </div>
    )
}