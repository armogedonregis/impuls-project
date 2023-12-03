export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content pt-40 pb-40 border-1 border-top brd-gray text-center">
                    <div className="foot-links mt-80">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">policy</a>
                    </div>
                    <div className="foot-social mt-40">
                        <a href="#">
                            <i className="la la-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="la la-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="la la-youtube"></i>
                        </a>
                    </div>

                    <p className="fsz-14px mt-40">© 2023 Copyrights by <a href="#" className="fw-bold">ImpulsPlus</a>. All Rights Reserved.</p>
                </div>
            </div>
            <a href="#" className="to_top">
                <i className="la la-angle-up"></i>
            </a>

        </footer>
    );
};