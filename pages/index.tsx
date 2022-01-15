import type { NextPage } from 'next'
import { useContext } from 'react';
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import { AppContext } from './_app';


const Home: NextPage = () => {
  const { state } = useContext(AppContext);
  return (
    <Layout>
      {state && <Profile />}
      {/* <Profile /> */}
    </Layout>
  )
}

export default Home
