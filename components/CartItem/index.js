import React from 'react'
import styles from '../../styles/Cart.module.css'
import { X } from '@geist-ui/react-icons'
import { useCookies } from 'react-cookie'
import router from 'next/router'

export function CartItem({id, image, name, size, quantity, price, color , isCheckout}) {
    const [cookie, setCookie] = useCookies(['cart'])
    const removeItem = (id) => {
        let array = []
        let cartData = cookie.cart
        let index = cartData.findIndex(function(o){
            return o.id == id
        })
        if (index != -1) {
            cartData.splice(index, 1)
            setCookie('cart', cartData, {path: '/'})
            router.reload()
        }
    }
    return (
        <div className={styles.cartitemcontainer}>
            <img src={image} className={styles.imagerepresent}/>
            <div className={styles.cartcontent}>
                <p className={styles.cartitemtitle}>{name}</p>
                <p className={styles.cartitemsize}>Size: {size}</p>
                <div className={styles.cartitemcolor}>Color: {color}
                    <div style={{backgroundColor: color,
                    width: '15px',
                    height: '15px',
                    }} className={styles.cartitemcolortb}></div>
                </div>
                <div className={styles.cartitemquantityprice}>
                    <div className={styles.cartitemquantity}>{quantity}</div>
                    <div className={styles.cartitemprice}>{price} VND</div>
                </div>
            </div>
            {!isCheckout ? <div className={styles.cartitemremove} onClick={() => removeItem(id)}>
                <X/>
            </div> : null}
            
        </div>
    )
}
