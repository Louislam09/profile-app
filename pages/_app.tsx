import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react';

export const AppContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState<any>();

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
