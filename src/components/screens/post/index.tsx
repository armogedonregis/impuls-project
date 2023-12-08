import { postType } from "@/types/postsType"
import { BottomSlider } from "./bottomSlider"
import { EditorsChoice } from "./editorsChoice"

export const SinglePost: React.FC<{
    post: postType
}> = (props) => {

    return (
        <main className="home-style10 tc-single-post-creative-page">
            <section className="tc-main-post-style1 pb-60">
                <article className="container">

                <div className="tc-main-post-img img-cover pt-40 mb-50">
                    <img src="assets/img/main.png" alt=""/>
                </div>

                <div className="tc-main-post-content color-000">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="sharing">
                                <p className="text-uppercase mb-20">Share</p>
                                <div className="share-icons">
                                    <a href="#"> <i className="la la-facebook-f"></i> </a>
                                    <a href="#"> <i className="la la-instagram"></i> </a>
                                    <a href="#"> <i className="la la-youtube"></i> </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10">
                            <div className="tc-main-post-titlepb-40">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <p className="text-uppercase mb-15">Sport</p>
                                        <h1 className="title">Manoah dominates, closes on Blue Jays history</h1>
                                    </div>
                                    <div className="col-lg-8 mt-20 mb-40">
                                        <div className="author-side color-666 fsz-13px">
                                            <span className="me-40"> <i className="la la-user me-1"></i> Author</span>
                                            <span className="me-40"> <i className="la la-calendar me-1"></i> Dec 14, 2022</span>
                                            <span className=""> <i className="la la-eye me-1"></i> 55 Views</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_content">
                                    <h4>
                                        This intimate, fearless account of the Canadian author's relationship with her traumatised, free-thinking mother leaves you rooting for both of them.
                                    </h4>
                                    <p><span className="lg-letter">A</span> uthor and journalist Leah McLaren was a precocious 13-year-old when she broke down at her mother's kitchen table one night in Toronto and described a  harrowing sexual experience at a pool party. Her mother, Cessie, brewed her a mug of herbal tea, added a slug of whisky, and countered it with a tale of her own.At just 12, Cessie had been raped by her riding instructor. The Horseman, she called him. Having groomed her for assault, he then persuaded her that she was in love with him.
                                    </p>
                                    <h2> Sample Heading</h2>
                                    <h3> Sample Heading</h3>
                                    <h5>
                                        The first, and most obvious, is a noise when you apply the brake pedal. This could be anything from a grinding sound to a high-pitched screech
                                    </h5>
                                    <h6>
                                        The first, and most obvious, is a noise when you apply the brake pedal. This could be anything from a grinding sound to a high-pitched screech
                                    </h6>
                                    <p>
                                        Her mother's, on the other hand, would come to haunt her. It appeared to hold the key to Cessie's doomed marriage to McLaren's small-town father at 21 and her flight, a dozen years later, in pursuit of urban sophistication and a career in newspapers. It explained a tortured romance that saw <a href="#">Text link</a> from one emotional crisis to another throughout McLaren's adolescence
                                    </p>
                                    <video width="100%" height="100%" controls>
                                        <source src="assets/img/video.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        <BottomSlider />
        <EditorsChoice post={props.post} />
        </main>
    )
}