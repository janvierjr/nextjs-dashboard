import { Inter } from 'next/font/google'
import Dashboard from '@/pages/dashboard'
import Login from '@/components/Login'
import { useSession } from 'next-auth/react'
import scss from '@/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
      <main className={`${inter.className} ${scss.main}`}>
        {session && <Dashboard />}
        {!session && <Login />}
        <Login />
      </main>
  )
}

export default Home;