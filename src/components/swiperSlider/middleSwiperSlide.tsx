import { postType } from "@/types/postsType"

export const MiddleSwiperSlideContent = (props: postType) => {
    return (
        <div className="story-card">
            <div className="img img-cover">
                <img src={props.imageSmall} alt="" className="main-img" />
            </div>
            <div className="info">
                <h2 className="fsz-28px mb-20"> <a href={props.url} className="hover-main">{props.title}</a></h2>
                <li className="fsz-12px">
                    <span className="me-3"><i className="la la-calendar me-2"></i>{props.publicationDate}</span>
                    <span className="me-3"><i className="la la-user me-2"></i>{props.author}</span>
                </li>
            </div>
        </div>
    )
}