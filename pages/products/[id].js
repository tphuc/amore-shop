import { Button, Grid, Spacer, Text } from '@geist-ui/react'
import { ShoppingBag } from '@geist-ui/react-icons'
import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import { Nav } from '../../components/Nav'
const images = [
    {
        url: 'https://static-buyma-jp.akamaized.net/imgdata/item/210629/0070803294/368058123/428.jpg'
    }
]
export default function Item() {
    return <div>
        <Nav />
        <Grid.Container gap={6} justify="center" height='100vh'>
            <Grid xs={24} md={24} lg={12} xl={12}>
                <ImageSlider images={images} />
            </Grid>
            <Grid xs={24} md={24} lg={10} xl={10} >
                <div style={{width:'100%'}}>
                <Text h2>Product Name</Text>
                <Spacer h={0.5} />
                <Button
                    onClick={() => null}
                    scale={2} type='secondary-light' iconRight={<ShoppingBag />} width='100%'>Thêm vào giỏ</Button>
                </div>
            </Grid>


        </Grid.Container>
    </div>
}

export const getStaticProps = ({params}) => {
    return {
        props: {
            
        }
    }
}