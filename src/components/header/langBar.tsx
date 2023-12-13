import { HeaderLang } from "@/components/data/headerLang"
import { singlePost } from "@/types/postsType"
import Link from "next/link"
import { useRouter } from "next/router"

type langBarType = {
    isSinglePost?: boolean
    postEs?: singlePost
    postEn?: singlePost
    postRu?: singlePost
}

export const LangBar = (props: langBarType) => {
    const router = useRouter()

    // получение текущей локализации
    const currentLang = HeaderLang.find(item => item.locale === router.locale)

    let isEsPostExist = true
    let isEnPostExist = true
    let isRuPostExist = true
    if(props.postEs) {
        if(props.postEs["message"]?.search('Post not available in requested language') !== undefined) {
            isEsPostExist = false
        }
    }
    if(props.postEn) {
        if(props.postEn["message"]?.search('Post not available in requested language') !== undefined) {
            isEnPostExist = false
        }
    }
    if(props.postRu) {
        if(props.postRu["message"]?.search('Post not available in requested language') !== undefined) {
            isEsPostExist = false
        }
    }

    return (
        <div className="header-lang">
            <div className="another-lang-links">
                {
                    HeaderLang.map((item, id) => {
                        return isEsPostExist && item.locale === 'es'
                        || isEnPostExist && item.locale === 'en'
                        || isRuPostExist && item.locale === 'ru'
                        ? <Link
                            key={item.id} href={router.asPath}
                            locale={item.locale}
                            className="lang-link text-white"
                            rel={"canonical"}
                        >
                            <span className="flag icon-20 rounded-circle overflow-hidden img-cover me-3">
                                <img src={item.icon ? item.icon : '/'} alt="" />
                            </span>
                            <span> {item.title} </span>
                        </Link> : null
                    })
                }
            </div>
            <div className="lang-link">
                <span className="flag icon-30 rounded-circle overflow-hidden img-cover me-3">
                    <img src={currentLang?.icon ? currentLang.icon : "/"} alt="" />
                </span>
                <span> {currentLang?.title} <i className="la la-angle-down"></i> </span>
            </div>
        </div>
    );
};