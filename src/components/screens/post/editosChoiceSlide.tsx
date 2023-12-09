import { postType } from "@/types/postsType"

export const EditorsChoiceSlide: React.FC<{
    post: postType
}> = (props) => {
    return (
        <div className="swiper-slide">
            <div className="item">
                <div className="img img-cover">
                    <img src="assets/img/1.png" alt="" className="main-img" />
                    {
                        props.post?.videoUrl
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