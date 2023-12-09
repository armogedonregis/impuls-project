import { Carousel } from "@/components/carousel"
import { VideoCard } from "../../../swiperSlider/videoCard"
import { SwiperSlide } from "swiper/react"
import { postType } from "@/types/postsType"
import { BotVideoPost } from "../../../posts/botVideoPost"

export const HotVideosBlock: React.FC<{
    videoCards: postType[]
}> = (props) => {
    return (
        <section className="tc-hot-videos-style11 px-lg-5 pb-80">
            <div className="tc-hot-videos-slider11">
                <Carousel
                    className={"swiper-container"}
                    effect="fade"
                    watchOverflow={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    keyboard={false}
                >
                    {
                        props.videoCards
                        ? <div className="swiper-wrapper">
                            <SwiperSlide className={"swiper-wrapper"}>
                                <VideoCard post={props.videoCards[0]} />
                            </SwiperSlide>
                            <SwiperSlide className={"swiper-wrapper"}>
                                <VideoCard post={props.videoCards[1]} />
                            </SwiperSlide>
                        </div> : null
                    }
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Carousel>
            </div>
            {
                props.videoCards ?
                <div className="sub-videos tc-post-list-style2">
                    <div className="items">
                        <div className="row gx-5">
                            <BotVideoPost post={props.videoCards[2]} />
                            <BotVideoPost post={props.videoCards[3]} />
                            <BotVideoPost post={props.videoCards[4]} />
                        </div>
                    </div>
                </div> : null
            }
        </section>
    )
}