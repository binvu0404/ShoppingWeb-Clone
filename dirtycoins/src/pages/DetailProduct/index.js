import className from 'classnames/bind'
import styles from './ProductDetail.module.scss'
import addresses from '~/components/Addresses'
import sizeChart from '~/components/Products/sizeChart'
import eComImg from '~/pages/DetailProduct/images'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

const cx = className.bind(styles)

function ProductDetail({ productList, product, cart, setCart }) {
    let local = 'Hồ Chí Minh'

    const products = productList
    const item = [product]

    const handleAddCart = () => {
        if (cart.indexOf(product) !== -1) {
            console.log('Existing cart')
        } else {
            let arr = [...cart, product]
            setCart(arr)
            console.log(cart)
        }
    }

    const handleBuyProduct = () => {
        console.log('Buy Product')
    }

    const productIndex = products.findIndex((product) => product.name === item[0].name)

    const addressesOfLocal = addresses.filter((address) => address.name.includes(local))

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {item.map((product, index) => {
                    let productType
                    if (product.name.includes('shirt')) {
                        productType = 'Shirt'
                    } else if (product.name.includes('Hoodie')) {
                        productType = 'Hoodie'
                    } else if (product.name.includes('Jacket')) {
                        productType = 'Jacket'
                    }

                    const sizeImg = sizeChart.filter((item) => item.type.trim() === productType)
                    let number
                    let arrProducts = []
                    let limit = 6

                    if (window.innerWidth <= 1280) {
                        limit = 5
                    }

                    while (arrProducts.length <= limit) {
                        number = Math.ceil(Math.random() * (products.length - 1))
                        if (number !== productIndex && !arrProducts.includes(products[number])) {
                            arrProducts = [...arrProducts, products[number]]
                        }
                    }

                    return (
                        <div className={cx('grid')} key={index}>
                            <div className={cx('grid__row', 'detail-product')}>
                                <div className={cx('grid__col-65', 'main-product')}>
                                    <div className={cx('image-section')}>
                                        <div className={cx('image-main')}>
                                            <img
                                                src={product.images}
                                                alt={product.name}
                                                className={cx('image-product')}
                                            ></img>
                                            <div className={cx('tag-section')}>
                                                {product.tag.map((tagName, index) => {
                                                    if (tagName.search(' ') !== -1) {
                                                        const indexS = tagName.search(' ')
                                                        tagName =
                                                            tagName[0].toUpperCase() +
                                                            tagName.slice(1, indexS) +
                                                            tagName[indexS] +
                                                            tagName[indexS + 1].toUpperCase() +
                                                            tagName.slice(indexS + 2)
                                                    } else {
                                                        tagName = tagName[0].toUpperCase() + tagName.slice(1)
                                                    }

                                                    return (
                                                        <span className={cx('tag-item')} key={index}>
                                                            {tagName}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className={cx('image-list')}>
                                            <ul>
                                                {product.images.map((img, index) => {
                                                    return (
                                                        <li className={cx('image-item')} key={index}>
                                                            <img src={img} alt=""></img>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('grid__col-35', 'main-info')}>
                                    <div className={cx('info-section')}>
                                        <div className={cx('product-name')}>{product.name}</div>
                                        <div className={cx('product-price')}>
                                            {product.price}
                                            <u>đ</u>
                                        </div>
                                        <div className={cx('product-size')}>
                                            {product.size.map((sizeItem, index) => {
                                                return (
                                                    <button
                                                        type="button"
                                                        key={index}
                                                        className={cx('product-size-btn')}
                                                    >
                                                        Size {sizeItem}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                        <div className={cx('product-action')}>
                                            <button className={cx('product-add')} onClick={handleAddCart}>
                                                Thêm vào giỏ hàng
                                            </button>
                                            <button className={cx('product-buy')} onClick={handleBuyProduct}>
                                                Mua ngay
                                            </button>
                                        </div>
                                        <div className={cx('product-link')}>
                                            <p className={cx('product-link-title')}>Mua trực tiếp trên sàn TMĐT:</p>
                                            <ul className={cx('product-link-list')}>
                                                {eComImg.map((image, index) => {
                                                    return (
                                                        <a className={cx('product-link-item')} href="/" key={index}>
                                                            <img src={image.src} alt=""></img>
                                                        </a>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className={cx('product-addresses')}>
                                            <div className={cx('product-addresses-title')}>
                                                <p className={cx('title-section')}>Khu vực giao hàng</p>
                                                <div className={cx('address-section')}>
                                                    {addressesOfLocal.map((address, index) => {
                                                        return (
                                                            <div className={cx('address-title')} key={index}>
                                                                {address.name}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className={cx('product-addresses-list')}>
                                                {addressesOfLocal.map((address, index) => {
                                                    return (
                                                        <ul className={cx('addresses')} key={index}>
                                                            {address.add.map((item, index) => {
                                                                return (
                                                                    <li className={cx('address')} key={index}>
                                                                        <p>{item}</p>
                                                                        <i>Còn hàng</i>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className={cx('info-product')}>
                                            {product.info.map((infoP, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className={cx('info-product-title')}>{infoP.title}</p>
                                                        <ul className={cx('info-product-list')}>
                                                            {infoP.detail.map((detailItem, index) => {
                                                                return (
                                                                    <li
                                                                        className={cx('info-product-detail')}
                                                                        key={index}
                                                                    >
                                                                        {detailItem}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className={cx('size-chart')}>
                                            <p>Size Chart:</p>
                                            {sizeImg.map((item, index) => {
                                                return (
                                                    <img
                                                        src={item.src}
                                                        alt=""
                                                        key={index}
                                                        className={cx('size-image')}
                                                    ></img>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('more-products')}>
                                <title className={cx('more-products-title')}>CÁC SẢN PHẨM KHÁC</title>
                                <div className={cx('more-products-list')}>
                                    {arrProducts.map((product, index) => {
                                        return (
                                            <div
                                                className={cx('more-product-block', 'grid__col-15', 'grid__col-sm-4')}
                                                key={index}
                                            >
                                                <a href={product.slug}>
                                                    <div className={cx('more-product-img')}>
                                                        <img src={product.images[0]} alt={product.name}></img>
                                                    </div>
                                                    <div className={cx('more-product-info')}>
                                                        <p className={cx('more-product-title')}>{product.name}</p>
                                                        <p className={cx('more-product-price')}>{product.price}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductDetail
