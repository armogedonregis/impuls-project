import { postType } from "@/types/postsType"
import Link from "next/link"

export const MiddleSwiperSlideContent = (props: postType) => {
    return (
        <div className="story-card">
            <div className="img img-cover">
                <img src={props?.imageSmall ? props.imageSmall : "404"} alt="" className="main-img" />
            </div>
            <div className="info">
                <h2 className="fsz-28px mb-20"> <Link href={`post/${props?.url ? props.url : ""}?id=${props?.id}`} className="hover-main">
                    {props?.title}
                </Link></h2>
                <li className="fsz-12px">
                    <span className="me-3"><i className="la la-calendar me-2"></i>{props?.publicationDate}</span>
                    <span className="me-3"><i className="la la-user me-2"></i>{props?.author}</span>
                </li>
            </div>
        </div>
    )
}