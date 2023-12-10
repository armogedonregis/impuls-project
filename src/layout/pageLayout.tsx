import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'
import { SideBar } from '@/components/sideBar/sideBar'
import { categoryType } from '@/types/categoriesType'
import { socialsType } from '@/types/socials'
import { useState } from 'react'

type LayoutProps = {
    children: React.ReactNode
    categories: categoryType[]
    socials: socialsType
    lang: string;
}

export default function PageLayout(props: LayoutProps) {
    const [isDark, setDark] = useState<boolean>(false)
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false);
    const [isOpenedSlideBar, setIsOpenedSlideBar] = useState<boolean>(false)

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);

    // const { data: catData, error } = useSWR<categoryType[], Error>(`${isServer}/categories/en`, fetch)
    // if(!error && catData) {
    //     console.log(catData)
    // }

    return (
        <div className={`${isDark ? "dark-theme" : ""}`}>
            <Navbar
                isNavBarOpen={isNavBarOpen}
            />
            <Header
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
                categories={props.categories}
                setShow={setShow}
                lang={props.lang}
                isDark={isDark}
                setDark={setDark}
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
                isDark={isDark}
                setDark={setDark}
            />
        </div>
    )
}