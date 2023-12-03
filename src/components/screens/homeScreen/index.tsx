import { Carousel } from "@/components/carousel";
import { MiddleSwiperSlideContent } from "@/components/swiperSlider/middleSwiperSlide";
import { CategoryHome } from "./categoryHome";
import { SwiperSlide } from "swiper/react";
import { middleSwiperSlideData } from "@/components/data/middleSwiperSlideData";

export const HomeScreen = () => {
    return (
        <main className="home-style10">
            <CategoryHome />
            <section className="tc-google-stories-style10 px-lg-5 mt-40 mb-40">
                <p className="text-uppercase fsz-14px mb-40"> Favorite random posts (8 - 10 штук) </p>
                <div className="tc-google-stories-slider10">
                    <Carousel
                        slidesPerView={5} 
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                            787: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 2,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                            1520: {
                                slidesPerView: 4,
                            },
                            1600: {
                                slidesPerView: 5,
                            }
                        }}
                        navigation={{
                            nextEl: '.tc-google-stories-slider10 .swiper-button-next',
                            prevEl: '.tc-google-stories-slider10 .swiper-button-prev',
                        }}
                    >
                        {[...middleSwiperSlideData, ...middleSwiperSlideData].map(item => {
                            return (
                                <SwiperSlide key={item.author}>
                                    <MiddleSwiperSlideContent {...item} />
                                </SwiperSlide>
                            )
                        })}
                    </Carousel>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </section>
            <section className="brd-gray mb-40 overflow-hidden">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <a href="" className="img img-cover overflow-hidden radius-6">
                            <img src="assets/img/banner1.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- ====== start whats new content ====== --> */}
            <section className="whats-new-style10 px-lg-5 overflow-hidden whats-new-style10--pb-0">
                <div className="sec-content border-1 border-top brd-gray pt-70 pb-70">
                    <div className="row gx-5">
                        <div className="col-lg-9 custom-col-large">
                            <div className="row gx-5">
                                <div className="col-lg-8 border-1 border-end brd-gray">
                                    <div className="row text-uppercase fsz-14px">
                                        <div className="col-lg-6">
                                            <p className="text-uppercase"> Tourism </p>
                                        </div>
                                        <div className="col-lg-6 text-lg-end">
                                            <a href="#" className="text-capitalize hover-main"> All Tourism News <i className="la la-angle-right ms-1"></i> </a>
                                        </div>
                                    </div>

                                    <div className="tc-post-grid-default pt-30">
                                        <div className="item">
                                            <div className="img img-cover th-550 radius-6 overflow-hidden">
                                                <img src="assets/img/1.png" alt="" />
                                            </div>
                                            <div className="content pt-30">
                                                <h2 className="title mb-20 fsz-28px">
                                                    <a href="#">2022 NFL: Top 4 Quaterbacks selected</a>
                                                </h2>
                                                <p className="text mt-15 mb-20">
                                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                </p>
                                                <ul className="d-flex fsz-12px">
                                                    <li>
                                                        <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                        <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="sub-content pt-60">
                                                <div className="row gx-5">
                                                    <div className="col-lg-7 border-1 border-end brd-gray">
                                                        <div className="tc-post-list-style2">
                                                            <div className="items">
                                                                <div className="item pb-15 pt-0">
                                                                    <div className="row gx-3">
                                                                        <div className="col-4">
                                                                            <div className="img th-140 img-cover radius-4 overflow-hidden">
                                                                                <img src="assets/img/2.png" alt="" />
                                                                                <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity="" className="video_icon icon-60">
                                                                                    <i className="ion-play"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="content">
                                                                                <h2 className="title">
                                                                                    <a href="#" className="hover-underline fsz-28px">
                                                                                        Lorem Ipsum es simplemente el texto de relleno de las imprentas
                                                                                    </a>
                                                                                </h2>
                                                                                <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                                                <ul className="fsz-12px">
                                                                                    <li>
                                                                                        <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                                        <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="item pt-15 pb-15">
                                                                    <div className="row gx-3">
                                                                        <div className="col-4">
                                                                            <div className="img th-140 img-cover radius-4 overflow-hidden">
                                                                                <img src="assets/img/3.png" alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-8">
                                                                            <div className="content">
                                                                                <h2 className="title">
                                                                                    <a href="#" className="hover-underline fsz-28px">
                                                                                        Padding in Miami Beach
                                                                                    </a>
                                                                                </h2>
                                                                                <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                                                <ul className="fsz-12px">
                                                                                    <li>
                                                                                        <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                                        <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-5">
                                                        <div className="tc-post-grid-default mt-30 mt-lg-0">
                                                            <div className="item">
                                                                <div className="img img-cover th-200 radius-6 overflow-hidden">
                                                                    <img src="assets/img/3.png" alt="" />
                                                                </div>
                                                                <div className="content pt-20">
                                                                    <h2 className="title mb-10">
                                                                        <a href="#" className="hover-underline fsz-28px">
                                                                            Top 15 Games worthy to wait in Q4, 2023
                                                                        </a>
                                                                    </h2>
                                                                    <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                                    <ul className="fsz-12px">
                                                                        <li>
                                                                            <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                            <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <p className="text-uppercase"> Education </p>

                                    <div className="tc-post-list-style2 pt-30">
                                        <div className="items">
                                            <div className="item pb-4">
                                                <div className="row gx-3 align-items-center">
                                                    <div className="col-8">
                                                        <div className="content">
                                                            <h2 className="title">
                                                                <a href="#" className="hover-underline fsz-28px">
                                                                    Hoki’s story: The dog in Nagoya town
                                                                </a>
                                                            </h2>
                                                            <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                            <ul className="d-flex fsz-12px">
                                                                <li>
                                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="img th-120 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/1.jpeg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item py-4">
                                                <div className="row gx-3">
                                                    <div className="col-8">
                                                        <div className="content">
                                                            <h2 className="title">
                                                                <a href="#" className="hover-underline fsz-28px">
                                                                    Good sailors don't come from calm seas
                                                                </a>
                                                            </h2>
                                                            <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                            <ul className="d-flex fsz-12px">
                                                                <li>
                                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="img th-120 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/2.jpeg" alt="" />
                                                            <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity="" className="video_icon icon-60">
                                                                <i className="ion-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item py-4">
                                                <div className="row gx-3">
                                                    <div className="col-8">
                                                        <div className="content">
                                                            <h2 className="title">
                                                                <a href="#" className="hover-underline fsz-28px">
                                                                    Padding in Miami Beach
                                                                </a>
                                                            </h2>
                                                            <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                            <ul className="d-flex fsz-12px">
                                                                <li>
                                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="img th-120 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/3.jpeg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item py-4">
                                                <div className="row gx-3">
                                                    <div className="col-8">
                                                        <div className="content">
                                                            <h2 className="title">
                                                                <a href="#" className="hover-underline fsz-28px">
                                                                    Padding in Miami Beach
                                                                </a>
                                                            </h2>
                                                            <p className="text mt-15 mb-20"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]</p>
                                                            <ul className="d-flex fsz-12px">
                                                                <li>
                                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="img th-120 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/1.jpeg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="#" className="mt-20 hover-main"> All Education News <i className="la la-angle-right ms-3"></i> </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 custom-col-large border-1 border-start brd-gray">
                            <div className="widgets d-flex flex-row">
                                <div className="row g-3 custom-col-padding">
                                    <div className="col-lg-12 custom-col-half custom-col-small tc-widget-top-games-style3">
                                        <div className="widget-title mb-30">
                                            <h3 className="lh-1 fsz-32px">Top Posts</h3>
                                        </div>
                                        <div className="widget-content">
                                            <div className="img-card">
                                                <div className="img img-cover">
                                                    <img src="assets/img/1.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="title title-white">
                                                        <a href="#">God King Garen LOL, What's new update?</a>
                                                    </h3>
                                                    <div className="meta-bot mt-15 fsz-12px">
                                                        <span>Author</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="number-cards">
                                                <a href="#" className="number-card">
                                                    <span className="number">
                                                        2
                                                    </span>
                                                    <div className="info">
                                                        <h3 className="title fsz-28px">The Legend of Zelda: Breath of the Wild 2</h3>
                                                        <div className="meta-bot fsz-12px">
                                                            <span>Author</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="number-card">
                                                    <span className="number">
                                                        3
                                                    </span>
                                                    <div className="info">
                                                        <h3 className="title fsz-28px">God of War 4</h3>
                                                        <div className="meta-bot fsz-12px">
                                                            <span>Author</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="number-card">
                                                    <span className="number">
                                                        4
                                                    </span>
                                                    <div className="info">
                                                        <h3 className="title fsz-28px">Horizon Zero Dawn</h3>
                                                        <div className="meta-bot fsz-12px">
                                                            <span>Author</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="number-card">
                                                    <span className="number">
                                                        5
                                                    </span>
                                                    <div className="info">
                                                        <h3 className="title fsz-28px">The Witcher 3: Become Vampires</h3>
                                                        <div className="meta-bot fsz-12px">
                                                            <span>Author</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 custom-col-half custom-col-small tc-subscribe-style3 mt-30 custom-mt-70 custom-col-margin">
                                        <div className="sub-form radius-7">
                                            <p className="text-uppercase fsz-14px mb-30"> newsletter </p>
                                            <div className="text fsz-14px mb-15">
                                                Subscribe our newsletter to get the  latest updates about news &amp; promotions
                                            </div>
                                            <div className="form-group">
                                                <span className="icon">
                                                    <i className="la la-user"></i>
                                                </span>
                                                <input type="text" className="form-control" placeholder="Your Full Name" />
                                            </div>
                                            <div className="form-group">
                                                <span className="icon">
                                                    <i className="la la-envelope"></i>
                                                </span>
                                                <input type="text" className="form-control" placeholder="Enter your email" />
                                            </div>
                                            <div className="form-check mt-2">
                                                <input className="form-check-input" type="checkbox" name="subCheck" id="subCheck1" />
                                                <label className="form-check-label fsz-14px lh-5" htmlFor="subCheck1">
                                                    By signing up, you agree to the our terms and our
                                                    <a href="#" className="text-decoration-underline color-000">Privacy Policy</a>
                                                </label>
                                            </div>
                                            <a href="#" className="btn w-100 bg-main mt-30 rounded-pill">
                                                <span className="text-white">subscribe</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====== start banner ====== --> */}
            <section className="pt-40 pb-40 bg-gray3 overflow-hidden">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <a href="" className="img img-cover overflow-hidden radius-6">
                            <img src="assets/img/banner1.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- ====== start tc-trends-news-style10 ====== --> */}
            <section className="tc-trends-news-style10 px-lg-5 overflow-hidden">
                <div className="row text-uppercase fsz-14px mb-40">
                    <p className="text-uppercase"> Gastronomy </p>

                    <div className="col-lg-12 text-lg-end">
                        <a href="#" className="text-capitalize hover-main"> View All Posts <i className="la la-angle-right ms-1"></i> </a>
                    </div>

                </div>
                <div className="tc-trends-news-slider10">
                    <div className="swiper-container">
                        <div className="swiper-wrapper custom-swiper-wrapper ">
                            <div className="swiper-slide">
                                <div className="tc-post-grid-default">
                                    <div className="item item-550">
                                        <div className="img img-cover th-350 radius-6 overflow-hidden">
                                            <img src="assets/img/1.jpeg" alt="" />
                                        </div>
                                        <div className="content pt-30">
                                            <h2 className="title mb-20 fsz-28px">
                                                <a href="#">How to make shrimp like a Poseidon Seafood </a>
                                            </h2>
                                            <p className="text mb-20 fsz-14px">
                                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                            </p>
                                            <ul className="fsz-12px">
                                                <li>
                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                </li>
                                            </ul>
                                            <span className="numb mt-40 color-main"> 01 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tc-post-grid-default">
                                    <div className="item item-550">
                                        <div className="img img-cover th-250 radius-6 overflow-hidden">
                                            <img src="assets/img/2.png" alt="" />
                                        </div>
                                        <div className="content pt-30">
                                            <h2 className="title mb-20 fsz-28px">
                                                <a href="#">How to make shrimp like a Poseidon Seafood </a>
                                            </h2>
                                            <p className="text mb-20 fsz-14px">
                                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                            </p>
                                            <ul className="fsz-12px">
                                                <li>
                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                </li>
                                            </ul>
                                            <span className="numb mt-40 color-main"> 02 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tc-post-grid-default">
                                    <div className="item item-750">
                                        <div className="img img-cover th-550 radius-6 overflow-hidden">
                                            <img src="assets/img/3.jpeg" alt="" />
                                        </div>
                                        <div className="content pt-30">
                                            <h2 className="title mb-20 fsz-28px">
                                                <a href="#">Discovery the culture of Japan</a>
                                            </h2>
                                            <p className="text mb-20 fsz-14px">
                                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                            </p>
                                            <ul className="fsz-12px">
                                                <li>
                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                </li>
                                            </ul>
                                            <span className="numb mt-40 color-main"> 03 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="tc-post-grid-default">
                                    <div className="item item-550">
                                        <div className="img img-cover th-350 radius-6 overflow-hidden">
                                            <img src="assets/img/1.jpeg" alt="" />
                                        </div>
                                        <div className="content pt-30">
                                            <h2 className="title mb-20 fsz-28px">
                                                <a href="#">How to make shrimp like a Poseidon Seafood </a>
                                            </h2>
                                            <p className="text mb-20 fsz-14px">
                                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                            </p>
                                            <ul className="fsz-12px">
                                                <li>
                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                </li>
                                            </ul>
                                            <span className="numb mt-40 color-main"> 04 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tc-post-grid-default">
                                    <div className="item item-550">
                                        <div className="img img-cover th-250 radius-6 overflow-hidden">
                                            <img src="assets/img/2.png" alt="" />
                                        </div>
                                        <div className="content pt-30">
                                            <h2 className="title mb-20 fsz-28px">
                                                <a href="#">How to make shrimp like a Poseidon Seafood </a>
                                            </h2>
                                            <p className="text mb-20 fsz-14px">
                                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                            </p>
                                            <ul className="fsz-12px">
                                                <li>
                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                </li>
                                            </ul>
                                            <span className="numb mt-40 color-main"> 05 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tc-post-grid-default">
                                    <div className="item item-750">
                                        <div className="img img-cover th-550 radius-6 overflow-hidden">
                                            <img src="assets/img/3.jpeg" alt="" />
                                        </div>
                                        <div className="content pt-30">
                                            <h2 className="title mb-20 fsz-28px">
                                                <a href="#">Discovery the culture of Japan</a>
                                            </h2>
                                            <p className="text mb-20 fsz-14px">
                                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                            </p>
                                            <ul className="fsz-12px">
                                                <li>
                                                    <span className="me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                                                    <span className="me-3"><i className="la la-user me-2"></i> Logan</span>
                                                </li>
                                            </ul>
                                            <span className="numb mt-40 color-main"> 06 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="arrows">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== end tc-trends-news-style10 ====== --> */}

            {/* <!-- ====== start tc-hot-videos-style11 ====== --> */}
            <section className="tc-hot-videos-style11 px-lg-5 pb-80">
                <div className="tc-hot-videos-slider11">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="video-card">
                                    <div className="img img-cover">
                                        <img src="assets/img/1.png" alt="" />
                                        <div className="info">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-7">
                                                    <div className="date mb-20 fsz-12px">
                                                        <span>Author</span>
                                                    </div>
                                                    <h2 className="title fsz-40px"> <a href="#">Amazing View! Catch the sunrise in high moutain</a> </h2>
                                                    <p className="fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...] </p>
                                                    <a href="https://youtu.be/pGbIOC83-So?t=21" data-fancybox="" className="play-cont mt-90">
                                                        <i className="ion-play me-3"></i>
                                                        <span className="fsz-14px"> Play Video</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="video-card">
                                    <div className="img img-cover">
                                        <img src="assets/img/2.png" alt="" />
                                        <div className="info">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-7">
                                                    <div className="date mb-20 fsz-12px">
                                                        <span>Author</span>
                                                    </div>
                                                    <h2 className="title fsz-40px"> <a href="#">Amazing View! Catch the sunrise in high moutain</a> </h2>
                                                    <p className="fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...] </p>
                                                    <a href="https://youtu.be/pGbIOC83-So?t=21" data-fancybox="" className="play-cont mt-90">
                                                        <i className="ion-play me-3"></i>
                                                        <span className="fsz-14px">Play Video</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
                <div className="sub-videos tc-post-list-style2">
                    <div className="items">
                        <div className="row gx-5">
                            <div className="col-lg-4 custom-top-0 border-1 border-end brd-gray mt-50">
                                <div className="item border-0">
                                    <div className="custom_sub-video row gx-3 align-items-center">
                                        <div className="col-12 custom__sub-video--order custom__sub-video--width">
                                            <div className="content">
                                                <div className="date mb-20 fsz-12px">
                                                    <span className="meta-bot mt-15">Author</span>
                                                </div>
                                                <div className="sub-videos-flex">
                                                    <div className="col-8">
                                                        <h2 className="title fsz-28px">
                                                            <a href="#" className="hover-underline">
                                                                Bhutan! The happiest on the world, lorem Ipsum es simplemente el texto.
                                                            </a>
                                                        </h2>
                                                        <p className="text mt-15"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...] </p>
                                                    </div>

                                                    <div className="col-4 custom__sub-video--width">
                                                        <div className="img th-200 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/1.jpeg" alt="" />
                                                            <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity="" className="video_icon icon-60">
                                                                <i className="ion-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-top-0 border-1 border-end brd-gray mt-50">
                                <div className="item border-0">
                                    <div className="custom_sub-video row gx-3 align-items-center">
                                        <div className="col-12 custom__sub-video--order custom__sub-video--width">
                                            <div className="content">
                                                <div className="date mb-20 fsz-12px">
                                                    <span className="meta-bot mt-15">Author</span>
                                                </div>
                                                <div className="sub-videos-flex">
                                                    <div className="col-8">
                                                        <h2 className="title fsz-28px">
                                                            <a href="#" className="hover-underline">
                                                                The happiest on the world
                                                            </a>
                                                        </h2>
                                                        <p className="text mt-15"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...] </p>
                                                    </div>

                                                    <div className="col-4 custom__sub-video--width">
                                                        <div className="img th-200 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/2.jpeg" alt="" />
                                                            <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity="" className="video_icon icon-60">
                                                                <i className="ion-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 custom-top-0 border-1 border-end brd-gray mt-50">
                                <div className="item border-0">
                                    <div className="custom_sub-video row gx-3 align-items-center">
                                        <div className="col-12 custom__sub-video--order custom__sub-video--width">
                                            <div className="content">
                                                <div className="date mb-20 fsz-12px">
                                                    <span className="meta-bot mt-15">Author</span>
                                                </div>
                                                <div className="sub-videos-flex">
                                                    <div className="col-8">
                                                        <h2 className="title fsz-28px">
                                                            <a href="#" className="hover-underline">
                                                                Discover the blue of the Ocean
                                                            </a>
                                                        </h2>
                                                        <p className="text mt-15"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...] </p>
                                                    </div>

                                                    <div className="col-4 custom__sub-video--width">
                                                        <div className="img th-200 img-cover radius-4 overflow-hidden">
                                                            <img src="assets/img/3.jpeg" alt="" />
                                                            <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity="" className="video_icon icon-60">
                                                                <i className="ion-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== end tc-hot-videos-style11 ====== --> */}

            {/* <!-- ====== start posts ====== --> */}
            <section className="posts bg-gray1 px-lg-5 pb-80 pt-80">
                <div className="row">
                    <div className="col-lg-3 custom-col-half custom-col-trends custom-col-large--trends">
                        <div className="item p-30 bg-white radius-7 border-0 mb-30">
                            <p className="text-uppercase mb-20"> Trend & Fashion </p>
                            <div className="img img-cover th-250 radius-7 overflow-hidden">
                                <img src="assets/img/1.jpeg" alt="" />
                            </div>
                            <div className="content pt-30">
                                <h2 className="title fsz-28px pb-30 mb-30 border-1 border-bottom brd-gray">
                                    <a href="#">
                                        Top 5 Best of Mustaches for Hipster 2022
                                    </a>
                                </h2>
                                <ul className="fw-bold f-fm-neco">
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">TOP 10 NFT Token in 2022</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Manoah Dominates, Close in on Blue Jays history</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Experience Ballon Balls in Cappadocia, Turkey</a>
                                        </h2>
                                    </li>
                                </ul>
                                <a href="#" className="mt-20 hover-main"> All Trend & Fashion News <i className="la la-angle-right ms-3"></i> </a>
                            </div>
                        </div>

                        <div className="tc-widget-Instagram-style10 p-30 bg-white radius-7 mt-10 border-0 mb-30">
                            <p className="text-uppercase mb-20"> instagram </p>
                            <div className="insta-imgs">
                                <div className="row gx-2">
                                    <div className="col-4">
                                        <a href="#" className="img">
                                            <img src="assets/img/1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="img">
                                            <img src="assets/img/2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="img">
                                            <img src="assets/img/3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="img">
                                            <img src="assets/img/1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="img">
                                            <img src="assets/img/2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="img">
                                            <img src="assets/img/3.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item p-30 bg-white radius-7 border-0 mb-30">
                            <p className="text-uppercase mb-20"> Trend & Fashion </p>
                            <div className="img img-cover th-230 radius-7 overflow-hidden">
                                <img src="assets/img/2.jpeg" alt="" />
                            </div>
                            <div className="content pt-30">
                                <h2 className="title fsz-28px pb-30 mb-30 border-1 border-bottom brd-gray">
                                    <a href="#">
                                        Top 5 Best of Mustaches for Hipster 2022
                                    </a>
                                </h2>
                                <ul className="fw-bold f-fm-neco">
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">TOP 10 NFT Token in 2022</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Manoah Dominates, Close in on Blue Jays history</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Experience Ballon Balls in Cappadocia, Turkey</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">TOP 10 NFT Token in 2022</a>
                                        </h2>
                                    </li>
                                </ul>
                                <a href="#" className="mt-20 hover-main"> All Sport News <i className="la la-angle-right ms-3"></i> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 custom-col-large">
                        <div className="p-30 bg-white radius-7 border-0 mb-30">
                            <div className="row text-uppercase fsz-14px ">
                                <div className="col-lg-6">
                                    <p className="text-uppercase mb-20"> Health </p>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    <a href="#" className="text-capitalize hover-main"> All Health News <i className="la la-angle-right ms-1"></i> </a>
                                </div>
                            </div>
                            <div className="tc-post-list-style3">
                                <div className="items">
                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="img img-cover th-250 radius-5 overflow-hidden">
                                                    <img src="assets/img/1.jpeg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content mt-4 mt-lg-0">
                                                    <h2 className="title fsz-28px mb-20"> <a href="#">Grace Harbraugh is the hero we didn't know we need</a> </h2>
                                                    <div className="text fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                    </div>
                                                    <div className="meta-bot">
                                                        <small className="fsz-12px"> Author </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="img img-cover th-250 radius-5 overflow-hidden">
                                                    <img src="assets/img/2.jpeg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content mt-4 mt-lg-0">
                                                    <div className="date mb-20 fsz-14px">
                                                        <span className="tag py-1 px-4 bg-light rounded-pill me-2"> Sponsored </span>
                                                    </div>
                                                    <h2 className="title fsz-28px mb-20"> <a href="">iPad Air 4G Wifi + LTE, GPS, 512GB Grey</a> </h2>
                                                    <div className="text fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                    </div>
                                                    <div className="meta-bot">
                                                        <a href="#" className="fsz-12px"> <i className="las la-external-link-square-alt ms-2"></i> www.google.com </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="img img-cover th-250 radius-5 overflow-hidden">
                                                    <img src="assets/img/3.jpeg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content mt-4 mt-lg-0">
                                                    <h2 className="title mb-20 fsz-28px"> <a href="#">Grace Harbraugh is the hero we didn't know we need</a> </h2>
                                                    <div className="text fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                    </div>
                                                    <div className="meta-bot">
                                                        <small className="fsz-12px"> Author </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="p-30 bg-white radius-7 border-0 mb-30">
                            <div className="row text-uppercase fsz-14px ">
                                <div className="col-lg-6">
                                    <p className="text-uppercase mb-20"> Investments </p>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    <a href="#" className="text-capitalize hover-main"> All Investments News <i className="la la-angle-right ms-1"></i> </a>
                                </div>
                            </div>
                            <div className="tc-post-list-style3">
                                <div className="items">
                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="img img-cover th-250 radius-5 overflow-hidden">
                                                    <img src="assets/img/1.jpeg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content mt-4 mt-lg-0">
                                                    <h2 className="title mb-20 fsz-28px"> <a href="#">Grace Harbraugh is the hero we didn't know we need</a> </h2>
                                                    <div className="text fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                    </div>
                                                    <div className="meta-bot">
                                                        <small className="fsz-12px"> Author </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="img img-cover th-250 radius-5 overflow-hidden">
                                                    <img src="assets/img/2.jpeg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content mt-4 mt-lg-0">
                                                    <div className="date mb-20 fsz-14px">
                                                        <span className="tag py-1 px-4 bg-light rounded-pill me-2"> Sponsored </span>
                                                    </div>
                                                    <h2 className="title mb-20 fsz-28px"> <a href="">iPad Air 4G Wifi + LTE, GPS, 512GB Grey</a> </h2>
                                                    <div className="text fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                    </div>
                                                    <div className="meta-bot">
                                                        <a href="#" className="fsz-12px"> <i className="las la-external-link-square-alt ms-2"></i> www.google.com </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="img img-cover th-250 radius-5 overflow-hidden">
                                                    <img src="assets/img/3.jpeg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content mt-4 mt-lg-0">
                                                    <div className="date mb-20 fsz-14px">
                                                        <span className="tag py-1 px-4 bg-light rounded-pill me-2"> Sponsored </span>
                                                    </div>
                                                    <h2 className="title mb-20 fsz-28px"> <a href="">iPad Air 4G Wifi + LTE, GPS, 512GB Grey</a> </h2>
                                                    <div className="text fsz-14px"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor [...]
                                                    </div>
                                                    <div className="meta-bot">
                                                        <a href="#" className="fsz-12px"> <i className="las la-external-link-square-alt ms-2"></i> www.google.com </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 custom-col-half custom-col-large--trends custom-col-margin">
                        <div className="p-30 radius-7 bg-white mb-30">
                            <p className="fsz-14px text-uppercase mb-20"> featured authors </p>

                            <a href="#" className="columnist-card d-flex align-items-center pb-20 border-bottom border-1 brd-gray">
                                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">
                                    <img src="assets/img/author.png" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                                        David K.
                                    </h4>
                                    <div className="jop-title">
                                        <p className="fsz-12px">Jefe de revista</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="columnist-card d-flex align-items-center pb-20 pt-20 border-bottom border-1 brd-gray">
                                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">
                                    <img src="assets/img/author.png" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                                        Antonio M.
                                    </h4>
                                    <div className="jop-title">
                                        <p className="fsz-12px">Critico gastronomy</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="columnist-card d-flex align-items-center pb-20 pt-20 border-bottom border-1 brd-gray">
                                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">
                                    <img src="assets/img/author.png" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                                        Elena S.
                                    </h4>
                                    <div className="jop-title">
                                        <p className="fsz-12px">Author, traductora</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="item p-30 bg-white radius-7 border-0 mb-30">
                            <p className="text-uppercase mb-20"> Finance & Law </p>
                            <div className="content pt-30">
                                <h2 className="title fsz-28px pb-30 mb-30 border-1 border-bottom brd-gray">
                                    <a href="#">
                                        Top 5 Best of Mustaches for Hipster 2022
                                    </a>
                                </h2>
                                <ul className="fw-bold f-fm-neco">
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">TOP 10 NFT Token in 2022</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Manoah Dominates, Close in on Blue Jays history</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Experience Ballon Balls in Cappadocia, Turkey</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">TOP 10 NFT Token in 2022</a>
                                        </h2>
                                    </li>
                                </ul>
                                <a href="#" className="mt-20 hover-main"> All Finance & Law News <i className="la la-angle-right ms-3"></i> </a>
                            </div>
                        </div>

                        <div className="item p-30 bg-white radius-7 border-0 mb-30">
                            <p className="text-uppercase mb-20"> Networking </p>
                            <div className="img img-cover th-230 radius-7 overflow-hidden">
                                <img src="assets/img/1.jpeg" alt="" />
                            </div>
                            <div className="content pt-30">
                                <h2 className="title fsz-28px pb-30 mb-30 border-1 border-bottom brd-gray">
                                    <a href="#">
                                        Top 5 Best of Mustaches for Hipster 2022
                                    </a>
                                </h2>
                                <ul className="fw-bold f-fm-neco">
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">TOP 10 NFT Token in 2022</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Manoah Dominates, Close in on Blue Jays history</a>
                                        </h2>
                                    </li>
                                    <li className="mb-20 fsz-28px d-flex">
                                        <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
                                        <h2 className="fsz-20px">
                                            <a href="#">Experience Ballon Balls in Cappadocia, Turkey</a>
                                        </h2>
                                    </li>
                                </ul>
                                <a href="#" className="mt-20 hover-main"> All Networking News <i className="la la-angle-right ms-3"></i> </a>
                            </div>
                        </div>

                        <div className="tc-widget-social-style10  bg-white">
                            <p className="text-uppercase fsz-14px mb-30"> stay connected </p>
                            <div className="item">
                                <a href="#" className="icon">
                                    <i className="la la-facebook-f facebook-icon"></i>
                                    <span className="fsz-14px">Facebook</span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="icon">
                                    <i className="la la-instagram instagram-icon"></i>
                                    <span className="fsz-14px">Instagram</span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="icon">
                                    <i className="la la-youtube youtube-icon"></i>
                                    <span className="fsz-14px">Youtube</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ====== end posts ====== --> */}


            {/* <!-- ====== start modals ====== --> */}
            {/* tabIndex="-1" */}
            <div
                className="offcanvas offcanvas-start sidebar-popup-style1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <div className="logo">
                        <img src="assets/img/logo_home_bl.svg" alt="" className="dark-none" />
                        <img src="assets/img/logo_home_lt.svg" alt="" className="light-none" />
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mt-4">
                    <h6 className="text-uppercase mb-15 ltspc-1"> about us <i className="la la-angle-right ms-1"></i> </h6>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio tempora quia iure quae. Soluta corporis quidem aperiam amet nihil.
                    </div>

                    <div className="sidebar-categories mt-40">
                        <h6 className="ctext-uppercase mb-30 ltspc-1"> categories <i className="la la-angle-right ms-1"></i> </h6>
                        <a href="#" className="cat-card">
                            <div className="img img-cover">
                                <img src="assets/img/1.png" alt="" />
                            </div>
                            <div className="info">
                                <h5>bussines</h5>
                                <span className="num">12</span>
                            </div>
                        </a>
                        <a href="#" className="cat-card">
                            <div className="img img-cover">
                                <img src="assets/img/3.png" alt="" />
                            </div>
                            <div className="info">
                                <h5>technology</h5>
                                <span className="num">14</span>
                            </div>
                        </a>
                        <a href="#" className="cat-card">
                            <div className="img img-cover">
                                <img src="assets/img/2.png" alt="" />
                            </div>
                            <div className="info">
                                <h5>culture</h5>
                                <span className="num">20</span>
                            </div>
                        </a>
                        <a href="#" className="cat-card">
                            <div className="img img-cover">
                                <img src="assets/img/1.png" alt="" />
                            </div>
                            <div className="info">
                                <h5>videos</h5>
                                <span className="num">14</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-contact-info mt-50">
                        <h6 className="text-uppercase mb-20 ltspc-1"> Contact & follow <i className="la la-angle-right ms-1"></i> </h6>
                        <ul className="m-0">
                            <li className="mb-3">
                                <i className="las la-map-marker me-2 color-main fs-5"></i>
                                <a href="#">streat name 12, hollywood City, USA</a>
                            </li>
                            <li className="mb-3">
                                <i className="las la-envelope me-2 color-main fs-5"></i>
                                <a href="#">Newzin@gmail.com</a>
                            </li>
                            <li className="mb-3">
                                <i className="las la-phone-volume me-2 color-main fs-5"></i>
                                <a href="#">+12 123 456 789</a>
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="#">
                                <i className="la la-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="la la-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="la la-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== end modals ====== --> */}

        </main>
    );
};