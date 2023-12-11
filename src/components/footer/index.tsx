import { socialsType } from "@/types/socials"
import Link from "next/link"
import ScrollToTop from "react-scroll-to-top"
import { ArrowUp } from "./arrowUp"
import { Trans, useTranslation } from "next-i18next"

type footerType = {
    socials: socialsType
}

export const Footer = (props: footerType) => {
    const { t, i18n } = useTranslation('footer')

    return (
        <footer className="footer">
            <div className="container">
                <div className="content pt-40 pb-40 border-1 border-top brd-gray text-center">
                    <div className="foot-links mt-80">
                        <Link href="/">{t('linkAbout')}</Link>&nbsp;
                        <Trans i18nKey="test">
                        <Link href="/">{t('test.link.link1')} Contact</Link>&nbsp;
                        </Trans>
                        <Link href="/">policy</Link>
                    </div>
                    <div className="foot-social mt-40">
                        <Link href={props.socials ? props.socials.facebook : "/"}>
                            <i className="la la-facebook-f"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.instagram : "/"}>
                            <i className="la la-instagram"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.youtube : "/"}>
                            <i className="la la-youtube"></i>
                        </Link>
                    </div>

                    <p className="fsz-14px color-666 mt-40">© 2023 Copyrights by <Link href="/" className="color-000 fw-bold">
                        ImpulsPlus</Link>. All Rights Reserved.</p>
                </div>
            </div>
            <ScrollToTop
                smooth
                className={""}
                color="white"
                viewBox={"0 0 256 256"}
                style={{
                    width: 46,
                    height: 46,
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    display: "inline-block"
                }}
                component={<ArrowUp/>}
            />

        </footer>
    );
};