import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import addresses from '~/components/Addresses'

const cx = classNames.bind(styles)

let local = 'Hồ Chí Minh'

const addressesOfLocal = addresses.filter((address) => address.name.includes(local))

function Footer() {
    return (
        <>
            <div className={cx('head-footer')}>
                <FontAwesomeIcon icon={faPhone} className={cx('head-footer-icon')} />
                <p className={cx('head-title')}>Hỗ trợ / Mua hàng:</p>
                <a href="tel:+84797677419" className={cx('head-number')}>
                    0797 677 419
                </a>
            </div>
            <div className={cx('main-footer', 'grid')}>
                <div className={cx('addresses-block', 'grid__col-2')}>
                    <title>hệ thống cửa hàng</title>
                    <ul className={cx('addresses-list')}>
                        <li className={cx('address-section')}>
                            {addressesOfLocal.map((address, index) => {
                                return (
                                    <div key={index}>
                                        <p className={cx('address-title')}>
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                className={cx('address-title__icon')}
                                            />
                                            {address.name}
                                        </p>
                                        <ul className={cx('addresses')}>
                                            {address.add.map((item, index) => {
                                                let number = item.indexOf('-')
                                                return (
                                                    <li className={cx('address')} key={index}>
                                                        <strong>{item.slice(0, number)}</strong>
                                                        {item.slice(number)}.
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </li>
                        <li className={cx('phone-list')}>
                            <FontAwesomeIcon icon={faPhone} className={cx('phone-icon')} />
                            <a href="tel:0933800190">0933 800 190 </a>
                            <a href="tel: 1900252557">- 1900252557</a>
                        </li>
                        <li className={cx('mail-section')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:admin@gmail.com" target="blank">
                                admin@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('about-block', 'grid__col-2')}>
                    <div className={cx('about-section', 'grid__col-2')}>
                        <div className={cx('about-item')}>
                            <title>Mạng Xã Hội</title>
                            <div className={cx('about-icon')}>
                                <a href="/" className={cx('about-icon__item')}>
                                    <FontAwesomeIcon icon={faFacebookF} className={cx('fb-icon')}/>
                                </a>
                                <a href="/" className={cx('about-icon__item')}>
                                    <FontAwesomeIcon icon={faYoutube} className={cx('yt-icon')}/>
                                </a>
                                <a href="/" className={cx('about-icon__item')}>
                                    <FontAwesomeIcon icon={faInstagram} className={cx('insta-icon')}/>
                                </a>
                            </div>
                        </div>
                        <div className={cx('about-item')}>
                            <title>Chính Sách</title>
                            <ul>
                                <li>
                                    <a href="/">Chính sách bảo mật</a>
                                </li>
                                <li>
                                    <a href="/">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách Thẻ Thành viên</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách Bảo hành & Đổi trả</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách giao hàng hỏa tốc</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('about-section', 'grid__col-2')}>
                        <title>Fanpage</title>
                    </div>
                </div>
            </div>
            <div className={cx('last-footer')}>
                <span>Copyright © 2023 Dirty Coins Studio. Powered by Sapo</span>
            </div>
        </>
    )
}

export default Footer
