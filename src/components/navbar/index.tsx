import { Dispatch, SetStateAction, useState } from "react";
import styles from "./navbar.module.css"
import { animated, useSpring } from "react-spring";

export const Navbar: React.FC<{
    isNavBarOpen: Boolean
}> = ({isNavBarOpen}) => {

    const [hidden, hide] = useState<Boolean>(false)

    const props = useSpring({
        height: isNavBarOpen ? 118 : 0,
        paddingTop: isNavBarOpen ? 20 : 0,
        paddingBottom: isNavBarOpen ? 20 : 0,
        display: isNavBarOpen ? "block"
        : hidden ? "none" : "block",
        config: { duration: 340 },
        onRest: () => {
            if(!isNavBarOpen) {
                hide((prev) => true)
            }
            else {
                hide((prev) => false)
            }
        }
    });

    return (
        <animated.div
            className={styles.navSearchStyle1}
            style={{overflow: 'hidden', paddingLeft: 20, paddingRight: 20, ...props }}
        >
            <div className="row justify-content-center align-items-center gx-lg-5">
                <div className="col-lg-4">
                    <div className="info">
                        <h5> you can search by category or news title </h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <form className={styles.form} action="search-results.html" method="GET">
                        <span className="color-777 fst-italic text-capitalize mb-2 fsz-13px">Enter Keyword</span>
                        <div className={styles.formGroup}>
                            <span className={styles.icon}>
                                <i className="la la-search"></i>
                            </span>
                            <input type="text" className={styles.formControl} placeholder="Elon Musk ... " />
                            <button type="submit">search</button>
                        </div>
                    </form>
                </div>
            </div>
        </animated.div>
);
};