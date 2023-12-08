import { postType } from "@/types/postsType"
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

type videoCardType = {
    post: postType
}

export const VideoCard = (props: videoCardType) => {
    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: true,
        closeButton: true
    })

    return (
        <div className="video-card">
            <div className="img img-cover">
                <img src={props.post?.imageSmall} alt="" />
                <div className="info">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="date mb-20 fsz-12px">
                                <span>{props.post?.author}</span>
                            </div>
                            <h2 className="title fsz-40px"> <a href={props.post?.url}>{props.post?.title}</a> </h2>
                            <p className="fsz-14px"> {props.post?.description} </p>
                            <a
                                href="https://youtu.be/pGbIOC83-So?t=21"
                                data-fancybox=""
                                className="play-cont mt-90"
                            >
                                <i className="ion-play me-3"></i>
                                <span className="fsz-14px">&nbsp;Play Video</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}