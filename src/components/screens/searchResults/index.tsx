import { foundPostType } from "@/types/postsType"

const FoundPost: React.FC<{
    foundPost: foundPostType;
}> = (props) => {
    return (
        <div className="search-result-item">
            <div className="row">
                <div className="col-lg-5 pb-80">
                    <div className="img img-cover th-250 radius-5 overflow-hidden">
                        <img
                            src={props.foundPost.imageSmall ? props.foundPost.imageSmall : "404"}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h3 className="title"> <a href={props.foundPost.url}>{props.foundPost.title}</a> </h3>
                        <div className="text color-666 fsz-16px">
                            {props.foundPost.description}
                        </div>
                        <div className="meta-bot">
                            <small className="fsz-13px color-999">Author Name</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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