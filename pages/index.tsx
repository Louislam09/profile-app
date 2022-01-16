import type { NextPage } from 'next'
import { useContext, useEffect } from 'react';
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

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <Layout>
      {state?.code && <EmptyMessage {...state} />}
      {state && !state.message && <Profile />}
    </Layout>
  )
}

export default Home
