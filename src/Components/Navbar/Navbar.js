import { navbarDatas } from "../../Data/navbarData.js"
import { useContext } from "react"
import { AppContext } from "../../Contexts/ContextApi.js"
import { BsSearch } from "react-icons/bs"
import { BsBookmarkFill } from "react-icons/bs"
import { FaBell } from "react-icons/fa"
import { MdOutlineMenu } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { useState } from "react"
import useShowTogle from "../../Hooks/useShowTogle"
import { Link } from "react-router-dom"
import SmallMenu from "../SmallMenu/SmallMenu.js"

import "./Navbar.css"

function Navbar() {

    const appContext = useContext(AppContext)
    const [navbarItems, setNavbarItems] = useState(navbarDatas)
    const [isShowSearch, clickShowSearch, setIsShowSearch] = useShowTogle(false)
    const [isShowMenu, clickShowMenu, setIsShowMenu] = useShowTogle(false)
    const [isShowSubMenu, setIsShowSubMenu] = useState(false)
    console.log(appContext.userID);
    return (
        <>
            <nav className="Navbar">
                <ul className="Navbar__menu Navbar__menu-none">
                    {navbarItems.length && navbarItems.map(item => (
                        <li key={item.id} className="Navbar__menu-item">
                            <Link
                                to={item.href}
                                className="Navbar__menu-item-text"
                                onClick={() => setIsShowSubMenu(item.id)}>
                                {item.title} {item.icon}
                            </Link>
                            {
                                item.subMenu &&
                                <ul
                                    className={`Navbar__menu-sub-menu ${isShowSubMenu === item.id && 'Navbar__menu-sub-menu--active'}`}
                                    onMouseLeave={() => setIsShowSubMenu(false)}
                                >
                                    {
                                        item.subMenu.map(sub => (
                                            <Link key={sub.id} to={sub.href}>
                                                <li className="Navbar__menu-sub-menu-item">
                                                    {sub.title}
                                                </li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            }
                        </li>
                    ))}
                </ul>
                <ul className="Navbar__menu">
                    <div className="Navbar__search-box">
                        <BsSearch className="Navbar__search-icon" />
                        <input placeholder="جستجو ..." className="Navbar__search-input" type="text" />
                    </div>
                    <div className="Navbar__menu-btn">
                        <BsSearch onClick={clickShowSearch} />
                    </div>
                    {isShowSearch &&
                        <div className="search-box-min">
                            <div className="search-box-min__wrapoer">
                                <MdClose className="search-box-min__icon" onClick={clickShowSearch} />
                                <input placeholder="جستجو ..." className="search-box-min__input" type="text" />
                            </div>
                        </div>
                    }
                    <div className="Navbar__menu-btn">
                        <BsBookmarkFill />
                    </div>
                    <div className="Navbar__menu-btn">
                        <FaBell />
                    </div>
                    <Link to={`${appContext.userInfos.role === 'ADMIN' ? `/blogar/cms/dashboard-admin/${appContext.userID}/${appContext.userInfos.role}` : `/blogar/userpanel/${appContext.userID}/${appContext.userInfos.role}`}`}>
                        <img className="profile" src="/images/logo/author.png" alt="Profile" />
                    </Link>
                    <div className="Navbar__menu-btn Navbar__icon-menu-none">
                        <MdOutlineMenu onClick={clickShowMenu} />
                    </div>
                </ul>
            </nav>
            {isShowMenu && <SmallMenu isShowMenu={isShowMenu} navbarItems={navbarItems} setIsShowMenu={setIsShowMenu} />}
        </>

    );
}

export default Navbar;