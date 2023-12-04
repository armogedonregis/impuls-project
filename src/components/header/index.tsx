import { Dispatch, SetStateAction } from 'react';
import { Carousel } from '../carousel';
import { DropDownCategory } from './dropDownCategory';
import { SwiperSlide } from 'swiper/react';
import { HeaderLogo } from './headerLogo';
import { ChoiseTheme } from './choiseTheme';
import { HeaderPost } from './headerPost';
import { LangBar } from './langBar';
import { TopSwiperSlideContent } from '../swiperSlider/topSwiperSlide';
import { mainHeroCarouselData } from '../data/mainHeroCarouselData';
import { ISliderPosts } from '../types/post';


export const Header: React.FC<{
    isNavBarOpen: Boolean;
    openNavBar: Dispatch<SetStateAction<Boolean>>;
    sliderPosts: ISliderPosts[];
}> = ({ isNavBarOpen, openNavBar, sliderPosts }) => {
    return (
        <header className={'tc-header-style10'}>
            <nav className={"navbar navbar-expand-lg navbar-dark style-10 px-lg-5"}>
                <div className="container-fluid p-0">
                    <HeaderLogo />
                    <div className="collapse navbar-collapse custom-height" id="navbarSupportedContent">
                        <DropDownCategory />
                        <div className="nav-side">
                            <LangBar />
                            <ChoiseTheme />

                            <a style={{ cursor: 'pointer' }}
                                className={isNavBarOpen ? "icon-link search-btn-style1"
                                    : "icon-link search-btn-style1"}
                                onClick={() => { openNavBar(!isNavBarOpen) }}
                            >
                                <i style={{ display: !isNavBarOpen ? 'inline-block' : 'none' }}
                                    className="la la-search sOpen-btn"
                                />
                                <i style={{ display: isNavBarOpen ? 'inline-flex' : 'none' }}
                                    className="la la-close sClose-btn"
                                />
                            </a>

                            <button
                                className="navbarList-icon"
                                data-bs-toggle="offcanvas"
                                data-href="#offcanvasExample"
                                role="button"
                                aria-controls="offcanvasExample"
                            >
                                <span></span>
                                <span></span>
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="row gx-0">
                <div className="col-md-6 col-lg-7 col-xxl-8">
                    <div className="head-slider">
                        <div className="tc-header-slider10">

                            {/* КОМПОНЕНТ КАРУСЕЛ ОСталЬНЫЕ ПО ТАКОМУ ЖЕ ПРИНЦИПУ В ПРопСЫ КИДАЕШь КОНФИГ */}
                            <Carousel
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={{
                                nextEl: '.tc-header-slider10 .swiper-button-next',
                                prevEl: '.tc-header-slider10 .swiper-button-prev',
                            }}
                                keyboard={false}>
                                {sliderPosts.map(item => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <TopSwiperSlideContent {...item} />
                                        </SwiperSlide>
                                    )
                                })}
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <HeaderPost />
            </div>
        </header>
    );
};