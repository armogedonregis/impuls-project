import { Carousel } from "@/components/carousel"
import { MiddleSwiperSlideContent } from "../../../swiperSlider/middleSwiperSlide"
import { SwiperSlide } from "swiper/react"
import { postType } from "@/types/postsType"

export const FavoriteRandomPosts: React.FC<{
    randomPosts: postType[]
}> = (props) => {
    return (
        <section className="tc-google-stories-style10 px-lg-5 mt-40 mb-40">
            <p className="text-uppercase fsz-14px mb-40"> Favorite random posts (8 - 10 штук) </p>
            <div className="tc-google-stories-slider10">
                <Carousel
                    slidesPerView={5}
                    autoplay={true}
                    delayProp={5000}
                    spaceBetween={15}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        787: { slidesPerView: 2 },
                        991: { slidesPerView: 2 },
                        1200: { slidesPerView: 2 },
                        1400: {  slidesPerView: 3 },
                        1520: { slidesPerView: 4 },
                        1600: { slidesPerView: 5 }
                    }}
                    navigation={{
                        nextEl: '.tc-google-stories-slider10 .swiper-button-next',
                        prevEl: '.tc-google-stories-slider10 .swiper-button-prev',
                    }}
                >
                    {
                        props.randomPosts
                        ? props.randomPosts.map(item => (
                                <SwiperSlide key={item.id}>
                                    <MiddleSwiperSlideContent key={item.id} {...item} />
                                </SwiperSlide>
                        )) : null
                    }
                </Carousel>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    )
}