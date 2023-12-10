// логотип

import Link from "next/link";

export const HeaderLogo = () => {
    return (
        <div className="mob-nav-toggles d-flex align-items-center justify-content-between">
            <Link href="/" className="logo-brand my-4">
                <img src="/assets/img/logo_home_red.svg" alt="" className="dark-none" />
                <img src="/assets/img/logo_home_lt.svg" alt="" className="light-none" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
};