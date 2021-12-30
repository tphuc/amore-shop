import { Button, Divider, useMediaQuery, useModal, useTheme, Modal, ButtonDropdown, Text, Badge } from '@geist-ui/react';
import React from 'react';
import Link from 'next/link'
// import {Dropdown} from 'react-bootstrap'
import { useCategories } from '../../frameworks/supabase/swr/categories';
import { Menu, ShoppingBag, User, UserX } from '@geist-ui/react-icons';
import '../../styles/Nav.module.css'
import { Cart } from '../Cart'
import { Profile } from '../Profile';
import { supabase } from '../../frameworks/supabase';
import { useCookies } from 'react-cookie';

export function Nav({ ...props }) {
    const { data: categories } = useCategories()
    //const [anchorMenu, setAnchorMenu] = React.useState(null)
    const theme = useTheme();
    const isMobile = useMediaQuery('mobile');
    const [cookie, setCookie] = useCookies(['cart']);
    console.log(cookie)
    const { visible, setVisible, bindings } = useModal()
    const [searchInfo, setSearchInfo] = React.useState('')
    const [profileMenu, setProfileMenu] = React.useState(false)
    const [cartMenu, setCartMenu] = React.useState(false);
    const authedUser = supabase.auth.user();
    return <>
        <style jsx>
            {`
            .nav-container {
                position: relative;
                box-sizing: border-box;
                min-height: 60px;
                width: 100vw;
                padding-left: 2em;
                padding-right: 2em;

                display: flex;
                flex-direction: row;
                align-items: center;
                background:#fff;
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
        <div className="nav-container" style={{
            paddingLeft: '2em',
            paddingRight: '2em',
        }}>
            <div className='logo-container' >
                <Link href='/'><Text>AMORE</Text></Link>
            </div>
            {!isMobile && categories?.map((item, id) => <Link key={id} href={{ pathname: "/products", query: { category: item.id } }}><a >{item.label}</a></Link>)}
            <div style={{ marginLeft: "auto", marginRight: "0%", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                <Button type='abort' iconRight={<User />} auto px={0.6} onClick={() => setProfileMenu(true)}></Button>
                <Badge.Anchor>
            {cookie?.cart?.length > 0 && <Badge scale={0.5}>{cookie?.cart?.length}</Badge>}
                <Button py={0} type='abort' iconRight={<ShoppingBag />} onClick={() => setCartMenu(true)} auto px={0.6}></Button>
                </Badge.Anchor>
                {isMobile && <Button onClick={() => setVisible(!visible)} type='abort' iconRight={<Menu />} auto px={0.6} />}
            </div>
            {visible && isMobile && <div className='nav-modal' style={{ width: "100vw", position: "fixed", bottom: 0, left: 0, boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", height: "calc(100vh - 60px)", background: theme.palette.background, margin: 0 }}>
                {categories?.map((item, id) => <Link key={id} href={{ pathname: "/products", query: { category: item.id } }}><a >{item.label}</a></Link>)}
            </div>
            }
        </div>
        <Divider style={{ margin: 0, padding: 0 }} />
       
            <Cart open={cartMenu} onClose={() => setCartMenu(false)} />
       

        <Profile open={profileMenu} onClose={() => setProfileMenu(false)} />
    </>
}


