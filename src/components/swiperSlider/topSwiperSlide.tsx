import { swiperPostData } from "@/types/postsType"
import Image from "next/image"

export const TopSwiperSlideContent = (props: swiperPostData) => {
    return (
        <div className="card-slide">
            <div className="img img-cover">
                <Image
                    width={1200}
                    height={800}
                    src={props.image ? props.image : "404"}
                    alt=""
                />
            </div>
            <div className="info item-750">
                <div className="date mb-30 fsz-12px">
                    <span className="me-3"><i className="la la-calendar me-2"></i>
                        {props.publicationDate ? props.publicationDate : null}
                    </span>
                    <span><i className="la la-user me-2"></i>
                        {props.author ? props.author : null}
                    </span>
                </div>
                <h2 className="mb-20"> <a href={props.url ? props.url : "404"}>
                    {props.title ? props.title : null}
                </a> </h2>
                <p className="text">{props.description ? props.description : null}</p>
            </div>
        </div>
    )
}