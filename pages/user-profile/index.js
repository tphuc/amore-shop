import { Avatar, Button, Fieldset, Input, Page, Spacer, Tabs, Text, User, useTheme } from '@geist-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Nav } from '../../components/Nav';
import { useUser } from '../../frameworks/supabase/swr/user';





export default function UserProfile() {

    const theme = useTheme()
 
    // for now user public table is not created yet, so this is not work yet
    const user = useUser()

    const { register, handleSubmit } = useForm({
        name: '', // default user.name
        address: '', // default user.name
        phone: '' // default user.name
    })

    const onSubmit = (data) => {

        const { name, address, phone } = data;
        // send User update request ...
    }

    return <div>
        <Nav />
        <div style={{ padding: "2em" }}>
            <User px={0} scale={2} name="User name" />
            <Spacer h={1}></Spacer>
            <Tabs >
                <Tabs.Item label="setting" value="1">


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Text my={0.5}>Name</Text>
                        <Input {...register("fullname")} placeholder="name" />
                        <Text my={0.5}>Shipping Address</Text>
                        <Input {...register("address")} placeholder="address" />
                        <Text my={0.5}>Phone</Text>
                        <Input  {...register("phone")} placeholder="phone" />
                    </form>
                    <Spacer h={2} />
                    <Button type='secondary-light' scale={1}>Update</Button>



                </Tabs.Item>
                <Tabs.Item label="order" value="2">

                </Tabs.Item>
                <Tabs.Item label="wishlist" value="3">

                </Tabs.Item>
            </Tabs>
        </div>
    </div>
}