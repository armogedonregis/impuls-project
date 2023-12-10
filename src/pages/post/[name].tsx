import { socialsData } from "@/components/data/socialsData"
import { SinglePost } from "@/components/screens/post"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { directionPost, postType, singlePost } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"
import { useRouter } from "next/router"

type posthLayout = {
    categories: categoryType[]
    socials: socialsType
    lang: string
    post: singlePost
    rPosts: postType[]
    isExist: boolean
    prevPosts: directionPost[]
    nextPosts: directionPost[]
}

export default function Post(props: posthLayout) {

    const router = useRouter()

    if (!props.isExist) {
        router.back()
    }

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
                <SinglePost
                    post={props.post}
                    rPosts={props.rPosts}
                    socials={socialsData}
                    prevPosts={props.prevPosts}
                    nextPosts={props.nextPosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale
    // Id of the targeted post
    const postId = ctx.query["id"]

    // Вытягиваем все данные для текущего поста
    const post_ = await fetch(`${isServer}/post/${lang}/${postId}`)
    // Рекомендуемые посты
    const rPosts_ = await fetch(`${isServer}/posts/recommended/${lang}/${postId}?limit=8`)
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    // Getting prev post
    const prev_ = await fetch(`${isServer}/post/${lang}/${postId}/prev`)
    // Getting next post
    const next_ = await fetch(`${isServer}/post/${lang}/${postId}/next`)
    // Getting next post
    const secNext_ = await fetch(`${isServer}/post/${lang}/${postId}/next`)

    // Сериализуем в джейсона
    const categories = await categories_.json()
    const post = await post_.json()
    const rPosts = await rPosts_.json()
    const prevPosts = await prev_.json()
    const nextPosts = await next_.json()
    
    let isExist = true
    if(post["message"]?.search('Post not available in requested language') === 0) {
        isExist = false
    }

    return {
      props: {
        categories, lang, post, rPosts, isExist,
        prevPosts, nextPosts
      }
    }
}