import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faUser,
    faCartShopping,
    faAngleDown,
    faXmark,
    faBars,
} from '@fortawesome/free-solid-svg-icons'

import images from '~/assets/images'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import navbar from './component/Navbar'

const cx = classNames.bind(styles)

function Header() {
    const [input, setInput] = useState('')
    const [displayMenu, setDisplayMenu] = useState('')

    const handleCloseNavbar = () => {
        setDisplayMenu('')
    }

    const handleOpenNavbar = () => {
        setDisplayMenu('display')
    }

    const handleClickMoveDown = (e) => {
        e.preventDefault()
    }

    return (
        <div className={cx('wrapper')} id="header">
            <div className={cx('inner')}>
                <a className={cx('logo')} href="/">
                    <img src={images.logo} alt="logo DirtyCoins | VIETNAMESE STREETWEAR BRAND"></img>
                </a>
                <div className={cx('navar-menu')} onClick={() => handleOpenNavbar()}>
                    <FontAwesomeIcon icon={faBars} className={cx('navar-menu-btn')} />
                </div>
                <div className={cx('navbar', {displayMenu})}>
                    <div className={cx('close-navbar-section')} onClick={() => handleCloseNavbar()}>
                        <FontAwesomeIcon icon={faXmark} className={cx('close-navbar-btn')} />
                    </div>
                    <div className={cx('search-mobile')}>
                        <form className={cx('search-form')} action="/search">
                            <input
                                type="text"
                                name="q"
                                placeholder="Tìm kiếm..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className={cx('submit-search-form-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                            </button>
                        </form>
                    </div>
                    <ul className={cx('navbarList')}>
                        {navbar.map((children, index) => {
                            return (
                                <li key={index} className={cx('navbarItemsName')}>
                                    <a href={children.path}>
                                        {children.navbarItemsName}
                                        {children.itemList.length > 0 && (
                                            <FontAwesomeIcon
                                                icon={faAngleDown}
                                                className={cx('navbar__more-item-btn')}
                                                onClick={(e) => handleClickMoveDown(e)}
                                            />
                                        )}
                                    </a>

                                    <ul className={cx('itemList')}>
                                        {children.itemList.map((child, index) => {
                                            return (
                                                <li key={index} className={cx('itemListName')}>
                                                    <a href={child.path}>
                                                        {child.itemListName}{' '}
                                                        {child.items.length > 0 && (
                                                            <FontAwesomeIcon
                                                                icon={faAngleDown}
                                                                className={cx('navbar__more-item-list-btn')}
                                                                onClick={(e) => handleClickMoveDown(e)}
                                                            />
                                                        )}
                                                    </a>
                                                    <ul className={cx('items')}>
                                                        {child.items.map((item, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <a href={item.path}>{item.itemName}</a>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                        <li className={cx('sign-up-link')}>
                            <a href="/">Đăng ký / Đăng nhập</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('header-action')}>
                    <div className={cx('search')}>
                        <form className={cx('search-form')} action="/search">
                            <input
                                type="text"
                                name="q"
                                placeholder="Tìm kiếm..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className={cx('submit-search-form-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                            </button>
                        </form>
                    </div>
                    <a href="/" className={cx('user')}>
                        <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                    </a>
                    <a href="/cart" className={cx('cart')}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('cart-icon')} />
                        <span className={cx('cart-amount')}></span>
                    </a>
                    <a href="/" className={cx('nav-action', 'active')}>
                        Vi
                    </a>
                    <a href="/" className={cx('nav-action')}>
                        En
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
