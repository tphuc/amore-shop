import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { supabase } from '../frameworks/supabase'
import { Nav } from '../components/Nav'
import { Button, Spacer, Text } from '@geist-ui/react'
import Bg from '../assets/bg.jpg'

import Link from 'next/link'

export default function Home({user}) {
  return (
    <div>
      <Head>
        <title>Amore shop</title>
        <meta name="description" content="Simple, minimalist & elegant clothings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div style={{position:"relative",  width:"100vw", height:"100vh"}}>
      <Image objectFit='cover' alt='' width={'100vw'} src={Bg} layout='fill'></Image>
      </div>
      <div style = {{
        position:"relative",
        width:"100vw",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}>

       
        <Text style={{textAlign:'center', fontSize:"10em"}} my={0} H1>AMORE</Text>
        <Text style={{textAlign:'center', fontSize:"2em"}} my={1} p> Mordern & Asthetic clothing </Text>
        <Link href='/products'>
          <Button>Discover</Button>
        </Link>
        <Spacer h={10}></Spacer>
      </div>
    </div>
  )
}



export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  // If there is a user, return it.
  return { props: { user } }
}