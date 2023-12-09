import { topPostType } from "@/types/postsType"
import { TopPosts } from "./topPosts"


export const TopPosts_n_Form: React.FC<{
    topPosts: topPostType[]
}> = (props) => {
    return (
        <div className="col-lg-3 custom-col-large border-1 border-start brd-gray">
            <div className="widgets d-flex flex-row">
                <div className="row g-3 custom-col-padding">
                    {/* Top posts */}
                    <TopPosts topPosts={props.topPosts} />
                    {/* Form */}
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
    )
}