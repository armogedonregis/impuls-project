import { postsByCategory } from "@/types/postsType"
import Link from "next/link"

const PagBtn: React.FC<{
    count: number,
    categoryUrl: string,
    lang: string,
    currentPage: number
}> = ({count, categoryUrl, lang, currentPage}) => {
    return (
        <Link
            className={`${count == currentPage ? "active" : ""}`}
            href={`/${lang}/category/${categoryUrl}?page=${count}`}
        >
            <span>{count}</span>
        </Link>
    )
}

export const CatPagination: React.FC<{
    catPosts: postsByCategory,
    categoryUrl: string,
    lang: string,
    currentPage: number
}> = ({catPosts, categoryUrl, lang, currentPage}) => {
    let pages = catPosts.posts.totalPages

    let currentPages: number[] = []
    let maxPage: number = 1
    if(currentPage == 1) { maxPage = Number(currentPage) + Number(4)}
    else { maxPage = Number(currentPage) + Number(3) }

    let currentBtnPage = 1
    if (currentPage == 1) { currentBtnPage = currentPage }
    else { currentBtnPage = (currentPage - 2) }

    for (let i = currentBtnPage; i < maxPage; i++) {
        currentPages.push(i)
    }

    return (
        <div className="pagination style-1 color-main justify-content-center mt-60">
            {
                currentPages.map((item, id) => (
                    item !== 0 && item < pages
                    ? <PagBtn
                        key={id}
                        count={item}
                        categoryUrl={categoryUrl}
                        lang={lang}
                        currentPage={currentPage}
                    /> : null
                ))
            }
            {
                currentPage < pages - 4
                ? <a style={{cursor: "pointer"}}>
                    <span>...</span>
                </a> : null
            }
            {
                currentPage < pages - 3
                ? <PagBtn
                        key={pages}
                        count={pages - 1}
                        categoryUrl={categoryUrl}
                        lang={lang}
                        currentPage={currentPage}
                    /> : null
            }
            {
                currentPage < pages - 1
                ? <Link
                    href={`/${lang}/category/${categoryUrl}?page=${++currentPage}`}
                >
                    <span className="text text-uppercase">next <i className="la la-angle-right"></i> </span>
                </Link> : null
            }
            
        </div>
    )
}