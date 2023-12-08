import { socialsData } from '@/components/data/socialsData'
import { HomeScreen } from '@/components/screens/homeScreen'
import { HeadLayout } from '@/layout/headLayout'
import PageLayout from '@/layout/pageLayout'
import { categoryType } from '@/types/categoriesType'
import { instaImg, postType, postsType } from '@/types/postsType'
import { HomeParams } from '@/utils/headerParams'
import { instaFetchServer, isServer } from '@/utils/server'
import { NextPageContext } from 'next'

type IPosts = {
    posts: postsType;
    randomPosts: postType[];
    categories: categoryType[];
    instaImgs: instaImg[];
}

export default function Home(props: IPosts) {

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
            >
                <HomeScreen
                    instaImgs={props.instaImgs}
                    posts={props.posts.categorizedPosts}
                    randomPosts={props.randomPosts}
                    categories={props.categories}
                    socials={socialsData}
                    sliderPosts={props.posts.sliderPosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale;

    // Вытягиваем посты
    const posts_ = await fetch(`${isServer}/posts/home/${lang}?categoryIds=${HomeParams.categoryId}&postsSize=${HomeParams.postsSize}&sliderSize=${HomeParams.sliderSize}`)
    // Вытягиваем рандомные посты
    const randomPosts_ = await fetch(`${isServer}/posts/recommended/${lang}/1?limit=9`)
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    // Вытягиваем картинки из инстаграмма
    const InstaImgs_ = await fetch(`${instaFetchServer}/instagram/photos?count=6`)

    // Сериализуем в джейсона
    const posts = await posts_.json()
    const randomPosts = await randomPosts_.json()
    const categories = await categories_.json()
    const instaImgs = await InstaImgs_.json()

    return {
      props: { posts, randomPosts, categories, instaImgs }
    }
}