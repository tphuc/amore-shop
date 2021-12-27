import { Button, Grid, Radio, Spacer, Text } from '@geist-ui/react'
import { Heart, HeartFill, ShoppingBag } from '@geist-ui/react-icons'
import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import { Nav } from '../../components/Nav'
import { ProductAPI } from '../../frameworks/supabase/api/products'
import { formatNumber } from '../../utils'

const images = [
    {
        url: 'https://static-buyma-jp.akamaized.net/imgdata/item/210629/0070803294/368058123/428.jpg'
    }
]


// const data = {
//     label: 'Sweater',
//     variants: [
//         { id: 'M', value: 'M', label: 'M' },
//         { id: 'S', value: 'S', label: 'S' }
//     ],
//     category: [
//         {
//             id: 1,
//             label: 'Men',
//         },
//         {
//             id: 2,
//             label: 'Winter',
//         }
//     ],
//     price: 200000,
//     description: "Lorem ispum dolor sit amet"
// }


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await ProductAPI.getAll()
    const items = res

    // Get the paths we want to pre-render based on items
    const paths = items.map((product) => ({
        params: { id: product.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps(context) {
    const { id } = context.params
    const res = await ProductAPI.getById(id)
    const data = res
    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data }, // will be passed to the page component as props
    }
  }

export default function Item({data}) {
    return <div>
        <Nav />
        <Grid.Container gap={6} justify="center" height='100vh'>
            <Grid xs={24} md={24} lg={12} xl={12}>
                <ImageSlider images={data?.images} />
            </Grid>
            <Grid xs={24} md={24} lg={10} xl={10} >
                <div style={{ width: '100%' }}>
                    <Spacer h={0.5} />
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <Text h2>{data.label}</Text>
                        <Button
                            
                            auto
                            scale={1} px={0.6}
                            onClick={() => null}
                            
                            type='abort' icon={<Heart />}>Add to Wishlist</Button>
                    </div>
                    <Text p>Price: <Text span >{formatNumber(data?.price)}</Text></Text>
                    <Spacer h={0.5} />
                    <Text type='secondary' p my={0}>Choose sizes</Text>

                    <Radio.Group scale={2} useRow>
                        {data?.variants?.map((item, id) => <Radio key={id} value={item.value}>
                            {item.label}
                        </Radio>)}
                    </Radio.Group>
                    <Spacer h={0.5} />
                    <Button
                        onClick={() => null}
                        scale={1.5} type='secondary-light' iconRight={<ShoppingBag />} width='100%'>Add to cart</Button>
                    <Spacer h={0.5} />
                    <div className='content-description' style={{ width: "100%", whiteSpace: 'break-spaces' }} dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                   

                </div>
            </Grid>


        </Grid.Container>
    </div>
}