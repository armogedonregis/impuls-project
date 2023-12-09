import { socialsType } from "@/types/socials";
import Link from "next/link";

type footerType = {
    socials: socialsType;
}

export const Footer = (props: footerType) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content pt-40 pb-40 border-1 border-top brd-gray text-center">
                    <div className="foot-links mt-80">
                        <Link href="#">About</Link>&nbsp;
                        <Link href="#">Contact</Link>&nbsp;
                        <Link href="#">policy</Link>
                    </div>
                    <div className="foot-social mt-40">
                        <Link href={props.socials ? props.socials.facebook : "#"}>
                            <i className="la la-facebook-f"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.instagram : "#"}>
                            <i className="la la-instagram"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.youtube : "#"}>
                            <i className="la la-youtube"></i>
                        </Link>
                    </div>

                    <p className="fsz-14px color-666 mt-40">© 2023 Copyrights by <Link href="#" className="color-000 fw-bold">
                        ImpulsPlus</Link>. All Rights Reserved.</p>
                </div>
            </div>
            <a href="#" className="to_top">
                <i className="la la-angle-up"></i>
            </a>

        </footer>
    );
};