import { socialsData } from "@/components/data/socialsData"
import { CategoryPage } from "@/components/screens/categories"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { instaImg, postType, postsByCategory, favPostType } from "@/types/postsType"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"
import { getCookie, setCookie } from 'cookies-next'

type categoriesType = {
    catPosts: postsByCategory
    randomPosts: postType[]
    categories: categoryType[]
    instaImgs: instaImg[]
    categoryId: number
    lang: string
    categoryUrl: string
    currentPage: number
    favoritePosts: favPostType[]
}

export default function Categories(props: categoriesType) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')

    const isCategory = true

    return (
        <HeadLayout
            title={`Impuls PLUS ${props.catPosts?.category?.name}`}
            description={t('head.categoryPage.description')}
            author={t('head.categoryPage.author')}
            keywords={t('head.categoryPage.keywords')}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isCat={isCategory}
                thisCategory={props.catPosts?.category}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <CategoryPage
                    catPosts={props.catPosts}
                    categoryUrl={props.categoryUrl}
                    categoryId={props.categoryId}
                    lang={props.lang}
                    currentPage={props.currentPage}
                    favoritePosts={props.favoritePosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async ({req, res, locale, query}: NextPageContext) => {
    // Определяем локализацию
    const lang = locale

    // Получаем запрашиваемую категорию
    const categoryUrl: any = query["category"]
    let currentPage: any = query["page"] ? query["page"] : 1
    currentPage -= 1
    
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    const categories = await categories_.json()

    // Вытягиваем избранные посты данной категории
    const favoritePosts_ = await fetch(`${isServer}/posts/favorite/${lang}`)
    const favoritePosts = await favoritePosts_.json()

    let catPosts_
    // Вытягиваем посты данной категории в первый раз
    catPosts_ = await fetch(`${isServer}/posts/${lang}/${categoryUrl}?page=${currentPage ? currentPage - 1 : "0"}&size=20`)

    let catPosts
    let categoryId
    let lastLocale
    try {
        catPosts = await catPosts_.json()
        categoryId = catPosts.category.id

        setCookie('locale', locale, { req, res })

        if(catPosts.posts.totalPages < currentPage) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/${locale}/category/${categories[categoryId - 1].url}`
                }
            }
        }
    }
    catch {
        lastLocale = getCookie('locale', { req, res })

        // Вытягиваем посты данной категории если в первый раз не получилось
        catPosts_ = await fetch(`${isServer}/posts/${lastLocale}/${categoryUrl}?page=${currentPage ? currentPage : "0"}&size=20`)

        try {
            catPosts = await catPosts_.json()
            categoryId = catPosts.category.id

            if(catPosts.posts.totalPages < currentPage) {
                return {
                    redirect: {
                        permanent: false,
                        destination: `/${locale}/category/${categories[categoryId - 1].url}`
                    }
                }
            }

            return {
                redirect: {
                    permanent: false,
                    destination: `/${locale}/category/${categories[categoryId - 1].url}${currentPage > 0 ? "?page=" : ""}${currentPage > 0 ? currentPage + 1 : ""}`
                }
            }
        }
        catch {
            return {
                redirect: {
                    permanent: false,
                    destination: `${lang === 'es' ? "" : "/" + lang}/404`
                }
            }
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(lang!, [
                'common',
                'locale'
            ])),
            categories, categoryId, lang, catPosts,
            categoryUrl, currentPage, favoritePosts
        }
    }
}