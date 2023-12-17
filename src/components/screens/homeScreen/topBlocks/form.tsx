import { useTranslation } from "next-i18next"
import { useEffect, useRef, useState } from "react"

type formType = {
    lang: string
}

export const Form = (props: formType) => {
    const { t, i18n } = useTranslation('locale')

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const checkBoxRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<any>();

    const subscribe = async () => {
        const formData = {
            firstName: nameRef.current?.value,
            email: emailRef.current?.value,
            tags: [
                props.lang === 'es'
                    ? "impuls_web_es"
                    : props.lang === 'en'
                        ? "impuls_web_en"
                        : "impuls_web_ru"
            ],
            gdpr: true
        }
        if (checkBoxRef.current?.checked) {
            const res = await fetch('/api/email-send', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const jsonResult = await res.json();
            if (emailRef.current) {
                emailRef.current.value = "";
            }
            if (nameRef.current) {
                nameRef.current.value = "";
            }
            if (checkBoxRef.current.checked) {
                checkBoxRef.current.checked = false;
            }
            setError(jsonResult);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setError(undefined)
        }, 5000)
    }, [error])

    return (
        <div className="col-lg-12 custom-col-half custom-col-small tc-subscribe-style3 mt-30 custom-mt-70 custom-col-margin">
            <div className="sub-form radius-7">
                <p className="text-uppercase fsz-14px mb-30"> {t('home.whatIsNewBlock.form.title')} </p>
                <div className="text fsz-14px mb-15">
                    {t('home.whatIsNewBlock.form.desciption')}
                </div>
                <div className="form-group">
                    <span className="icon">
                        <i className="la la-user"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={t('home.whatIsNewBlock.form.nameIn')}
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
                        placeholder={t('home.whatIsNewBlock.form.mailIn')}
                        ref={emailRef}
                    />
                </div>
                <div className="form-check mt-2">
                    <input ref={checkBoxRef} className="form-check-input" type="checkbox" name="subCheck" id="subCheck1" />
                    <label className="form-check-label fsz-14px lh-5" htmlFor="subCheck1">
                        {t('home.whatIsNewBlock.form.policy')}&nbsp;
                        <a className="text-decoration-underline color-000">{t('home.whatIsNewBlock.form.policyLink')}</a>
                    </label>
                </div>
                <a
                    className="btn w-100 bg-main mt-30 rounded-pill"
                    onClick={subscribe}
                >
                    <span className="text-white">{t('home.whatIsNewBlock.form.button')}</span>
                </a>
                {error && <p style={{ textAlign: "center", marginTop: "10px" }}>{error.message}</p>}
            </div>
        </div>
    )
}