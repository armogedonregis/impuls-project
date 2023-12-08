import { Carousel } from "@/components/carousel"
import { VideoCard } from "../../../swiperSlider/videoCard"
import { SwiperSlide } from "swiper/react"
import { postType } from "@/types/postsType"
import { BotVideoPost } from "../../../posts/botVideoPost"

export const HotVideosBlock: React.FC<{
    videoCards: postType[],
    randomPosts: postType[]
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
                            {props.videoCards.map((post, id) => {
                                return id < 2 ?
                                <SwiperSlide key={id} className={"swiper-wrapper"}>
                                    <VideoCard post={post} />
                                </SwiperSlide> : null
                            })}
                        </div> : null
                    }
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Carousel>
            </div>
            {
                props.randomPosts ?
                <div className="sub-videos tc-post-list-style2">
                    <div className="items">
                        <div className="row gx-5">
                            <BotVideoPost post={props.randomPosts[0]} />
                            <BotVideoPost post={props.randomPosts[1]} />
                            <BotVideoPost post={props.randomPosts[2]} />
                        </div>
                    </div>
                </div> : null
            }
        </section>
    )
}