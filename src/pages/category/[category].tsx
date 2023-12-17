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
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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

    const router = useRouter()
    const currLangCatUrl = props.categories[props.categoryId - 1].url
    useEffect(() => {
        Number(props.catPosts?.posts?.totalPages) - 1 < Number(props.currentPage)
        ? router.push(`${props.lang === 'es' ? "" : "/" + props.lang}/category/${props.categoryId}--${currLangCatUrl}`)
        : null

        currLangCatUrl !== props.categoryUrl
        ? router.push(`${props.lang === 'es' ? "" : "/" + props.lang}/category/${props.categoryId}--${currLangCatUrl}${props.currentPage > 0 ? "?page=" : ""}${props.currentPage > 0 ? props.currentPage : ""}`)
        : null
    }, [router])

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

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Получаем запрашиваемую категорию
    const tempUrl: any = ctx.query["category"]
    const currentPage: any = ctx.query["page"] ? ctx.query["page"] : 0
    const categoryId = tempUrl.substring(tempUrl.search("/category/"), tempUrl.search("--"))
    const categoryUrl = tempUrl.substring(tempUrl.search("--") + 2)
    
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    const categories = await categories_.json()

    // Вытягиваем посты данной категории
    const catPosts_ = await fetch(`${isServer}/posts/${lang}?page=${currentPage ? currentPage : "0"}&size=20&categoryId=${categoryId}`)
    // Вытягиваем избранные посты данной категории
    const favoritePosts_ = await fetch(`${isServer}/posts/favorite/${lang}`)

    let catPosts

    // Сериализуем в джейсона
    try {
        catPosts = await catPosts_.json()
    }
    catch {
        return {
            redirect: {
                permanent: false,
                destination: `/404`
            }
        }
    }
    const favoritePosts = await favoritePosts_.json()

    const currLangCatUrl = categories[categoryId - 1].url
    if (Number(catPosts.posts?.totalPages) - 1 < Number(currentPage)) {
        return {
            redirect: {
                permanent: false,
                destination: `${lang === 'es' ? "" : "/" + lang}/category/${categoryId}--${currLangCatUrl}`
            }
        }
    }
    else if (currLangCatUrl !== categoryUrl) {
        return {
            redirect: {
                permanent: false,
                destination: `${lang === 'es' ? "" : "/" + lang}/category/${categoryId}--${currLangCatUrl}${currentPage > 0 ? "?page=" : ""}${currentPage > 0 ? currentPage : ""}`
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