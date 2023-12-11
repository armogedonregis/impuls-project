import { isServer } from "@/utils/server"
import { useRef } from "react"

export const Form = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const checkBoxRef = useRef<HTMLInputElement>(null)

    return (
        <div className="col-lg-12 custom-col-half custom-col-small tc-subscribe-style3 mt-30 custom-mt-70 custom-col-margin">
            <div className="sub-form radius-7">
                <p className="text-uppercase fsz-14px mb-30"> newsletter </p>
                <div className="text fsz-14px mb-15">
                    Subscribe our newsletter to get the  latest updates about news &amp; promotions
                </div>
                <div className="form-group">
                    <span className="icon">
                        <i className="la la-user"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                        ref={nameRef}
                    />
                </div>
                <div className="form-group">
                    <span className="icon">
                        <i className="la la-envelope"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                        ref={emailRef}
                    />
                </div>
                <div className="form-check mt-2">
                    <input ref={checkBoxRef} className="form-check-input" type="checkbox" name="subCheck" id="subCheck1" />
                    <label className="form-check-label fsz-14px lh-5" htmlFor="subCheck1">
                        By signing up, you agree to the our terms and our
                        <a className="text-decoration-underline color-000">Privacy Policy</a>
                    </label>
                </div>
                <a
                    className="btn w-100 bg-main mt-30 rounded-pill"
                    onClick={async () => {
                        const formData = {
                            firstName: nameRef.current?.value,
                            email: emailRef.current?.value,
                            tags: [],
                            gdpr: true
                        }
                        checkBoxRef.current?.checked ? fetch(`${isServer}/subscribe/add`, {
                            method: "POST",
                            headers: {
                                "Content-Type": 'application/json',
                                "Access-Control-Allow-Origin": "*"
                            },
                            body: JSON.stringify(formData)
                        }) : null
                    }}
                >
                    <span className="text-white">subscribe</span>
                </a>
            </div>
        </div>
    )
}