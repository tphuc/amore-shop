import { Avatar, Button, Fieldset, Grid, Input, Page, Spacer, Tabs, Text, useMediaQuery, User, useTheme, useToasts } from '@geist-ui/react';
import { X } from '@geist-ui/react-icons';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Nav } from '../../components/Nav';
import OrderItem from '../../components/OrderItem';
import ProductCard from '../../components/ProductCard';
import { supabase } from '../../frameworks/supabase';
import { UserAPI } from '../../frameworks/supabase/api/user';
import { WishlistAPI } from '../../frameworks/supabase/api/wishlist';
import { useUser } from '../../frameworks/supabase/swr/user';
import { useUserOrders } from '../../frameworks/supabase/swr/user-order';
import { useUserWishlist } from '../../frameworks/supabase/swr/user-wishlist';



export default function UserProfile() {

    const theme = useTheme()
    const router = useRouter()
    const authedUser = supabase.auth.user();
    const isMobile = useMediaQuery('mobile')
    // if(!authedUser){
    //     router.push('/sign-in')
    // }

    // for now user public table is not created yet, so this is not work yet
    const { data: user, mutate } = useUser(authedUser?.id);
    const { data: orders, } = useUserOrders(authedUser?.id);
    const { data: wishlist } = useUserWishlist(authedUser?.id);

    const [_, toast] = useToasts()

    const { register, handleSubmit, reset } = useForm()


    React.useEffect(() => {
        reset({
            full_name: user?.full_name,
            address: user?.address,
            phone: user?.phone
        })
    }, [user])

    const onSubmit = async (data) => {
        console.log(data)
        let res = await UserAPI.update(authedUser?.id, data)

        if (!res.error) {
            toast({
                text: "Update user successfully!"
            })
            mutate()
        }
        else
            toast({
                text: res?.error?.message,
                type: 'warning'
            })
    }

    const onRemoveWishlist = async (item) => {
        let res = await WishlistAPI.removeItem(item?.product?.id, authedUser?.id)
        if(!res.error){
            mutate()
            toast({
                text: "Removed from wishlist"
            })
            
        }
    }

    return <div>
        <Nav />
        <div style={{ padding: "2em" }}>
            <User text={user?.full_name[0]} px={0} scale={2} name={user?.full_name} />
            <Spacer h={1}></Spacer>
            <Tabs initialValue="1" >
                <Tabs.Item label="setting" value="1">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Text my={0.5}>Full name</Text>
                        <Input width={'100%'} {...register("full_name")} placeholder="full name" />
                        <Text my={0.5}>Shipping address</Text>
                        <Input width={'100%'} {...register("address")} placeholder="address" />
                        <Text my={0.5}>Phone</Text>
                        <Input width={'100%'} {...register("phone")} placeholder="phone" />
                        <Spacer h={2} />
                        <Button htmlType='submit' type='secondary-light' scale={1}>Update</Button>
                    </form>


                </Tabs.Item>
                <Tabs.Item label="order" value="2">
                    {orders?.map((item, id) => <OrderItem key={id} data={item}/>)}
                </Tabs.Item>
                <Tabs.Item label="wishlist" value="3">
                    <Grid.Container direction='row' gap={isMobile ? 0 : 2}  >
                        {wishlist?.map((item, id) => <Grid alignItems='center' key={id} xs={24} sm={12} md={6} >
                            <ProductCard onActionClick={() => onRemoveWishlist(item)} icon={<X />} key={id} data={item.product}/>
                        </Grid>)}
                    </Grid.Container>
                </Tabs.Item>
            </Tabs>
        </div>
    </div>
}