import { Text } from '@geist-ui/react'
import React from 'react'


export default function CommentItem({data}){
    return <div>
        <Text h5 my={0}>{data?.user?.full_name}, <Text type='secondary' span>{new Date(data?.created_at).toLocaleString()}</Text></Text>
        <Text my={0.5}>{data?.content}</Text>
    </div>
}