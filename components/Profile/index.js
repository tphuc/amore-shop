import React from 'react'
import { Drawer } from '@geist-ui/react'
import styles from '../../styles/Profile.module.css'
import { User } from '@geist-ui/react-icons'
import router from 'next/router'

export function Profile({open, onClose, isLoggedIn}) {
    let user = {
        name: 'David',
        address: '48 Wall Streat'
    }
    return (
        <>
            <Drawer visible={open} onClose={onClose} placement="right" style={{
                width: '25%'
            }}>
                <Drawer.Title style={{
                    borderBottom: '1px solid lightgray',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '0px 20px',
                    paddingBottom: '2%',
                    justifyContent: 'center',
                }}>Profile
                <div style={{
                    marginLeft: 'auto',
                }} onClick={() => setProfileMenu(false)}>
                </div>
                </Drawer.Title>
                <Drawer.Content style={{
                    margin: '0% 4%',
                    width: '92%'
                }}>
                    <div className={styles.profilecontainer}>
                        <div className={styles.profile}>
                            <div className={styles.profileusericon}>
                                <User size={60}/>
                            </div>
                            {isLoggedIn ? <p className={styles.profileusername}>{user.name}</p> : <div></div>}
                            
                        </div>
                        <div className={styles.profilecontent}>
                            {isLoggedIn ? <div>
                                <div className={styles.profilebutton} onClick={() => router.push('/profile')}>Profile</div>
                                <div className={styles.profilebutton}>Setting</div>
                                <div className={styles.profilebutton}>Help</div>
                                <div className={styles.profilebutton}>Logout</div>
                            </div> : <div>
                                <div className={styles.profilebutton}>Sign In</div>
                                <div className={styles.profilebutton}>Sign Up</div>
                                </div>}
                            
                        </div>
                    </div>
                </Drawer.Content>
        </Drawer>
        </>
    )
}

