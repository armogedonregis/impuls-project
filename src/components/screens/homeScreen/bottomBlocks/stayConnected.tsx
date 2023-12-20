import { socialsType } from "@/types/socials"
import { useTranslation } from "next-i18next"
import Link from "next/link"

const StayConnected: React.FC<{
    socials: socialsType
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <div className="tc-widget-social-style10  bg-white">
            <p className="text-uppercase fsz-14px mb-30"> {t('home.stayConnected.title')} </p>
            <div className="item">
                <Link href={props.socials ? props.socials.facebook : "#"} className="icon">
                    <i className="la la-facebook-f facebook-icon"></i>
                    <span className="fsz-14px">{t('home.stayConnected.facebook')}</span>
                </Link>
            </div>
            <div className="item">
                <Link href={props.socials ? props.socials.instagram : "#"} className="icon">
                    <i className="la la-instagram instagram-icon"></i>
                    <span className="fsz-14px">{t('home.stayConnected.instagram')}</span>
                </Link>
            </div>
            <div className="item">
                <Link href={props.socials ? props.socials.youtube : "#"} className="icon">
                    <i className="la la-youtube youtube-icon"></i>
                    <span className="fsz-14px">{t('home.stayConnected.twitter')}</span>
                </Link>
            </div>
        </div>
    )
}

export default StayConnected