// import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
        import("bootstrap")
        
        import('../../public/assets/js/lib/wow.min.js' as any)
        import('../../public/assets/js/lib/lity.js' as any)
    }
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default appWithTranslation(App)