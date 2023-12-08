import { postType } from "@/types/postsType"
import { WidgetCard } from "../../../widgetCards/widgetCards"

export const TopPosts: React.FC<{
    randomPosts: postType[]
}> = (props) => {
    return (
        <div className="col-lg-12 custom-col-half custom-col-small tc-widget-top-games-style3">
            <div className="widget-title mb-30">
                <h3 className="lh-1 fsz-32px">Top Posts</h3>
            </div>
            <div className="widget-content">
                {
                    props.randomPosts ?
                    <WidgetCard
                        type={"main"}
                        post={props.randomPosts[0]}
                    /> : null
                }
                {
                    props.randomPosts ?
                    <div className="number-cards">
                        {
                            props.randomPosts.map((item, id) => {
                                return id > 0 && id < 5
                                ? <WidgetCard
                                    key={id}
                                    type={"numCard"}
                                    post={item}
                                    numCardId={++id}
                                />
                                : null
                            })
                        }
                    </div> : null
                }
            </div>
        </div>
    )
}