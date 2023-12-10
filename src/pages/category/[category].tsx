import { socialsData } from "@/components/data/socialsData"
import { CategoryPage } from "@/components/screens/categories"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { instaImg, postType, postsByCategory, favPostType } from "@/types/postsType"
import { getCategory } from "@/utils/getCategory"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"

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
    return (
        <HeadLayout
            title={"Impuls PLUS"}
            description={"Portal en español, inglés y ruso sobre la actualidad en los ámbitos de turismo, cultura, moda, tendencias, finanzas, salud, deportes, educación, inversiones"}
            author={"Impuls PLUS"}
            keywords={""}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
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
    const categoryUrl = ctx.query["category"]
    const categoryId: number = getCategory(categoryUrl)
    const currentPage = ctx.query["page"] ? ctx.query["page"] : 1

    // Вытягиваем посты данной категории
    const catPosts_ = await fetch(`${isServer}/posts/${lang}?page=${currentPage ? currentPage : "1"}&size=20&categoryId=${categoryId}`)
    // Вытягиваем избранные посты данной категории
    const favoritePosts_ = await fetch(`${isServer}/posts/favorite/${lang}`)
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)


    // Сериализуем в джейсона
    const catPosts = await catPosts_.json()
    const categories = await categories_.json()
    const favoritePosts = await favoritePosts_.json()

    return {
      props: { categories, categoryId, lang, catPosts,
        categoryUrl, currentPage, favoritePosts }
    }
}