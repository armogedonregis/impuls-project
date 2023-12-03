// правый пост в хедере

export const HeaderPost = () => {
    return (
        <div className="col">
            <div className="tc-breaking-style10 px-lg-5">
                <p className="text-uppercase fsz-14px mb-40"> Gastronomía</p>
                <div className="img img-cover">
                    <img src="assets/img/1.jpeg" alt="" />
                </div>
                <div className="info">
                    <h2 className="fsz-32px mb-20">
                        <a href="#"> Sample Title for Standard Post With Image </a>
                    </h2>
                    <span className="fsz-12px me-3"><i className="la la-calendar me-2"></i> Aug 21, 2023</span>
                    <span className="fsz-12px me-3"><i className="la la-user me-2"></i>Author</span>

                    <ul className="fsz-20px">
                        <li>
                            <h2 className="fsz-20px">
                                <a href="#"> TOP 10 NFT Token in 2022 </a>
                            </h2>
                        </li>
                        <li>
                            <h2 className="fsz-20px">
                                <a href="#"> Manoah Dominates, Close in on Blue Jays history </a>
                            </h2>
                        </li>
                    </ul>

                    <a href="#" className="fsz-14px text-capitalize mt-15">View All Posts<i className="la la-angle-right ms-1"></i></a>
                </div>
            </div>
        </div>
    );
};