import { HomeScreen } from '@/components/screens/homeScreen'
import { HeadLayout } from '@/layout/headLayout'
import PageLayout from '@/layout/pageLayout'
import { ISliderPosts } from '@/types/post';
import { HomeParams } from '@/utils/headerParams';
import { isServer } from '@/utils/server';
import { NextPageContext } from 'next';

type Props = {
    sliderPosts: ISliderPosts[];
}

export type IPosts = {
    posts: Props;
}

export default function Home({ posts }: IPosts) {
    return (
        <HeadLayout>
            <PageLayout sliderPosts={posts.sliderPosts}>
                <HomeScreen />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // определяем локализацию
    const lang = ctx.locale;
    // делаем запрос
    const res = await fetch(`${isServer}/posts/home/${lang}?categoryIds=${HomeParams.categoryId}&postsSize=${HomeParams.postsSize}&sliderSize=${HomeParams.sliderSize}`)
    // возвращаем json
    const posts = await res.json()
    return {
      props: {
        posts
      },
    }
  };