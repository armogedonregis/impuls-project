import { postType } from "@/types/postsType"
import { BottomSlider } from "./bottomSlider"
import { EditorsChoice } from "./editorsChoice"
import { PostSection } from "./postSection"
import { socialsType } from "@/types/socials"

export const SinglePost: React.FC<{
    post: postType
    socials: socialsType
}> = (props) => {

    return (
        <main className="home-style10 tc-single-post-creative-page">
            <PostSection post={props.post} socials={props.socials} />
            <BottomSlider />
            <EditorsChoice post={props.post} />
        </main>
    )
}