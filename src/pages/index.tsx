import Head from 'next/head'
import { Inter } from 'next/font/google'
import Dashboard from '@/pages/dashboard'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Login from '@/components/Login'
import { useSession } from 'next-auth/react'
import scss from '@/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>NextJS Dashboard</title>
        <meta name="description" content="NextJS Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${scss.main}`}>
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

export default Home;