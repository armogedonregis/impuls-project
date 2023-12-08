

export const BottomSlider = () => {
    return (
        <section className="tc-next-prev-post mb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="tc-next-prev-post-slider">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <a href="#" className="item">
                                            <p className="color-666 fsz-12px text-uppercase">previous</p>
                                            <h6 className="title">Hawks acquire All-Star guard Murray from Spurs</h6>
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="item">
                                            <p className="color-666 fsz-12px text-uppercase">next</p>
                                            <h6 className="title">PFF: Bills should consider free agent CB Xavier Rhodes</h6>
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="item">
                                            <p className="color-666 fsz-12px text-uppercase">next</p>
                                            <h6 className="title">PFF: Bills should consider free agent CB Xavier Rhodes</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}