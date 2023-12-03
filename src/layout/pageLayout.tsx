import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Navbar } from '@/components/navbar';
import { useRouter } from 'next/router';
import { useState } from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: LayoutProps) {

    const [isNavBarOpen, openNavBar] = useState<Boolean>(false);

    const router = useRouter();

    return (
        <div>

            {/* на каждой странице в папке pages используется navbar/header и футер
            страница идет в чилдрен и оборачивает */}

            <Navbar
                isNavBarOpen={isNavBarOpen}
            />

            {/* тут сделать разный контент в хедере на страницах можно через пропс */}

            {/* <Header singlePost={router.pathname === 'single_post'} /> page-single-post-video - название страницы */}

            <Header
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            />

            {/* тут main оборачивает все страницы */}

            {children}

            {/* тут создать футер, т к он одинаковый */}

            {/* <Footer /> тут нужно создать футер и перенести его, который будет использоваться везде  */}
            <Footer />
        </div>
    );
}