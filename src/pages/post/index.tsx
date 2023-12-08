import { socialsData } from "@/components/data/socialsData"
import { SinglePost } from "@/components/screens/post"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { postType, postsType } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { HomeParams } from "@/utils/headerParams"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"

type posthLayout = {
    posts: postsType;
    categories: categoryType[];
    socials: socialsType;
}

let tempPost: postType = {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus quibusdam eaque obcaecati earum a, quo fugiat laborum sint itaque soluta velit labore. Ratione adipisci nulla iusto illum doloremque? Vero.",
    url: "#",
    author: "Logan",
    imageSmall: "#",
    videoUrl: "#",
    publicationDate: "none",
    categories: [
        {
            id: 1,
            name: "gastronomy",
            url: "#",
            image: "#",
            count: 35
        }
    ],
    isPrime: false
}


export default function Post(props: posthLayout) {

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
                <SinglePost
                    post={tempPost}
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

    // Сериализуем в джейсона
    const posts = await posts_.json()
    const categories = await categories_.json()

    return {
      props: {
        posts, categories
      }
    }
}