import Header from '~/Layout/components/Header'
import Search from '~/pages/Search'
import Footer from '~/Layout/components/Footer'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import { useState } from 'react'

const cx = classNames.bind(styles)

function DefaultLayout({ children}) {

    return (
        <div className={cx('container')}>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
