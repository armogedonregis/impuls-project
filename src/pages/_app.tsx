// import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

// СМОТРИ. бутстрап должен подключаться самым первым как и другие либы, потому что в style.css базовые стили бутстрапа переопредяются

// import '@/styles/style.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

// Посмотри чего нехватает в файлах lib, остальное по идее в элементс

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // тайпоф нужен, чтобы скрипты загружались только из браузера, т к nextjs работает с сервака
    if (typeof window !== "undefined") {
        import("bootstrap");
        
        // Тут пытался jquery и прочий шлак импортировать
        import('../../public/assets/js/lib/wow.min.js' as any);
        import('../../public/assets/js/lib/lity.js' as any);
        // import('../../public/assets/js/lib/swiper.min.js' as any);
        // require('../../public/assets/js/lib/jquery.waypoints.min.js' as any);
        // require('../../public/assets/js/lib/jquery.counterup.js' as any);
        // require('../../public/assets/js/lib/back-to-top.js' as any);
        // require('../../public/assets/js/lib/parallaxie.js' as any);
        // require('../../public/assets/js/main.js' as any);
    }
  }, []);

  return (<Component {...pageProps} />)
}