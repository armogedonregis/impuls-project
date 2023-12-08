import { postType } from "@/types/postsType";
import { TopCatRightBlock } from "./topCatRightBlock"
import { categoryType } from "@/types/categoriesType";
import { TopCatLeftBlock } from "./topCatLeftBlock";

interface categorizedPosts {
    [key: string]: postType[]
}

type TopCatChaperType = {
    categories: categoryType[];
    posts: categorizedPosts;
}

export const TopCatChapter = (props: TopCatChaperType) => {
    return (
        <div className="col-lg-9 custom-col-large">
            <div className="row gx-5">
                {/* Tourism block - left */}
                <TopCatLeftBlock
                    category={props.categories[1]}
                    posts={props.posts[2]}
                />
                {/* Education block - right */}
                <TopCatRightBlock
                    category={props.categories[4]}
                    posts={props.posts[5]}
                />
            </div>
        </div>
    )
}