import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState<any>();
  const [currentUser, setCurrentUser] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const requestUrl = (username: string) => `${process.env.NEXT_PUBLIC_BASE_URL}/user/${username}`
      try {
        const response = await fetch(requestUrl(currentUser));
        const data = await response.json();
        setState(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    };
    fetchData();
  }, [currentUser]);

  return (
    <AppContext.Provider value={{ state, setState, setCurrentUser, currentUser, loading }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
