import React from "react";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <a className={style.link} href="http://github.com/jeanvela">
                    <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.026 2a9.973 9.973 0 0 0-9.974 9.974c0 4.406 2.857 8.145 6.82 9.465.5.09.68-.217.68-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.09-.645.35-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.555 9.555 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2Z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div className={style.container__lindln}>
                <a className={style.lindln} href="https://www.linkedin.com/in/jean-pierre-vela-arana-78a571253">
                    <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.983 7.196a2.188 2.188 0 1 0 0-4.376 2.188 2.188 0 0 0 0 4.376Z"></path>
                        <path d="M9.237 8.855v12.139h3.769V14.99c0-1.584.298-3.118 2.262-3.118 1.937 0 1.96 1.81 1.96 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237Zm-6.142 0H6.87v12.139H3.095V8.854Z"></path>
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer