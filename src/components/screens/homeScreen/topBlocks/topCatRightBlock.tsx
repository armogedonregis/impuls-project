import { postType } from "@/types/postsType"
import { Post } from "../../../posts/post"
import { categoryType } from "@/types/categoriesType"

export const TopCatRightBlock: React.FC<{
    posts: postType[],
    category: categoryType
}> = (props) => {
    return (
        props.category ? <div className="col-lg-4">
            <p className="text-uppercase"> {props.category?.name} </p>
            <div className="tc-post-list-style2 pt-30">
                <div className="items">
                    {
                        props.posts ? props.posts.map((item, id) => {
                            return id < 4
                                ? <Post
                                    key={id}
                                    postType={"imgRight"}
                                    post={item}
                                /> : null
                        }) : null
                    }
                </div>
            </div>
            <a href="#" className="mt-20 hover-main"> All {props.category?.name} News <i className="la la-angle-right ms-3"></i> </a>
        </div> : null
    )
}