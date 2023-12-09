import { Dispatch, SetStateAction } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./sideBar.module.css"
import { categoryType } from '@/types/categoriesType';
import { socialsType } from '@/types/socials';
import Link from 'next/link';

const SlideBarCatCards: React.FC<{
    category?: categoryType
}> = (props) => {
    return (
        props.category
        ? <Link href={`category/${props.category?.url ? props.category?.url : null}`} className="cat-card">
            <div className="img img-cover">
                <img
                    src={props.category?.image ? props.category.image : '404'}
                    alt=""
                />
            </div>
            <div className="info">
                <h5>{props.category?.name}</h5>
                <span className="num">{props.category?.count}</span>
            </div>
        </Link> : null
    )
}

type sideBarType = {
    show: boolean
    handleClose: Dispatch<SetStateAction<boolean>>
    isOpenedSlideBar: boolean
    setIsOpenedSlideBar: Dispatch<SetStateAction<boolean>>
    categories: categoryType[]
    socials: socialsType
    isDark: boolean
    setDark: Dispatch<SetStateAction<boolean>>
}

export const SideBar = (props: sideBarType) => {
    const options = {
        scroll: false,
        backdrop: true,
        backdropClassName: styles.backDrop
    }

    return (
        <Offcanvas
            className={`${props.isDark ? "dark-theme" : ""} sidebar-popup-style1`}
            show={props.show}
            onHide={props.handleClose}
            onEntered={() => 
                props.setIsOpenedSlideBar(prev => !prev)
            }
            onExited={() =>
                props.setIsOpenedSlideBar(prev => !prev)
            }
            {...options}
        >
            <Offcanvas.Header className="offcanvas-header" closeButton>
                <div
                    className="logo"
                    style={{opacity: props.isOpenedSlideBar ? 1 : 0}}
                >
                    <img src="assets/img/logo_home_bl.svg" alt="" className="dark-none"/>
                    <img src="assets/img/logo_home_lt.svg" alt="" className="light-none"/>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body className="mt-4">
                <Offcanvas.Title>
                    <h6 className="text-uppercase mb-15 ltspc-1"> about us <i className="la la-angle-right ms-1"></i> </h6>
                </Offcanvas.Title>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio tempora quia iure quae. Soluta corporis quidem aperiam amet nihil.
                </div>
                {
                    props.categories
                    ?  
                    <div 
                        className="sidebar-categories mt-40"
                        style={{opacity: props.isOpenedSlideBar ? 1 : 0}}
                    >
                        <h6 className="ctext-uppercase mb-30 ltspc-1"> categories <i className="la la-angle-right ms-1"></i> </h6>
                        {
                            props.categories[0]
                            ? <>
                                <SlideBarCatCards
                                    category={props.categories[0]}
                                />
                                <SlideBarCatCards
                                    category={props.categories[1]}
                                />
                                <SlideBarCatCards
                                    category={props.categories[2]}
                                />
                                <SlideBarCatCards
                                    category={props.categories[3]}
                                />
                            </> : null
                        }
                        
                    </div> : null
                }
                    
                <div className="sidebar-contact-info mt-50">
                    <h6 className="text-uppercase mb-20 ltspc-1"> Contact & follow <i className="la la-angle-right ms-1"></i> </h6>
                    <ul className="m-0">
                        <li className="mb-3">
                            <i className="las la-map-marker me-2 color-main fs-5"></i>
                            &nbsp;<Link href="#">streat name 12, hollywood City, USA</Link>
                        </li>
                        <li className="mb-3">
                            <i className="las la-envelope me-2 color-main fs-5"></i>
                            &nbsp;<Link href="#">Newzin@gmail.com</Link>
                        </li>
                        <li className="mb-3">
                            <i className="las la-phone-volume me-2 color-main fs-5"></i>
                            &nbsp;<Link href="#">+12 123 456 789</Link>
                        </li>
                    </ul>
                    <div className="social-links">
                        <Link href={props.socials?.facebook}>
                            <i className="la la-facebook-f"></i>
                        </Link>&nbsp;
                        <Link href={props.socials?.instagram}>
                            <i className="la la-instagram"></i>
                        </Link>&nbsp;
                        <Link href={props.socials?.youtube}>
                            <i className="la la-youtube"></i>
                        </Link>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}