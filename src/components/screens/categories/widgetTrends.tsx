import { topPostType } from "@/types/postsType";
import Link from "next/link";
import { NumberedTrendsWidget } from "./widgetTrendsSmall";
import { getCategory, getFullCategory } from "./getCategory";

type widgetTrends = {
    topCatPosts: topPostType[];
    categoryId: number;
    categoryUrl: string;
}

export const WidgetTrends = (props: widgetTrends) => {

    return (
        <div className="tc-trending-news-style5 border border-1 brd-gray mb-40">
            <p className="color-000 text-uppercase p-15">trending posts</p>
            <div className="tc-post-list-style1">
                <div className="tc-post-overlay-default">
                    <div className="img th-200 img-cover">
                        <img
                            src={props.topCatPosts[0].imageSmall ? props.topCatPosts[0].imageSmall : "404"}
                            alt=""
                        />
                    </div>
                    <div className="content ps-20 pe-20 pb-20 text-white">
                        <Link
                            href={`${props.categoryUrl}`}
                            className="text-uppercase fsz-13px mb-1"
                        >
                            {getFullCategory(props.categoryId)}
                        </Link>
                        <h4 className="title">
                            <Link href={props.topCatPosts[0].url ? props.topCatPosts[0].url : "404"}>
                                {props.topCatPosts[0].title}
                            </Link>
                        </h4>
                    </div>
                </div>
                <div className="items px-4 py-2">
                    {
                        props.topCatPosts
                        ? props.topCatPosts.map((item, id) => {
                            return id < 4 && id > 0
                            ? <NumberedTrendsWidget
                                key={id}
                                topPost={item}
                                num={id + 1}
                                categoryId={props.categoryId}
                                categoryUrl={props.categoryUrl}
                            /> : null
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}