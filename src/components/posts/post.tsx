import { postType } from "../../types/postsType"

type Type = {
    postType: "imgLeftTop" | "imgLeftBottom" | "imgTop" | "imgRight";
    post: postType
}

export const Post = (props: Type) => {

    let titleClassName

    switch(props.postType) {
        // Image on the left but post is first
        case "imgLeftTop":
            titleClassName = "item pb-15 pt-0"
            break
        // Image still one the left side, but post is last (second)
        case "imgLeftBottom":
            titleClassName = "item pt-15 pb-15"
            break
        case "imgTop":
            return (
                // Post with image on the top
                <div className="tc-post-grid-default mt-30 mt-lg-0">
                    <div className="item">
                        <div className="img img-cover th-200 radius-6 overflow-hidden">
                            <img src={props.post?.imageSmall} alt=""/>
                        </div>
                        <div className="content pt-20">
                            <h2 className="title mb-10">
                                <a href={props.post?.url} className="hover-underline fsz-28px">
                                    {props.post?.title}
                                </a>
                            </h2>
                            <p className="text mt-15 mb-20">{props.post?.description}</p>
                            <ul className="fsz-12px">
                                <li>
                                    <span className="me-3"><i className="la la-calendar me-2"></i>{props.post?.publicationDate}</span>
                                    <span className="me-3"><i className="la la-user me-2"></i>{props.post?.author}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        case "imgRight":
            return (
                // Post with image on right side
                <div className="item pb-4">
                    <div className="row gx-3 align-items-center">
                        <div className="col-8">
                        <div className="content pt-20">
                            <h2 className="title mb-10">
                                <a href={props.post?.url} className="hover-underline fsz-28px">
                                    {props.post?.title}
                                </a>
                            </h2>
                            <p className="text mt-15 mb-20">{props.post?.description}</p>
                            <ul className="fsz-12px">
                                <li>
                                    <span className="me-3"><i className="la la-calendar me-2"></i>{props.post?.publicationDate}</span>
                                    <span className="me-3"><i className="la la-user me-2"></i>{props.post?.author}</span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-4">
                            <div className="img th-120 img-cover radius-4 overflow-hidden">
                                <img src={props.post?.imageSmall} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    
    return (
        // Post with image on left side
        <div className={titleClassName}>
            <div className="row gx-3">
                <div className="col-4">
                    <div className="img th-140 img-cover radius-4 overflow-hidden">
                        <img src={props.post?.imageSmall} alt="" />
                        <a href={props.post?.videoUrl} data-lity="" className="video_icon icon-60">
                            <i className="ion-play"></i>
                        </a>
                    </div>
                </div>
                <div className="col-8">
                <div className="content">
                    <h2 className="title">
                        <a href={props.post?.url}>{props.post?.title}</a>
                    </h2>
                    <p className="text mt-15 mb-20">
                        {props.post?.description}
                    </p>
                    <ul className="d-flex fsz-12px">
                        <li>
                            <span className="me-3"><i className="la la-calendar me-2"></i>{props.post?.publicationDate}</span>
                            <span className="me-3"><i className="la la-user me-2"></i>{props.post?.author}</span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}