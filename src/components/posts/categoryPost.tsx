import { postType } from "@/types/postsType";

type catPostType = {
    post: postType;
}

export const CategoryPost = (props: catPostType) => {

    return (
        <div className="item">
            <div className="row">
                <div className="col-lg-5">
                    <div className="img img-cover th-250 radius-5 overflow-hidden">
                        <img src={props.post?.imageSmall} alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h2 className="title fsz-28px mb-20"> <a href="#">{props.post?.title}</a> </h2>
                        <div className="text fsz-14px"> {props.post?.description}
                        </div>
                        <div className="meta-bot">
                            <small className="fsz-12px"> {props.post?.author} </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}