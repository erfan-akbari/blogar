import ReactDOM from 'react-dom'
import { MdClose } from "react-icons/md"

import './SmallMenu.css'

export default function SmallMenu({ navbarItems, setIsShowMenu, isShowMenu }) {

    return ReactDOM.createPortal(
        <div className="right_menu-parent">
            <div className="right_menu-parent">
                <div className="right_menu">
                    <div className="right_menu__wrapper">
                        <img className="main-logo" src="/images/logo/logo-black.png" alt="logo" />
                        <MdClose onClick={() => setIsShowMenu(false)} />
                    </div>
                    <ul className="right_menu__list">
                        {navbarItems.length && navbarItems.map(item => (
                            <li key={item.id} className="right_menu__list-item">
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>, document.getElementById('parent-modal')
    )
}
