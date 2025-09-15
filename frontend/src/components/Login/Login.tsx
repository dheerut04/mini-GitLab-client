import React, { useEffect, useState } from 'react';
import {LockOpen, Lock } from 'lucide-react';
import { Button, Input } from '@headlessui/react'
//@ts-ignore
import styles from '../allStyles.module.scss';

interface loginProps {
    token: string,
};

interface loginActionProps {
    resetToken: () => void
    setToken: (token: string) => void
};

export const Login: React.FC<loginActionProps & loginProps> = (props) => {

    const [input, setIntput] = useState('');
    const [icon, setIcon] = useState<any>(LockOpen);

    useEffect(() => {
        if(input.length === 0) {
            setIcon(LockOpen);
        }
    }, [input]);

    const handleLogin = () => {
        console.log('Login button clicked');
        setIcon(Lock);
        props.setToken(input);
    }

    const Icon = icon;
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}> Mini GitLab Client </h1>
            <Input 
                type="text" 
                placeholder="Enter your GitLab Personal Access Token" 
                value={input}
                required    
                onChange={(e) => setIntput(e.target.value)}
                className={styles.loginInput}
            />
            <Button onClick={handleLogin} className={ input.length === 0 ? styles.loginButtonDisabled : styles.loginButton} disabled={input.length === 0}>
                <Icon size={20} style={{marginRight: '0.25rem'}}/>
                Login with GitLab
            </Button>
        </div>
    )
}