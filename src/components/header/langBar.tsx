import { HeaderLang } from "@/components/data/headerLang";
import Link from "next/link";
import { useRouter } from "next/router";

export const LangBar = () => {
    const router = useRouter();
    // получение текущей локализации
    const currentLang = HeaderLang.find(item => item.locale === router.locale);
    return (
        <div className="header-lang">
            <div className="another-lang-links">
                {HeaderLang.map(item => (
                    <Link key={item.id} href={router.asPath} locale={item.locale} className="lang-link text-white">
                        <span className="flag icon-20 rounded-circle overflow-hidden img-cover me-3">
                            <img src={item.icon} alt="" />
                        </span>
                        <span> {item.title} </span>
                    </Link>
                ))
                }
            </div>
            <div className="lang-link">
                <span className="flag icon-30 rounded-circle overflow-hidden img-cover me-3">
                    <img src={currentLang?.icon} alt="" />
                </span>
                <span> {currentLang?.title} <i className="la la-angle-down"></i> </span>
            </div>
        </div>
    );
};