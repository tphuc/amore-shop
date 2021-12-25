import { Button, Divider, useMediaQuery, useModal, useTheme, Modal, Input } from '@geist-ui/react';
import React from 'react';
import Link from 'next/link'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Drawer} from '@geist-ui/react'
import { useCategories } from '../../frameworks/supabase/api/categories';
import { Menu, ShoppingBag, User, Search } from '@geist-ui/react-icons';
import '../../styles/Nav.module.css'
import {Cart} from '../Cart'
import { Profile } from '../Profile';
export function Nav({ ...props }) {
    const { data: categories } = useCategories()
    //const [anchorMenu, setAnchorMenu] = React.useState(null)
    const theme = useTheme();
    const isMobile = useMediaQuery('mobile')
    const { visible, setVisible, bindings } = useModal()
    const [searchInfo, setSearchInfo] = React.useState('')
    const [profileMenu, setProfileMenu] = React.useState(false)
    const [cartMenu, setCartMenu] = React.useState(false)
    return <>
        <style jsx>
            {`
            .nav-container {
                position: relative;
                box-sizing: border-box;
                min-height: 60px;
                width: 100vw;
                padding: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            a {
                color: ${theme.palette.accents_4};
                margin: 0.2em;
                transition: 0.3s ease;
            }
    
            a:hover{
                color: ${theme.palette.accents_6}; 
            }

            .logo-container {
                margin-right: 1em;
                cursor: pointer;
            }
            
            .nav-modal {
                transition: 0.2s
            }
        `}
        </style>
        <div className="nav-container" style = {{
            marginLeft: '2%',
        }}>
            <div className='logo-container' >
                <Link href='/'><p style = {{
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}>AMORE</p></Link>
            </div>
            {!isMobile && categories?.map((item, id) =>
            <div style = {{
                padding: '0% 1%'
            }}> <Link key={id} href={{ pathname:"/products", query: { category: item.id }  }}><a >{item.label}</a></Link>
            </div>)}
            <div style={{ marginLeft: "auto", marginRight: "5%", display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Input placeholder = "product" style = {{
                    width: '400px',
                    borderRadius: '50px'
                }} icon = {<Search/>} onChange = {(e) => {
                    setSearchInfo(e.target.value)
                }}>
                </Input>
                
                <Button type='abort' iconRight={<User />} onClick={() => setProfileMenu(!profileMenu)} auto px={0.6}></Button>
                <Button type='abort' iconRight={<ShoppingBag />} onClick={() => setCartMenu(true)} auto px={0.6}></Button>
                {isMobile && <Button onClick={() => setVisible(!visible)} type='abort' iconRight={<Menu />} auto px={0.6} />}
            </div>
            {visible && isMobile && <div className='nav-modal' style={{ width: "100vw", position: "fixed", bottom: 0, left: 0, boxSizing: "border-box", display:"flex", flexDirection:"column", alignItems:"center", height: "calc(100vh - 60px)", background: theme.palette.background, margin: 0 }}>
                    {categories?.map((item, id) => <Link key={id} href={{ pathname:"/products", query: { category: item.id }}}><a >{item.label}</a></Link>)} 
            </div>
            }
        </div>
        <Divider style={{ margin: 0, padding: 0 }} />
        <Cart open = {cartMenu} onClose = {() => setCartMenu(false)}/>
        <Profile open={profileMenu} onClose={() => setProfileMenu(false)}/>
    </>
}


