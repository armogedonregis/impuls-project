import { Dispatch, SetStateAction } from 'react'
import { DropDownCategory } from './dropDownCategory'
import { HeaderLogo } from './headerLogo'
import { ChoiseTheme } from './choiseTheme'
import { LangBar } from './langBar'
import { categoryType } from '@/types/categoriesType'

export const Header: React.FC<{
    isNavBarOpen: Boolean;
    openNavBar: Dispatch<SetStateAction<Boolean>>;
    categories: categoryType[];
    setShow: Dispatch<SetStateAction<boolean>>;
}> = ({...props}) => {
    return (
        <header className={'tc-header-style10'}>
            <nav className={"navbar navbar-expand-lg navbar-dark style-10 px-lg-5"}>
                <div className="container-fluid p-0">
                    <HeaderLogo />
                    <div className="collapse navbar-collapse custom-height" id="navbarSupportedContent">
                        <DropDownCategory categories={props.categories} />
                        <div className="nav-side">
                            <LangBar />
                            <ChoiseTheme />

                            {/* Кнопка поиска */}
                            <a style={{ cursor: 'pointer' }}
                                className={props.isNavBarOpen ? "icon-link search-btn-style1"
                                    : "icon-link search-btn-style1"}
                                onClick={() => { props.openNavBar( prev => !prev) }}
                            >
                                <i style={{
                                    opacity: !props.isNavBarOpen ? 1 : 0,
                                    display: 'inline-block',
                                    transition: 'opacity .2s linear'
                                }}
                                    className="la la-search sOpen-btn"
                                />
                                <i style={{
                                    opacity: props.isNavBarOpen ? 1 : 0,
                                    display: 'inline-block',
                                    transition: 'opacity .2s linear'
                                }}
                                    className="la la-close sClose-btn"
                                />
                            </a>
                            {/* Кнопка поиска сверху */}

                            {/* Бургер кнопка */}
                            <button
                                className="navbarList-icon"
                                onClick={() => props.setShow(true)}
                            >
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};