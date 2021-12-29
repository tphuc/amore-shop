import { Avatar, Button, Fieldset, Input, Page, Spacer, Tabs, Text, User, useTheme, useToasts } from '@geist-ui/react';
import { X } from '@geist-ui/react-icons';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Nav } from '../../components/Nav';
import ProductCard from '../../components/ProductCard';
import { supabase } from '../../frameworks/supabase';
import { UserAPI } from '../../frameworks/supabase/api/user';
import { useUser } from '../../frameworks/supabase/swr/user';
import { useUserWishlist } from '../../frameworks/supabase/swr/user-wishlist';





export default function UserProfile() {

    const theme = useTheme()
    const router = useRouter()
    const authedUser = supabase.auth.user();
    // if(!authedUser){
    //     router.push('/sign-in')
    // }
 
    // for now user public table is not created yet, so this is not work yet
    const {data: user, mutate } = useUser(authedUser?.id);
    const {data: wishlist } =  useUserWishlist(authedUser?.id);
    console.log(wishlist)
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

        if(!res.error){
            toast({
                text:"Update user successfully!"
            })
            mutate()
        }
        else
        toast({
            text: res?.error?.message,
            type:'warning'
        })
    }

    return <div>
        <Nav />
        <div style={{ padding: "2em" }}>
            <User text={user?.full_name[0]} px={0} scale={2} name={user?.full_name} />
            <Spacer h={1}></Spacer>
            <Tabs defaultValue={"1"} >
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

                </Tabs.Item>
                <Tabs.Item label="wishlist" value="3">
                    {wishlist?.map((item, id) => <ProductCard icon={<X/>} key={id} data={item.product}>

                    </ProductCard>)}
                </Tabs.Item>
            </Tabs>
        </div>
    </div>
}