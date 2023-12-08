import { categoryData, postType } from "@/types/postsType"
import { CategoryPost } from "../../../posts/categoryPost";


type catLargeBlockType = {
    category?: categoryData;
    posts: postType[];
}

export const CatLargeBlock = (props: catLargeBlockType) => {

    return (
        props.category ? <div className="p-30 bg-white radius-7 border-0 mb-30">
        <div className="row text-uppercase fsz-14px ">
            <div className="col-lg-6">
                <p className="text-uppercase mb-20"> {props.category?.name} </p>
            </div>
            <div className="col-lg-6 text-lg-end">
                <a href={props.category?.url} className="text-capitalize hover-main"> All {props.category?.name} News <i className="la la-angle-right ms-1"></i> </a>
            </div>
        </div>
        <div className="tc-post-list-style3">
            {
                props.posts ? <div className="items">
                    <CategoryPost post={props?.posts[0]} />
                    <CategoryPost post={props?.posts[1]} />
                    <CategoryPost post={props?.posts[2]} />
                </div> : null
            }
        </div>
    </div> : null
    )
}