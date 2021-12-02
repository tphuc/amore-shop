import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { supabase } from '../frameworks/supabase'
import { Nav } from '../components/Nav'
import { Text } from '@geist-ui/react'


export default function Home({user}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Text px={1}>This is home page</Text>
    </div>
  )
}



export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  // If there is a user, return it.
  return { props: { user } }
}