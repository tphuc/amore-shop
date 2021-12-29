import React from 'react'
import styles from '../../styles/Login.module.css'
import {Input, Spacer} from '@geist-ui/react'
export default function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <div className={styles.logincontainer}>
            <div className={styles.logincard}>
                <div className={styles.logintitle}>LOGIN</div>
                <div className={styles.loginusername}>
                    <Input style={{
                        borderRadius: '20px'
                    }} type='secondary' placeholder='username' width="100%" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={styles.loginusername}>
                    <Input type='secondary' placeholder='password' width="100%" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.loginbutton}>
                    LOGIN
                </div>
            </div>
        </div>
    )
}
