import { socialsType } from "@/types/socials"

export const StayConnected: React.FC<{
    socials: socialsType
}> = (props) => {
    return (
        <div className="tc-widget-social-style10  bg-white">
            <p className="text-uppercase fsz-14px mb-30"> stay connected </p>
            <div className="item">
                <a href={props.socials ? props.socials.facebook : "#"} className="icon">
                    <i className="la la-facebook-f facebook-icon"></i>
                    <span className="fsz-14px">Facebook</span>
                </a>
            </div>
            <div className="item">
                <a href={props.socials ? props.socials.instagram : "#"} className="icon">
                    <i className="la la-instagram instagram-icon"></i>
                    <span className="fsz-14px">Instagram</span>
                </a>
            </div>
            <div className="item">
                <a href={props.socials ? props.socials.youtube : "#"} className="icon">
                    <i className="la la-youtube youtube-icon"></i>
                    <span className="fsz-14px">Youtube</span>
                </a>
            </div>
        </div>
    )
}