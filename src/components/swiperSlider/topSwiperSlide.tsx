import { TopSwiperSliderType } from "../types/carousel"

export const TopSwiperSlideContent = (props: TopSwiperSliderType) => {
    return (
        <div className="card-slide">
            <div className="img img-cover">
                <img src={props.imgSrc} alt="" />
            </div>
            <div className="info item-750">
                <div className="date mb-30 fsz-12px">
                    <a href={props.imgSrc} className="tag">{props.category}</a>
                    <span className="me-3"><i className="la la-calendar me-2"></i>{props.date}</span>
                    <span><i className="la la-user me-2"></i>{props.author}</span>
                </div>
                <h2 className="mb-20"> <a href="#">{props.h2}</a> </h2>
                <p className="text">{props.pText}</p>
            </div>
        </div>
    )
}