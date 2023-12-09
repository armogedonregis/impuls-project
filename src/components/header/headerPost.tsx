// правый пост в хедере
import { categoryType } from "@/types/categoriesType";
import { postType } from "@/types/postsType"
import Link from "next/link";

export const UnderMainSwiperPost: React.FC<{
    posts: postType[],
    category: categoryType
}> = (props) => {
    return (
        <div className="col">
            <div className="tc-breaking-style10 px-lg-5">
                <p className="text-uppercase fsz-14px mb-40">{props.category?.name ? props.category.name : ""}</p>
                {
                    props.posts[0]?.imageSmall
                    ? <div className="img img-cover">
                        <img src={props.posts[0].imageSmall} alt="" />
                    </div> : null
                }
                {
                    props.posts && props.category
                    ? <div className="info">
                        <h2 className="fsz-32px mb-20">
                            <Link href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}`}> {props.posts[0].title}</Link>
                        </h2>
                        <span className="fsz-12px me-3"><i className="la la-calendar me-2"></i>{props.posts[0]?.publicationDate}</span>
                        <span className="fsz-12px me-3"><i className="la la-user me-2"></i>{props.posts[0]?.author}</span>
    
                        <ul className="fsz-20px">
                            <li>
                                <h2 className="fsz-20px">
                                    <a href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}`}>{props.posts[1]?.title}</a>
                                </h2>
                            </li>
                            <li>
                                <h2 className="fsz-20px">
                                    <a href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}`}>{props.posts[2]?.title}</a>
                                </h2>
                            </li>
                        </ul>
                        <Link href={`category/${props.posts[0]?.url ? props.posts[0]?.url : ""}`} className="fsz-14px text-capitalize mt-15">
                            View All Posts<i className="la la-angle-right ms-1"></i>
                        </Link>
                    </div> : null
                }
            </div>
        </div>
    );
};