import { foundPostType } from "@/types/postsType"
import dynamic from "next/dynamic";


const FoundPost = dynamic(
    () => import('./foundPost'),
    { loading: () => <p>Loading...</p>, }
)

type searchPostsType = {
    foundPosts: foundPostType[];
}

export const SearchResultsScreen = (props: searchPostsType) => {
    return (
        <main>
            <section className="search-results-section">
                <div className="container">
                    <div className="row text-uppercase fsz-14px mb-40 pt-80">
                        <div className="col-lg-6">
                            <p className="text-uppercase mb-20"> Search Results </p>
                        </div>
                        <div className="col-lg-6 text-lg-end" />
                    </div>
                    <div className="search-results-list">
                        {
                            props.foundPosts
                            ? props.foundPosts.map((item, id) =>
                            <FoundPost key={id} foundPost={item} />)
                            : null
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}