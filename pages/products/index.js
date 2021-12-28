
import React, { useState } from 'react';
import { Nav } from '../../components/Nav';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import { Divider, Grid, Input, Loading, Select, Spacer, Spinner, Text, useMediaQuery, useTheme, useToasts } from '@geist-ui/react';
import { useProducts } from '../../frameworks/supabase/swr/products';
import { useCategories } from '../../frameworks/supabase/swr/categories';
import { supabase } from '../../frameworks/supabase';
import { WishlistAPI } from '../../frameworks/supabase/api/wishlist';



export default function Products() {
  const { category } = useRouter().query
  const { data: cateogries } = useCategories()
  const [_, toast] = useToasts();
  const user = supabase.auth.user()
  const [filter, setFilter] = useState({
    category: '',
    label: ''
  })

  const { data: products, isLoading } = useProducts(filter)

  const addToWishlist = async (data) => {
    if(!user){
        toast({
            text: "Please sign in first",
            type:"warning"
        })
    }

    let res = await WishlistAPI.addItem(data?.id, user?.id)
    if(!res.error){
        toast({
            text: 'Added to wishlist successfully'
        })
    }
    else{
        toast({
            text: 'Already in wishlist',
            type:"warning"
        })
    }

}

  const theme = useTheme()
  const isMobile = useMediaQuery('mobile')
  return <div style={{ background: theme.palette.accents_1, minHeight: '100vh' }} >
    <Head>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <div style={{ background: "#fff" }} >
      <Select onChange={(val) => {
        setFilter({ ...filter, category: val })
      }} scale={1.2} height={'60px'} style={{ borderWidth: 0, }} placeholder="Select category" >
        {cateogries?.map((item, id) => <Select.Option key={id} value={`${item.id}`}>{item.label}</Select.Option>)}
        <Select.Option value={``}>All</Select.Option>
      </Select>

      <input
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            setFilter({ ...filter, label: e.target.value })
          }
        }} onBlur={(e) => setFilter({ ...filter, label: e.target.value })}
        placeholder='search for products' type="text" />
    </div>
    <Spacer />
      {isLoading && <Loading spaceRatio={2} scale={2}></Loading>}
    <Grid.Container direction='row' gap={isMobile ? 0 : 2}  >
      {
        products?.map((item, id) => <Grid justify='center' alignItems='center' key={id} xs={24} sm={12} md={6} >
          <ProductCard onActionClick={() => addToWishlist(item)} width={300} height={300} data={item} />
        </Grid>)
      }
    </Grid.Container>
    <style jsx>{
      `
        input {
          border: none;
        }
      `
    }

    </style>

  </div>
}
