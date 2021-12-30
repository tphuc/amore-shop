import { Card, Image, Link, Text } from '@geist-ui/react';
import React from 'react';
import { formatNumber } from '../../utils';
import { CartItem } from '../CartItem';


export default function OrderItem({ data }) {
    console.log(data)
    return <Card>
        <Text my={0} type='secondary'>{new Date(data?.created_at).toLocaleString()}</Text>
        <Text span type='secondary'>Order <b>#{data?.id}</b></Text>
        {data?.cart?.map((item, id) => <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={id}>
            <Image width={'100px'} height={'100px'} alt='' src={item?.image}></Image>
            <div style={{ flex: 1 }}>
                <Text ><Link href={`/products/${item?.id}`}><b>{item?.name}</b></Link> x {item?.quantity} <Text>{formatNumber(item?.price)}</Text></Text>
            </div>
        </div>)}
        <Text>Total: {formatNumber(data?.total)}</Text>

    </Card>
}