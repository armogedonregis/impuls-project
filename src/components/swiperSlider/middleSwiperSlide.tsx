import { MiddleSwiperSliderType } from "@/types/carousel"

export const MiddleSwiperSlideContent = (props: MiddleSwiperSliderType) => {
    return (
        <div className="story-card">
            <div className="img img-cover">
                <img src={props.imgSrc} alt="" className="main-img" />
            </div>
            <div className="info">
                <h2 className="fsz-28px mb-20"> <a href={props.href} className="hover-main">{props.h2}</a></h2>
                <li className="fsz-12px">
                    <span className="me-3"><i className="la la-calendar me-2"></i>{props.date}</span>
                    <span className="me-3"><i className="la la-user me-2"></i>{props.author}</span>
                </li>
            </div>
        </div>
    )
}