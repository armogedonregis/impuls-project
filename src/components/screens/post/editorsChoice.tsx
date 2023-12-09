import { SwiperSlide } from "swiper/react"
import { Carousel } from "@/components/carousel"
import { postType } from "@/types/postsType"
import { EditorsChoiceSlide } from "./editosChoiceSlide"

export const EditorsChoice: React.FC<{
    post: postType
}> = (props) => {
    return (
        <section className="tc-editors-choice-style3 mb-40">
            <div className="container">
                <div className="section-title-style2 mb-30">
                    <h3 className="color-000">Editor's Choice</h3>
                </div>
                <div className="tc-post-grid-style1 tc-editors-choice-slider3 tc-slider-style1 slider-color-orange1">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <EditorsChoiceSlide post={props.post} />
                            <EditorsChoiceSlide post={props.post} />
                            <EditorsChoiceSlide post={props.post} />
                            <EditorsChoiceSlide post={props.post} />
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </section>
    )
}