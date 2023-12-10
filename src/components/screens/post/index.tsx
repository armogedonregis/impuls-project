import { directionPost, postType, singlePost } from "@/types/postsType"
import { DirectionPostsSlider } from "./directionPosts"
import { EditorsChoice } from "./editorsChoice"
import { PostSection } from "./postSection"
import { socialsType } from "@/types/socials"

export const SinglePost: React.FC<{
    post: singlePost
    socials: socialsType
    rPosts: postType[]
    prevPosts: directionPost[]
    nextPosts: directionPost[]
}> = (props) => {

    return (
        <main className="home-style10 tc-single-post-creative-page">
            <PostSection post={props.post} socials={props.socials} />
            <DirectionPostsSlider
                prevPosts={props.prevPosts}
                nextPosts={props.nextPosts}
            />
            <EditorsChoice rPosts={props.rPosts} />
        </main>
    )
}