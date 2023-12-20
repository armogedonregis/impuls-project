import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import styles from './notFound.module.css'

type not_found_screen = {
    openNavBar: Dispatch<SetStateAction<Boolean>>
}

export const NotFound = (props: not_found_screen) => {
    return (
        <main>
            <section className="tc-404-info text-center">
                <div style={{marginTop: 50}} className="container">
                    <h1> 404 </h1>
                    <h3> Oops! Page Not Found. </h3>
                    <p className="color-777"> Sorry, the requested page could not be found.&nbsp;
                        <a
                            href="#"
                            onClick={() => props.openNavBar(prev => true)}
                            className={`fw-bold color-000 ${styles.SearchBtn404}`}> Try searching?
                        </a>
                    </p>
                    <Link
                        href="/"
                        className="butn bg-main text-white hover-shadow mt-50"
                        style={{marginBottom: 50}}
                    >
                        <span> Back To Home </span>
                    </Link>
                </div>
            </section>
        </main>
    )
}