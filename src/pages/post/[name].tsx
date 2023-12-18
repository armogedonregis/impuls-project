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
import { getCookie, setCookie } from 'cookies-next'

type postLayout = {
    categories: categoryType[]
    socials: socialsType
    lang: string
    post: singlePost
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

    return (
        <HeadLayout
            title={props.post.title}
            description={t('head.singlePost.description')}
            author={props.post.author || t('head.singlePost.author')}
            keywords={t('head.singlePost.keywords')}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isSinglePost={true}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}

            >
                <SinglePost
                    post={props.post}
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

export const getServerSideProps = async ({req, res, locale, query}: NextPageContext) => {
    // Определяем локализацию
    const lang = locale
    // Id of the targeted post
    const postName: any = query["name"]

    // Вытягиваем пост
    let post_
    post_ = await fetch(`${isServer}/post-url/${lang}/${postName}`)
    // To JSON
    let post
    post = await post_.json()

    if(
        post["status"] === 404
        || post["message"]?.search("Post with this ID was not found!") === 0
    ) {
        const lastPostLang = getCookie('lastPostLang', { req, res })
        post_ = await fetch(`${isServer}/post-url/${lastPostLang}/${postName}`)
        post = await post_.json()
        const lastPostId = post.id

        try {
            post_ = await fetch(`${isServer}/post/${lang}/${lastPostId}`)
            post = await post_.json()

            if (post["message"] && post["message"].Search("For input string:") === 0)
            {
                return {
                    redirect: {
                        permanent: false,
                        destination: `${lang === 'es' ? "" : "/" + lang}/404`
                    }
                }
            }
            return {
                redirect: {
                    permanent: false,
                    destination: `${lang === 'es' ? "" : "/" + lang}/post/${post.url}`
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
    const postId = post.id
    setCookie('lastPostLang', lang, { req, res })

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
    const rPosts = await rPosts_.json()
    const prevPosts = await prev_.json()
    const nextPosts = await next_.json()

    return {
        props: {
            ...(await serverSideTranslations(lang!, [
                'common',
                'locale'
            ])),
            categories, lang, rPosts, prevPosts, nextPosts,
            postName, postId, post
        }
    }
}