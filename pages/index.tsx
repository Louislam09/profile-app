import type { NextPage } from 'next'
import { useContext } from 'react';
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import { AppContext } from './_app';

const EmptyMessage = ({ message }: any) => (
  <div className="container">
    <div className="row">
      <h1 className='text-center'>{message}</h1>
    </div>
  </div>
)


const Home: NextPage = () => {
  const { state } = useContext(AppContext);
  return (
    <Layout>
      {!state && state?.message && <EmptyMessage {...state} />}
      {state && !state.message && <Profile />}
    </Layout>
  )
}

export default Home
