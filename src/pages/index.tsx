import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dashboard from '@/pages/dashboard'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Login from '@/components/Login'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>NextJS Dashboard</title>
        <meta name="description" content="NextJS Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        {
          session && (
          <>
            <Sidebar />
            <Dashboard />
          </>
        )
        }
        <Login />
      </main>
    </>
  )
}
