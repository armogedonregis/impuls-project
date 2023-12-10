import { topPostType } from "@/types/postsType"
import Link from "next/link"
import { getCategory, getFullCategory } from "../../../utils/getCategory"

export const NumberedTrendsWidget: React.FC<{
    num: number,
    topPost: topPostType,
    categoryId: number,
    categoryUrl: string
}> = (props) => {
    return (
        <div className="item">
            <h2 className="num">
                {props.num}
            </h2>
            <div className="content">
                <Link
                    href={`${props.categoryUrl}`}
                    className="color-999 fsz-12px text-uppercase mb-1"
                >
                    {getFullCategory(props.categoryId)}
                </Link>
                <h6 className="title fsz-16px fw-bold ltspc--1 hover-main">
                    <Link
                        href={props.topPost.url ? props.topPost.url : "#"}
                    >
                        {props.topPost.title}
                    </Link>
                </h6>
            </div>
        </div>
    )
}