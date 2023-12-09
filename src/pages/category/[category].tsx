import { socialsData } from "@/components/data/socialsData"
import { CategoryPage } from "@/components/screens/categories"
import { getCategory } from "@/components/screens/categories/getCategory"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { instaImg, postType, postsByCategory, postsType, topPostType } from "@/types/postsType"
import { HomeParams } from "@/utils/headerParams"
import { instaFetchServer, isServer } from "@/utils/server"
import { NextPageContext } from "next"

type categoriesType = {
    posts: postsType;
    catPosts: postsByCategory;
    randomPosts: postType[];
    categories: categoryType[];
    instaImgs: instaImg[];
    categoryId: number;
    lang: string;
    categoryUrl: string;
    currentPage: number;
    topCatPosts: topPostType[];
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
                sliderPosts={props.posts.sliderPosts}
                posts={props.posts.categorizedPosts}
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
                    topCatPosts={props.topCatPosts}
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

    // Вытягиваем посты
    const posts_ = await fetch(`${isServer}/posts/home/${lang}?categoryIds=${HomeParams.categoryId}&postsSize=${HomeParams.postsSize}&sliderSize=${HomeParams.sliderSize}`)
    // Вытягиваем посты данной категории
    const catPosts_ = await fetch(`${isServer}/posts/${lang}?page=${currentPage ? currentPage : "1"}&size=6&categoryId=${categoryId}`)
    // Вытягиваем топовые посты данной категории
    const topCatPosts_ = await fetch(`${isServer}/posts/top/${lang}?id=${categoryId}`)
    // Вытягиваем рандомные посты
    const randomPosts_ = await fetch(`${isServer}/posts/recommended/${lang}/1?limit=9`)
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    // Вытягиваем картинки из инстаграмма
    const InstaImgs_ = await fetch(`${instaFetchServer}/instagram/photos?count=6`)


    // Сериализуем в джейсона
    const posts = await posts_.json()
    const catPosts = await catPosts_.json()
    const randomPosts = await randomPosts_.json()
    const categories = await categories_.json()
    const instaImgs = await InstaImgs_.json()
    const topCatPosts = await topCatPosts_.json()

    return {
      props: { posts, randomPosts, categories, instaImgs, categoryId, lang, catPosts,
        categoryUrl, currentPage, topCatPosts }
    }
}