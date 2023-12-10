import { useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import { useRouter } from "next/router"

export const Navbar: React.FC<{
    isNavBarOpen: Boolean
}> = ({isNavBarOpen}) => {

    const [hidden, hide] = useState<Boolean>(false)

    const props = useSpring({
        height: isNavBarOpen ? 118 : 0,
        paddingTop: isNavBarOpen ? 20 : 0,
        paddingBottom: isNavBarOpen ? 20 : 0,
        display: isNavBarOpen ? "block" : hidden ? "none" : "block",
        config: { duration: 340 },
        onRest: () => {
            if(!isNavBarOpen) { hide((prev) => true) }
            else { hide((prev) => false) }
        }
    });

    const router = useRouter()
    const inputRef = useRef<any>(null)

    const getUrl = () => {
        return "/search-results?query=" + inputRef.current?.value
    }

    return (
        <animated.div
            className="home-style10 navbar navbar-expand-lg navbar-dark style-10 px-lg-5"
            style={{overflow: 'hidden', paddingLeft: 20, paddingRight: 20, ...props }}
        >
            <div className="row justify-content-center align-items-center gx-lg-5">
                <div className="col-lg-4">
                    <div className="info">
                        <h5> you can search by category or news title </h5>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form">
                        <span className="color-777 fst-italic text-capitalize mb-2 fsz-13px">Enter Keyword</span>
                        <div className="form-group">
                            <span className="icon">
                                <i className="la la-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Elon Musk ... "
                                ref={inputRef}
                            />
                            <button
                                onClick={() => {
                                    if(inputRef.current?.value) {
                                        router.push(getUrl())
                                    }}
                                }
                            >
                                search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
        )
}