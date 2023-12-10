import { postsByCategory, favPostType } from "@/types/postsType"
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
    favoritePosts: favPostType[];
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
                                            props.catPosts.posts.content.length > 0
                                            ? props.catPosts.posts.content.map((item, id) => {
                                                return !(id === props.catPosts.posts.content.length / 2)
                                                ? <CatPost key={id} post={item} />
                                                : <CatBanner key={id} />
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
                                        favoritePosts={props.favoritePosts}
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