import Sidebar from "../Sidebar";
import scss from './Layout.module.scss';
import { useSession } from 'next-auth/react';
import React from 'react';
import Head from 'next/head'


const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>NextJS Dashboard</title>
        <meta name="description" content="NextJS Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={scss.layout}
        style={{ padding: session ? '0 24px 0 80px' : 0}}
      >
        {session && <Sidebar />}
        {props.children}
      </main>
    </>
  )
}

export default Layout;
