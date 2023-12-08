import { postData } from "@/types/postsType"

type heroPostType = {
    post: postData;
}

export const HeroPost = (props: heroPostType) => {
    return (
        <>
            <div className="img img-cover th-550 radius-6 overflow-hidden">
                <img src={props.post?.imageSmall} alt="" />
            </div>
            <div className="content pt-30">
                <h2 className="title mb-20 fsz-28px">
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
        </>
    )
}