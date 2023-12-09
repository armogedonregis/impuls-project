import { postType } from "@/types/postsType"
import { Post } from "../../../posts/post"
import { categoryType } from "@/types/categoriesType"
import Link from "next/link"

export const TopCatRightBlock: React.FC<{
    posts: postType[],
    category: categoryType
}> = (props) => {
    return (
       <div className="col-lg-4">
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
                                    first={id == 0 ? true : false}
                                /> : null
                        }) : null
                    }
                </div>
            </div>
            <Link href={`category/${props.category?.url ? props.category?.url : ""}`} className="mt-20 hover-main"> All {props.category?.name} News <i className="la la-angle-right ms-3"></i> </Link>
        </div>
    )
}