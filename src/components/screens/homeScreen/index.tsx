import { CategoryHome } from "./categoryHome"
import { instaImg, postType, swiperPostData, topPostType } from "@/types/postsType"
import { categoryType } from "@/types/categoriesType"
import { LargeLeaderBoard } from "@/components/screens/homeScreen/large Leaderboard/largeLeaderboard"
import { CatLargeBlock } from "@/components/screens/homeScreen/bottomBlocks/catLargeBlock"
import { InstaBlock } from "@/components/screens/homeScreen/bottomBlocks/instaBlock"
import { CatMinBlock } from "@/components/screens/homeScreen/bottomBlocks/catMinBlock"
import { FeaturedAuthors } from "@/components/screens/homeScreen/featuredAuthors/featuredAuthors"
import { TopCatChapter } from "@/components/screens/homeScreen/topBlocks/topCatChapter"
import { TopPosts_n_Form } from "@/components/screens/homeScreen/topBlocks/topPosts&Form"
import { TrandsNews } from "@/components/screens/homeScreen/trandsNews/trandsNews"
import { StayConnected } from "@/components/screens/homeScreen/bottomBlocks/stayConnected"
import { FavoriteRandomPosts } from "@/components/screens/homeScreen/topBlocks/favoriteRandomPosts"
import { HotVideosBlock } from "@/components/screens/homeScreen/hotVideos/hotVideosBlock"
import { socialsType } from "@/types/socials"
import { TopHomeSwiper } from "@/components/screens/homeScreen/topHomeSwiper/topHomeSwiper"
import { TopHomePostsBlock } from "@/components/header/homeTopGastroPosts"

interface categorizedPosts {
    [key: string]: postType[]
}

type homeLayout = {
    posts: categorizedPosts
    randomPosts: postType[]
    categories: categoryType[]
    instaImgs: instaImg[]
    socials: socialsType
    sliderPosts: swiperPostData[]
    topPosts: topPostType[]
}

export const HomeScreen = (props: homeLayout) => {
    return (
        <main className="home-style10 tc-header-style10">
            {/* Карусель и посты */}
            <div className="row gx-0">
                <TopHomeSwiper sliderPosts={props.sliderPosts}/>
                <TopHomePostsBlock
                    category={1}
                    posts={props.posts[1]}
                />
            </div>

            {/* Категории с параллакс эффектом */}
            <CategoryHome
                categories={props.categories}
            />

            {/* Favorite random posts */}
            <FavoriteRandomPosts
                randomPosts={props.randomPosts}
            />

            {/* Banner */}
            <LargeLeaderBoard
                url={"#"}
                img={"/assets/img/banner1.png"}
                type={1}
            />

            {/* <!-- ====== start whats new content ====== --> */}
            <section className="whats-new-style10 px-lg-5 overflow-hidden whats-new-style10--pb-0">
                <div className="sec-content border-1 border-top brd-gray pt-70 pb-70">
                    <div className="row gx-5">
                        {/* Chapter with left and right category blocks */}
                        <TopCatChapter
                            categories={props.categories}
                            posts={props.posts}
                        />

                        {/* Widget cards (right side of what's new section) */}
                        <TopPosts_n_Form topPosts={props.topPosts} />
                    </div>
                </div>
            </section>

            {/* <!-- ====== start banner ====== --> */}
            <LargeLeaderBoard
                url={"#"}
                img={"/assets/img/banner1.png"}
                type={2}
            />

            {/* <!-- ====== start tc-trends-news-style10 ====== --> */}
            <TrandsNews
                category={props.categories[0]}
                posts={props.posts[1]}
            />

            {/* <!-- ====== start tc-hot-videos-style11 ====== --> */}
            <HotVideosBlock
                videoCards={props.posts[11]}
            />

            {/* <!-- ====== start posts ====== --> */}
            <section className="posts bg-gray1 px-lg-5 pb-80 pt-80">
                <div className="row">
                    <div className="col-lg-3 custom-col-half custom-col-trends custom-col-large--trends">
                        {/* Fashion block */}
                        <CatMinBlock
                            posts={props.posts[4]}
                            category={4}
                        />

                        {/* Instagram block */}
                        <InstaBlock instaImgs={props?.instaImgs}/>

                        {/* Sport block */}
                        <CatMinBlock
                            posts={props.posts[10]}
                            category={10}
                            extraPost={true}
                        />
                    </div>
                    <div className="col-lg-6 custom-col-large">
                        {/* Health block */}
                        <CatLargeBlock
                            posts={props.posts[6]}
                            category={6}
                        />
                        {/* Investments block */}
                        <CatLargeBlock
                            posts={props.posts[9]}
                            category={9}
                        />
                    </div>
                    <div className="col-lg-3 custom-col-half custom-col-large--trends custom-col-margin">
                        {/* Featured authors */}
                        <FeaturedAuthors />
                        
                        {/* Finance block */}
                        <CatMinBlock
                            posts={props.posts[8]}
                            category={8}
                            extraPost={true}
                            withoutImage={true}
                        />
                        
                        {/* Networking block */}
                        <CatMinBlock
                            posts={props.posts[12]}
                            category={12}
                        />

                        {/* Stay connected block */}
                        <StayConnected
                            socials={props.socials}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};