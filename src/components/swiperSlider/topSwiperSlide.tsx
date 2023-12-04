import { TopSwiperSliderType } from "@/types/carousel"
import Image from "next/image"

export const TopSwiperSlideContent = (props: TopSwiperSliderType) => {
    return (
        <div className="card-slide">
            <div className="img img-cover">
                <Image width={1200} height={800} src={props.image} alt="" />
            </div>
            <div className="info item-750">
                <div className="date mb-30 fsz-12px">
                    {/* <a href={props.image} className="tag">{'props.category'}</a> */}
                    <span className="me-3"><i className="la la-calendar me-2"></i>{props.publicationDate}</span>
                    {props?.author && <span><i className="la la-user me-2"></i>{props?.author}</span>}
                </div>
                <h2 className="mb-20"> <a href="#">{props.title}</a> </h2>
                <p className="text">{props.description}</p>
            </div>
        </div>
    )
}