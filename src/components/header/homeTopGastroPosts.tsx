// правый пост в хедере
import { categoryType } from "@/types/categoriesType";
import { postType } from "@/types/postsType"
import { getCatUrl, getFullCategory } from "@/utils/getCategory";
import Link from "next/link";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export const TopHomePostsBlock: React.FC<{
    posts: postType[]
    category: IntRange<1, 13>
}> = (props) => {
    return (
        <div className="col">
            <div className="tc-breaking-style10 px-lg-5">
                <p className="text-uppercase fsz-14px mb-40">{ getFullCategory(props.category) }</p>
                <div className="img img-cover">
                    <img src={props.posts[0]?.imageSmall ? props.posts[0].imageSmall : "404"} alt="" />
                </div>
                {
                    props.posts
                    ? <div className="info">
                        <h2 className="fsz-32px mb-20">
                            <Link
                                href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}?id=${props.posts[0]?.id}`}> {props.posts[0].title}
                            </Link>
                        </h2>
                        {props.posts[0]?.publicationDate && <span className="fsz-12px me-3"><i className="la la-calendar me-2"></i>{props.posts[0]?.publicationDate}</span>}
                        {props.posts[0]?.author && <span className="fsz-12px me-3"><i className="la la-user me-2"></i>{props.posts[0]?.author}</span>}
    
                        <ul className="fsz-20px">
                            <li>
                                <h2 className="fsz-20px">
                                    <a href={`post/${props.posts[1]?.url ? props.posts[1]?.url : ""}?id=${props.posts[1]?.id}`}>{props.posts[1]?.title}</a>
                                </h2>
                            </li>
                            <li>
                                <h2 className="fsz-20px">
                                    <a href={`post/${props.posts[2]?.url ? props.posts[2]?.url : ""}?id=${props.posts[2]?.id}`}>{props.posts[2]?.title}</a>
                                </h2>
                            </li>
                        </ul>
                        <Link href={`category/${getCatUrl(props.category)}`} className="fsz-14px text-capitalize mt-15">
                            View All Posts<i className="la la-angle-right ms-1"></i>
                        </Link>
                    </div> : null
                }
            </div>
        </div>
    );
};