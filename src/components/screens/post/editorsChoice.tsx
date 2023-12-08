import { postType } from "@/types/postsType"


const EditorsChoiceSlide: React.FC<{
    post: postType
}> = (props) => {
    return (
                <div className="swiper-slide">
                    <div className="item">
                        <div className="img img-cover">
                            <img src="assets/img/1.png" alt="" className="main-img" />
                            {
                                props.post.videoUrl
                                ? <a href={props.post.videoUrl} data-lity="" className="video_icon icon-60">
                                    <i className="ion-play"></i>
                                </a> : null
                            }
                            <div className="tags">
                                <a href="#" className="bg-000 text-white py-1 px-3 rounded-pill fsz-12px text-uppercase me-2">videos</a>
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="title mt-20">
                                <a href="#">Centaur Warrunner Dota 2, New skills & update</a>
                            </h4>
                        </div>
                    </div>
                </div>
    )
}



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
                            {/* .tc-single-post-creative-page .tc-next-prev-post .tc-next-prev-post-slider .swiper-button-next::after, .tc-single-post-creative-page .tc-next-prev-post .tc-next-prev-post-slider .swiper-button-prev::after */}
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