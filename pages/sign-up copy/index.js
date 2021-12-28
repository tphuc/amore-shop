import { Button, Divider, Input, Page, Spacer, Text, useToasts } from '@geist-ui/react';
import React from 'react';
import { Nav } from '../../components/Nav';
import { useForm } from 'react-hook-form';
import { supabase } from '../../frameworks/supabase';
import { useRouter } from 'next/router';



export default function SignIn(){
    const { register, handleSubmit } = useForm();
    const router = useRouter()

    const [toasts, setToast] = useToasts();

    const onSubmit = async (data) => {
        let res = await supabase.auth.signIn({
            email: data.email,
            password: data.password,
        })
        if(!res.error){
            setToast({
                text:"Sign In successfully!",
            })
            router.push('/products')
        }
        else{
            setToast({
                text: res.error.message,
                type:"warning"
            })
        }
    }

    return <div>
        <Nav/>
        <Spacer/>
        <Page>
          <Page.Header>
            <h2>AMORE</h2>
            <p5>Sign In</p5>
            <Divider/>
          </Page.Header>
          <Page.Content>
              <form onSubmit={handleSubmit(onSubmit)}>
            <Text  mb={0.5}>Email</Text>
            <Input width={'100%'} {...register('email', { required: true})}/>
            <Text mb={0.5}>Password</Text>
            <Input.Password width={'100%'}  {...register('password')}/>
            <Spacer/>
            <Button htmlType='submit' scale={1.5} width={'100%'} type='secondary-light'>register</Button>
            </form>
          </Page.Content>
        </Page>
    </div>
}