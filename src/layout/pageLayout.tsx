import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Navbar } from '@/components/navbar';
import { SideBar } from '@/components/sideBar/sideBar';
import { categoryType } from '@/types/categoriesType';
import { postType, swiperPostData } from '@/types/postsType';
import { socialsType } from '@/types/socials';
import { useState } from 'react';

interface categorizedPosts {
    [key: string]: postType[]
}

type LayoutProps = {
    children: React.ReactNode;
    sliderPosts: swiperPostData[];
    posts: categorizedPosts;
    categories: categoryType[];
    socials: socialsType;
};

export default function PageLayout(props: LayoutProps) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false);
    const [isOpenedSlideBar, setIsOpenedSlideBar] = useState<boolean>(false)

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Navbar
                isNavBarOpen={isNavBarOpen}
            />
            <Header
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
                categories={props.categories}
                setShow={setShow}
            />
                {/* Page aka screen body */}
                {props.children}
            <Footer
                socials={props.socials}
            />
            <SideBar
                show={show}
                handleClose={handleClose}
                categories={props.categories}
                isOpenedSlideBar={isOpenedSlideBar}
                setIsOpenedSlideBar={setIsOpenedSlideBar}
                socials={props.socials}
            />
        </div>
    )
}