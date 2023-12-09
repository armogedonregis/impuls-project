import { categoryType } from "@/types/categoriesType"
import { postType } from "@/types/postsType"
import { Post } from "../../../posts/post"
import { HeroPost } from "../../../posts/heroPost"
import Link from "next/link"

export const TopCatLeftBlock: React.FC<{
    posts: postType[],
    category: categoryType
}> = (props) => {
    let postsCount = 0

    return (
        <div className="col-lg-8 border-1 border-end brd-gray">
            <div className="row text-uppercase fsz-14px">
                <div className="col-lg-6">
                    <p className="text-uppercase"> {props.category ? props.category.name : ""} </p>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <Link
                        href={`category/${props.category ? props.category.url : ""}`} className="text-capitalize hover-main"
                    > All {props.category?.name} News <i className="la la-angle-right ms-1"></i> </Link>
                </div>
            </div>
            <div className="tc-post-grid-default pt-30">
                <div className="item">
                    {
                        props.posts ? <HeroPost post={props.posts[postsCount++]}/> : null
                    }
                    <div className="sub-content pt-60">
                        {
                            props.posts ? <div className="row gx-5">
                                <div className="col-lg-7 border-1 border-end brd-gray">
                                    <div className="tc-post-list-style2">
                                        <div className="items">
                                            <Post
                                                postType={"imgLeftTop"}
                                                post={props.posts[postsCount++]}
                                            />
                                            <Post
                                                postType={"imgLeftBottom"}
                                                post={props.posts[postsCount++]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <Post
                                        postType={"imgTop"}
                                        post={props.posts[postsCount++]}
                                    />
                                </div>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}