import { postType } from "@/types/postsType";
import Link from "next/link";

type videoPostType = {
    post: postType
}

export const BotVideoPost = (props: videoPostType) => {
    return (
        <div className="col-lg-4 custom-top-0 border-1 border-end brd-gray mt-50">
            <div className="item border-0">
                <div className="custom_sub-video row gx-3 align-items-center">
                    <div className="col-12 custom__sub-video--order custom__sub-video--width">
                        {
                            props.post
                            ? <div className="content">
                                <div className="date mb-20 fsz-12px">
                                    <span className="meta-bot mt-15">{props.post?.author}</span>
                                </div>
                                <div className="sub-videos-flex">
                                    <div className="col-8">
                                        <h2 className="title fsz-28px">
                                            <Link href={`post/${props.post?.url ? props.post?.url : ""}`} className="hover-underline">
                                                {props.post?.title}
                                            </Link>
                                        </h2>
                                        <p className="text mt-15"> {props.post?.description} </p>
                                    </div>
                                    <div className="col-4 custom__sub-video--width">
                                        <div className="img th-200 img-cover radius-4 overflow-hidden">
                                            <img src={props.post?.imageSmall ? props.post?.imageSmall : "404"} alt="" />
                                            <a href={props.post?.videoUrl ? props.post.videoUrl : "404"} data-lity="" className="video_icon icon-60">
                                                <i className="ion-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}