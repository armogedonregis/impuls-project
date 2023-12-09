import { postsByCategory, topPostType } from "@/types/postsType"
import { CatBanner } from "./catBanner"
import { WidgetTrends } from "./widgetTrends"
import { CatPost } from "./catPost";
import { CatPagination } from "./pagination";
import { CatAds } from "./catAds";

type catPageProps = {
    catPosts: postsByCategory;
    categoryUrl: string;
    lang: string;
    currentPage: number;
    topCatPosts: topPostType[];
    categoryId: number;
}

export const CategoryPage = (props: catPageProps) => {
    return (
        <main>
            <section className="tc-popular-posts-blog">
                <div className="container">
                    <div className="content-widgets pt-50 pb-50">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="tc-post-list-style3">
                                    <div className="items">
                                        {
                                            props.catPosts.posts.content
                                            ? props.catPosts.posts.content.map((item, id) => {
                                                return id < 1 * 6 - 3 && id > 1 * 6 - 7
                                                ? <CatPost key={id} post={item} />
                                                : null
                                            }) : null
                                        }
                                        {/* Banner */}
                                        <CatBanner />
                                        {
                                            props.catPosts.posts.content
                                            ? props.catPosts.posts.content.map((item, id) => {
                                                return id < 1 * 6 && id > 1 * 6 - 4
                                                ? <CatPost key={id} post={item} />
                                                : null
                                            }) : null
                                        }
                                    </div>
                                </div>

                                {/* Пагинация */}
                                <CatPagination
                                    catPosts={props.catPosts}
                                    categoryUrl={props.categoryUrl}
                                    lang={props.lang}
                                    currentPage={props.currentPage}
                                />
                            </div>
                            
                            <div className="col-lg-3">
                                <div className="widgets-sticky mt-5 mt-lg-0">
                                    <WidgetTrends
                                        categoryId={props.categoryId}
                                        categoryUrl={props.categoryUrl}
                                        topCatPosts={props.topCatPosts}
                                    />

                                    {/* Реклама в блоке виджетов */}
                                    <CatAds />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}