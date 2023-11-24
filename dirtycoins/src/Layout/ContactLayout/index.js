import Header from '~/Layout/components/Header'
import Sidebar from '~/Layout/components/Sidebar'
import Footer from '~/Layout/components/Footer'

import classNames from 'classnames/bind'
import styles from './ContactLayout.module.scss'

const cx = classNames.bind(styles)

function ContactLayout({ children }) {
    return (
        <div className={cx("container")}>
            <Header />
            <div className={cx("wrapper")}>
                <div className={cx("content")}>{children}</div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    )
}

export default ContactLayout
