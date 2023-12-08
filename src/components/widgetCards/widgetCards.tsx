import { postType } from "@/types/postsType";

type card = {
    post: postType;
    type: "main" | "numCard";
    numCardId?: number;
}

export const WidgetCard = (props: card) => {
    
    return (
        // Widget top post (card)
        props.type == "main" ? <div className="img-card">
            <div className="img img-cover">
                <img src={props.post?.imageSmall} alt="" />
            </div>
            <div className="content">
                <h3 className="title title-white">
                    <a href={props.post?.url}>{props.post?.title}</a>
                </h3>
                <div className="meta-bot mt-15 fsz-12px">
                    <span>{props.post?.author}</span>
                </div>
            </div>
        </div>
        : <a href={props.post?.url} className="number-card">
            <span className="number">
                {props.numCardId}
            </span>
            <div className="info">
                <h3 className="title fsz-28px">{props.post?.title}</h3>
                <div className="meta-bot fsz-12px">
                    <span>{props.post?.author}</span>
                </div>
            </div>
        </a>
    )
}
