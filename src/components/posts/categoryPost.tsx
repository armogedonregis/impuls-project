import { postType } from "@/types/postsType"
import Link from "next/link"
import Image from 'next/image'

type catPostType = {
    post: postType
}

export const CategoryPost = (props: catPostType) => {

    return (
        <div className="item">
            <div className="row">
                <div className="col-lg-5">
                    <Link
                        className="img img-cover th-250 radius-5 overflow-hidden"
                        href={`post/${props.post?.url ? props.post.url : ""}`}
                    >
                        {
                            props.post?.imageSmall
                            ? <img src={props.post.imageSmall} alt="" />
                            : null
                        }
                    </Link>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h2 className="title fsz-28px mb-20"> <Link href={`post/${props.post?.url ? props.post.url : ""}`}>{props.post?.title}</Link> </h2>
                        <div className="text fsz-14px"> {props.post?.description}
                        </div>
                        <div className="meta-bot">
                            <small className="fsz-12px"> {props.post?.author} </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}