import classNames from 'classnames/bind'
import styles from './Home.module.scss'

import images from '~/assets/images/Slider'
import bannerImages from '~/assets/images/Banner'
import brandImages from '~/assets/images/Brand'

import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function HomePage({ data }) {
    //Create new list of products first
    const list1 = data.filter((product) => product.name.includes('DC x BR'))

    //Create new list of products second
    const listT = data.filter((product) => product.tag.includes('New Arrival'))
    const list2 = listT.sort((a, b) => Date.parse(a.createAt) - Date.parse(b.createAt))

    const [productList1, setProductList1] = useState([])
    const [productList2, setProductList2] = useState([])

    useEffect(() => {

        //Set product list 1
        let arr1 = []
        list1.map( (product,index) => {
            if (index < 8) {
                arr1 = [...arr1, product]
            }
        })
        if (list1.length !== 0) {
            setProductList1(arr1)
        }

        //Set product list 2
        let arr2 = []
        list2.map( (product,index) => {
            if (index < 8) {
                arr2 = [...arr2, product]
            }
        })
        if (list2.length !== 0) {
            setProductList2(arr2)
        }

    }, [data])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('slider')}>
                    {images.map((image, index) => {
                        return (
                            <div className={cx('slider-item')} key={index}>
                                <a href="/">
                                    <img src={image.src} alt="Slider" className={cx('slider-img')}></img>
                                </a>
                            </div>
                        )
                    })}
                </div>

                <div className={cx('banner-section')}>
                    {bannerImages.map((bannerImg, index) => {
                        return (
                            <div className={cx('banner-item')} key={index}>
                                <a href="/san-pham-moi">
                                    <title>New Arrivals</title>
                                    <img src={bannerImg.src} alt=""></img>
                                    <span></span>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className="product-list">
                    <h3 className={cx('list-title')}>B RAY</h3>
                    <div className={cx('item-list   ')}>
                        <div className={cx('grid')}>
                            <div className={cx('grid__row')}>
                                {productList1.map((item, index) => {
                                    return (
                                        <div className={cx('grid__col-4', 'grid__col-sm-2')} key={index}>
                                            <a className={cx('product-block')} href={item.slug} rel="noreferrer">
                                                <div className={cx('product-item')} title={item.name}>
                                                    <img
                                                        className={cx('item-image')}
                                                        src={item.images[0]}
                                                        alt={item.name}
                                                    />
                                                    <p className={cx('item-name')}>{item.name}</p>
                                                    <p className={cx('item-price')}>{item.price} đ</p>
                                                </div>
                                                <div className={cx('tag-section')}>
                                                    {item.tag.map((filter, index) => {
                                                        let result
                                                        if (index !== 0) {
                                                            result = (
                                                                <span className={cx('tag-item')} key={index}>
                                                                    {filter}
                                                                </span>
                                                            )
                                                        }
                                                        return result
                                                    })}
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('item-more')}>
                        <a className={cx('button-more')} href="/collab-s">
                            Xem tất cả
                        </a>
                    </div>
                </div>
                <div className={cx('banner-section')}>
                    {bannerImages.map((bannerImg, index) => {
                        return (
                            <div className={cx('banner-item')} key={index}>
                                <a href="/san-pham-moi">
                                    <title>New Arrivals</title>
                                    <img src={bannerImg.src} alt=""></img>
                                    <span></span>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className="product-list">
                    <h3 className={cx('list-title')}>New Arrivals</h3>
                    <div className={cx('item-list   ')}>
                        <div className={cx('grid')}>
                            <div className={cx('grid__row')}>
                                {productList2.map((item, index) => {
                                    return (
                                        <div className={cx('grid__col-4', 'grid__col-sm-2')} key={index}>
                                            <a className={cx('product-block')} href={item.slug} rel="noreferrer">
                                                <div className={cx('product-item')} title={item.name}>
                                                    <img
                                                        className={cx('item-image')}
                                                        src={item.images[0]}
                                                        alt={item.name}
                                                    />
                                                    <p className={cx('item-name')}>{item.name}</p>
                                                    <p className={cx('item-price')}>{item.price} đ</p>
                                                </div>
                                                <div className={cx('tag-section')}>
                                                    {item.tag.map((filter, index) => {
                                                        let result
                                                        if (index !== 0) {
                                                            result = (
                                                                <span className={cx('tag-item')} key={index}>
                                                                    {filter}
                                                                </span>
                                                            )
                                                        }
                                                        return result
                                                    })}
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('item-more')}>
                        <a className={cx('button-more')} href="/">
                            Xem tất cả
                        </a>
                    </div>
                </div>
                <div className={cx('brand-section', 'grid__row')}>
                    {brandImages.map((brand, index) => {
                        return (
                            <div className={cx('grid__col-4','grid__col-sm-40')} key={index}>
                                <div className={cx('brand-logo')}>
                                    <img
                                        src={brand.src}
                                        alt={brand.name}
                                        title={brand.name}
                                        className={cx('brand-image')}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage
