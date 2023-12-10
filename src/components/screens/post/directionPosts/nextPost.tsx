import { directionPost } from "@/types/postsType"
import Link from "next/link"

export const NextPost: React.FC<{
    post: directionPost
}> = ({post}) => {
    return (
        <Link href={`${post?.url}?id=${post?.id}`} className="item">
            <p className="color-666 fsz-12px text-uppercase">next</p>
            <h6 className="title">{post?.title}</h6>
        </Link>
    )
}