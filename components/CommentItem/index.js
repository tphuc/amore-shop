import { Text } from '@geist-ui/react'
import React from 'react'


export default function CommentItem({data}){
    return <div>
        <Text h5 my={0}>{data?.user?.full_name}</Text>
        <Text my={0.5}>{data?.content}</Text>
    </div>
}