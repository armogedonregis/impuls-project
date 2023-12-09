import { socialsData } from "@/components/data/socialsData"
import { SearchResultsScreen } from "@/components/screens/searchResults"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { foundPostType, postsType } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { HomeParams } from "@/utils/headerParams"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"

type searchLayout = {
    posts: postsType;
    categories: categoryType[];
    socials: socialsType;
    foundPosts: foundPostType[];
    lang: string;
}

export default function SearchResults(props: searchLayout) {

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
                <SearchResultsScreen
                    foundPosts={props.foundPosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Вытягиваем посты
    const posts_ = await fetch(`${isServer}/posts/home/${lang}?categoryIds=${HomeParams.categoryId}&postsSize=${HomeParams.postsSize}&sliderSize=${HomeParams.sliderSize}`)
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    // Ищем посты
    const foundPosts_ = await fetch(`${isServer}/posts/search/${lang}?query=` + ctx.query["query"])

    // Сериализуем в джейсона
    const posts = await posts_.json()
    const categories = await categories_.json()
    const foundPosts = await foundPosts_.json()

    return {
      props: {
        posts, categories, foundPosts, lang
      }
    }
}