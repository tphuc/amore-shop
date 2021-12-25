import React from 'react'
import styles from '../../styles/Cart.module.css'
import { X } from '@geist-ui/react-icons'

export function CartItem({image, name, size, quantity, price, color}) {
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
            <div className={styles.cartitemremove}>
                <X/>
            </div>
        </div>
    )
}
