import React from 'react'
import styles from '../../styles/Cart.module.css'
import { Drawer } from '@geist-ui/react'
import { CartItem } from '../CartItem'
import { useRouter } from 'next/router'
import {useCookies} from 'react-cookie'
const images = [
    {
        url: 'https://static-buyma-jp.akamaized.net/imgdata/item/210629/0070803294/368058123/428.jpg'
    }
]
export function Cart({open, onClose, isCheckout}) {
    const router = useRouter()
    const [data, setData] = React.useState([])
    const [cookie, setCookie] = useCookies(['cart'])
    React.useEffect(() => {
        setData(cookie.cart)
    })
    return (
        <>
        <Drawer visible={open} onClose={onClose} placement="right" style={{
            width: '35%'
        }}>
            <Drawer.Title style={{
                borderBottom: '1px solid lightgray',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '0px 20px',
                paddingBottom: '2%',
                justifyContent: 'center',
            }}>Shopping Cart
            <div style={{
                marginLeft: 'auto',
            }} onClick={() => setProfileMenu(false)}>
            </div>
            </Drawer.Title>
            <Drawer.Content style={{
                margin: '0% 4%'
            }}>
                {data.map(item => <CartItem
                id = {item.id}
                image = {item.image}
                name={item.name}
                size={item.size}
                quantity={item.quantity}
                price={item.price}
                color={item.color}
                isCheckout = {isCheckout}
                />)}
            </Drawer.Content>
            <Drawer.Content style={{margin: '0% 4%'}}>
                {!isCheckout? <div className={styles.checkoutbutton} onClick={() => {router.push('/checkout')}}>Checkout</div> : null}
                
            </Drawer.Content>
        </Drawer>
        </>
        
    )
}

let tempData = [
    {
        id: 1,
        name: 'T-Shirt 1',
        size: 'M',
        quantity: 1,
        color:'green',
        price: '3000'
    },
    {
        id: 2,
        name: 'Shirt 2',
        size: 'S',
        quantity: 2,
        color:'red',
        price: '5000'
    },
    {
        id: 3,
        name: 'Pant',
        size: 'L',
        quantity: 3,
        color:'blue',
        price: '40000'
    },
    {
        id: 4,
        name: 'Pant 2',
        size: 'L',
        quantity: 3,
        color:'cyan',
        price: '40000'
    }
]