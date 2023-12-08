import { SwiperSlide } from 'swiper/react';
import { Carousel } from '../carousel';
import { TopSwiperSlideContent } from '../swiperSlider/topSwiperSlide';
import { swiperPostData } from '@/types/postsType';

export const HeaderSwiper: React.FC<{
    sliderPosts: swiperPostData[]
}> = (props) => {
    return (
        <div className="col-md-6 col-lg-7 col-xxl-8">
            <div className="head-slider">
                <div className="tc-header-slider10">
                    <Carousel
                        slidesPerView={1}
                        spaceBetween={0}
                        delayProp={6000}
                        autoplay={true}
                        navigation={{
                            nextEl: '.tc-header-slider10 .swiper-button-next',
                            prevEl: '.tc-header-slider10 .swiper-button-prev',
                        }}
                        keyboard={false}
                    >
                        {
                            props.sliderPosts
                            ? props.sliderPosts.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <TopSwiperSlideContent {...item} />
                                    </SwiperSlide>
                                )
                            }) : null
                        }
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}