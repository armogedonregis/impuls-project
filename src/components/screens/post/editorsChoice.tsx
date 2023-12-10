import { Swiper, SwiperSlide } from "swiper/react"
import { postType } from "@/types/postsType"
import { EditorsChoiceSlide } from "./editosChoiceSlide"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

type editorsChoiceType = {
    rPosts: postType[]
}

export const EditorsChoice = (props: editorsChoiceType) => {

    return (
        <section className="tc-editors-choice-style3 mb-40">
            <div className="container">
                <div className="section-title-style2 mb-30">
                    <h3 className="color-000">Editor's Choice</h3>
                </div>
                <div className={"tc-post-grid-style1 tc-editors-choice-slider3 tc-slider-style1 slider-color-orange1"}>
                <Swiper
                    watchOverflow={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    keyboard={false}
                    speed={1000}
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 6000 }}
                    style={{overflow: 'hidden'}}
                >
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                props.rPosts
                                ? props.rPosts.map((item, id) => (
                                    <SwiperSlide key={id}>
                                        <EditorsChoiceSlide key={id} post={item} />
                                    </SwiperSlide>
                                )) : null
                            }
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
                </div>
            </div>
        </section>
    )
}