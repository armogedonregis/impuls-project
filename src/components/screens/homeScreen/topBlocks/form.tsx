import { useTranslation } from "next-i18next"
import { useRef, useState } from "react"

type formType = {
    lang: string
}

export const Form = (props: formType) => {
    const { t, i18n } = useTranslation('locale')
    
    const [message, setMessage] = useState<string>("")
    const nameRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLParagraphElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const checkBoxRef = useRef<HTMLInputElement>(null)

    let isStatusOk

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
        const result = await fetch('/api/email-send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        let resMessage = await result.json()

        if (resMessage.message === "Subscriber added successfully") { isStatusOk = true }
        else { isStatusOk = false }
        
        setMessage(prev => resMessage.message)
    }

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
                <p
                    style={{
                        marginTop: 20,
                        fontSize: 16,
                        color: isStatusOk ? "red" : "green",
                        display: message.length > 0 ? "block" : "none"
                    }}
                    ref={messageRef}
                >
                        {message}
                </p>
                <a
                    className="btn w-100 bg-main mt-30 rounded-pill"
                    onClick={() => {
                        checkBoxRef.current?.checked
                        ? subscribe()
                        : null
                    }}
                >
                    <span className="text-white">{t('home.whatIsNewBlock.form.button')}</span>
                </a>
            </div>
        </div>
    )
}