import { socialsData } from "@/components/data/socialsData"
import { SinglePost } from "@/components/screens/post"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { directionPost, postType, singlePost } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

type postLayout = {
    categories: categoryType[]
    socials: socialsType
    lang: string
    postEs: singlePost
    postEn: singlePost
    postRu: singlePost
    rPosts: postType[]
    isExist: boolean
    prevPosts: directionPost[]
    nextPosts: directionPost[]
    postName: string
    postId: number
}

export default function Post(props: postLayout) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')
    
    const currentPost = props.lang === 'es' ? props.postEs : props.lang === 'en' ? props.postEn : props.postRu

    return (
        <HeadLayout
            title={currentPost.title}
            description={t('head.singlePost.description')}
            author={currentPost.author || t('head.singlePost.author')}
            keywords={t('head.singlePost.keywords')}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isSinglePost={true}
                postEs={props.postEs}
                postEn={props.postEn}
                postRu={props.postRu}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}

            >
                <SinglePost
                    post={currentPost}
                    rPosts={props.rPosts}
                    socials={socialsData}
                    prevPosts={props.prevPosts}
                    nextPosts={props.nextPosts}
                    postName={props.postName}
                    postId={props.postId}
                    lang={props.lang}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale
    // Id of the targeted post
    const postName: any = ctx.query["name"]
    const postId = postName.substring(postName.search("/post/"), postName.search("--"))

    // Вытягиваем все данные для текущего поста
    const postEs_ = await fetch(`${isServer}/post/es/${postId}`)
    const postEn_ = await fetch(`${isServer}/post/en/${postId}`)
    const postRu_ = await fetch(`${isServer}/post/ru/${postId}`)
    // Рекомендуемые посты
    const rPosts_ = await fetch(`${isServer}/posts/recommended/${lang}/${postId}?limit=8`)
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    // Getting prev post
    const prev_ = await fetch(`${isServer}/post/${lang}/${postId}/prev`)
    // Getting next post
    const next_ = await fetch(`${isServer}/post/${lang}/${postId}/next`)

    // Сериализуем в джейсона
    const categories = await categories_.json()
    const postEs = await postEs_.json()
    const postEn = await postEn_.json()
    const postRu = await postRu_.json()
    const rPosts = await rPosts_.json()
    const prevPosts = await prev_.json()
    const nextPosts = await next_.json()

    if (
        postEs["status"] === 404
        || postEn["status"] === 404
        || postRu["status"] === 404
        || postEs["message"]?.search("For input string:") === 0
        || postEn["message"]?.search("For input string:") === 0
        || postRu["message"]?.search("For input string:") === 0
    ) {
        return {
            redirect: {
                permanent: false,
                destination: `/404`
            }
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(lang!, [
                'common',
                'locale'
            ])),
            categories, lang, rPosts, prevPosts, nextPosts,
            postName, postId, postEs, postEn, postRu
        }
    }
}