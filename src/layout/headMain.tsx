import Head from "next/head"

type headMainProps = {
    title: string,
    description: string,
    author: string,
    keywords: string
}

export const HeadMain = (props: headMainProps) => {
    return (
        <Head>
            {/* <!-- Metas --> */}
            <title>{props.title}</title>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1" />
            <meta name="title" content="Impuls PLUS" />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="author" content={props.author} />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="referrer" content="unsafe-url" />
            <meta property="article:author" content="Impuls PLUS" />
            <meta property="og:site_name" content="Impuls PLUS" />
            <meta property="og:type" content="article" />
            <meta property="article:published_time" content="" />
            <meta property="og:title" content="Impuls PLUS" />
            <meta property="og:description" content="Impuls PLUS" />
            <meta property="og:url" content="#" />
            <meta property="og:image" content="#" />
            <meta property="twitter:title" content="Impuls PLUS" />
            <meta name="twitter:site" content="" />
            <meta property="twitter:description" content="Impuls PLUS" />
            <meta name="twitter:image:src" content="" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="" />
            <meta name="twitter:tile:image" content="" />
            <meta name="twitter:cta" content="Read on Impuls PLUS" />
            <link rel="icon" href="" />
            <link rel="alternate" hrefLang="es" href="/" />
            <link rel="alternate" hrefLang="en" href="/en" />
            <link rel="alternate" hrefLang="ru" href="/ru" />
            <link rel="alternate" hrefLang="x-default" href="/" />
            <link rel="canonical" href="/" />
            {/* <!-- Favicon --> */}
            <link rel="shortcut icon" href="assets/img/fav.png" title="Favicon" sizes="16x16" />
            {/* <!-- font family --> */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            
            <link rel="stylesheet" href="../assets/css/lib/ionicons.css" />
            <link rel="stylesheet" href="../assets/css/lib/line-awesome.css" />
            <link rel="stylesheet" href="../assets/css/lib/animate.css" />
            <link rel="stylesheet" href="../assets/css/lib/jquery.fancybox.css" />
            <link rel="stylesheet" href="../assets/css/lib/lity.css" />
            <link rel="stylesheet" href="../assets/css/lib/swiper.min.css" />
            <link rel="shortcut icon" href="assets/img/fav.png" title="Favicon" sizes="16x16" />
            {/* Отключить когда со style.css разберешься, потому что я и так его глобально подключил */}
            <link rel="stylesheet" href="../assets/css/lib/bootstrap.min.css" />
            <link rel="stylesheet" href="../assets/css/style.css" />
            <link rel="stylesheet" href="../assets/css/custom_home.css" />
            {/* Все основные стили прописаны в линках, оттуда смотреть что подтягивается */}
        </Head>
    )
}