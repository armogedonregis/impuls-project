import { postType } from "@/types/postsType"
import { getCatUrl, getFullCategory } from "@/utils/getCategory"
import Link from "next/link"

const CatMinBlockPostTitle: React.FC<{post: postType}> = (props) => {
    return (
        <li className="mb-20 fsz-28px d-flex">
            <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
            <h2 className="fsz-20px">
                <Link href={`post/${props.post?.url ? props.post.url : ""}?id=${props.post?.id}`}>{props.post?.title}</Link>
            </h2>
        </li>
    )
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type catLargeBlockType = {
    category: IntRange<1, 13>
    posts: postType[]
    extraPost?: boolean
    withoutImage?: boolean
}

export const CatMinBlock = (props: catLargeBlockType) => {

    return (
        props.category ? <div className="item p-30 bg-white radius-7 border-0 mb-30">
            <p className="text-uppercase mb-20"> { getFullCategory(props.category) } </p>
                {
                    !props.withoutImage && props.posts[0] ?
                    <div className="img img-cover th-250 radius-7 overflow-hidden">
                        <img src={props.posts[0]?.imageSmall ? props.posts[0].imageSmall : "404"} alt="" />
                    </div> : null
                }
            <div className="content pt-30">
                <h2 className="title fsz-28px pb-30 mb-30 border-1 border-bottom brd-gray">
                    {
                        props.posts
                        ? <Link href={`post/${props.posts[0]?.url ? props.posts[0].url : ""}?id=${props.posts[0]?.id}`}>
                            {props.posts[0]?.title}
                        </Link> : null
                    }
                </h2>
                {
                    props.posts[1] ? <ul className="fw-bold f-fm-neco">
                        <CatMinBlockPostTitle post={props.posts[1]}/>
                        <CatMinBlockPostTitle post={props.posts[2]}/>
                        <CatMinBlockPostTitle post={props.posts[3]}/>
                        { props.extraPost ? <CatMinBlockPostTitle post={props.posts[4]}/> : null }
                    </ul> : null
                }
                <Link href={`category/${getCatUrl(props.category)}`} className="mt-20 hover-main"> All { getFullCategory(props.category) } News <i className="la la-angle-right ms-3"></i> </Link>
            </div>
        </div> : null
    )
}