import className from 'classnames/bind'
import styles from './Cart.module.scss'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const cx = className.bind(styles)

function Cart({ data }) {
    const ADD_CART_KEY = 'PRODUCT'

    const products = data.filter(product => product.tag.includes("tops"))

    const [productList, setProductList] = useState(products)

    console.log(productList)

    // console.log(JSON.parse(localStorage.getItem(ADD_CART_KEY)))

    // let productItems = [products[3]]

    let number
    let arrProducts = []
    for (var i = 0; i <= 5; i++) {
        number = Math.ceil(Math.random() * products.length)
        arrProducts = [...arrProducts, products[number]]
    }

    const [qtyNumber, setQtyNumber] = useState(1)

    const handleQtyChange = (event) => {}

    const handleQtyDown = (event) => {
        setQtyNumber(qtyNumber - 1)
    }
    const handleQtyUp = (event) => {
        setQtyNumber(qtyNumber + 1)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('cart')}>
                    <div className={cx('cart-header', 'grid__row')}>Giỏ hàng</div>
                    <div className={cx('cart-body', 'grid__row')}>
                        <div className={cx('cart-main', 'grid__col-7')}>
                            <table className={cx('cart-table')}>
                                <tbody>
                                    <tr>
                                        <th className={cx('product-name-title')}>Sản phẩm</th>
                                        <th className={cx('qty-title')}>Số lượng</th>
                                        <th className={cx('total-price-title')}>Tổng tiền</th>
                                        <th className={cx('remove-title')}>Xóa</th>
                                    </tr>
                                    {products.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <tr className={cx('cart-item')} key={index}>
                                                <td className={cx('product')}>
                                                    <img
                                                        className={cx('product-image')}
                                                        src={item.images[0]}
                                                        alt={item.name}
                                                    />
                                                    <div className={cx('product-content')}>
                                                        <a className={cx('product-name')} href="/">
                                                            {item.name}
                                                        </a>
                                                        <p className={cx('product-size')}>{item.size[0]}</p>
                                                        <p className={cx('product-price')}>
                                                            {item.price} <u>đ</u>
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className={cx('qty')}>
                                                    <div className={cx('qty-block')}>
                                                        <button
                                                            className={cx('qty-down')}
                                                            onClick={(e) => handleQtyDown(e)}
                                                        >
                                                            <FontAwesomeIcon icon={faAngleLeft} />
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className={cx('qty-number')}
                                                            value={qtyNumber}
                                                            onChange={(e) => handleQtyChange(e)}
                                                        ></input>
                                                        <button
                                                            className={cx('qty-up')}
                                                            onClick={(e) => handleQtyUp(e)}
                                                        >
                                                            <FontAwesomeIcon icon={faAngleRight} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className={cx('total-price')}>{item.price}</td>
                                                <td className={cx('remove')}>
                                                    <FontAwesomeIcon icon={faTrashCan} className={cx('remove-icon')} />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className={cx('cart-total')}>
                            <div className={cx('cart-total-section')}>
                                <p className={cx('cart-total-name')}>Tổng tiền</p>
                                <p className={cx('cart-total-price')}>
                                    1.000.000 <u>đ</u>
                                </p>
                            </div>
                            <div className={cx('cart-submit')}>
                                <button>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('more-products')}>
                    <title className={cx('more-products-title')}>CÁC SẢN PHẨM KHÁC</title>
                    <div className={cx('more-products-list')}>
                        {/* {arrProducts.map((product, index) => {
                            let result
                            if (index < 6) {
                                result = (
                                    <div className={cx('more-product-block', 'grid__col-15')} key={index}>
                                        <div className={cx('more-product-img')}>
                                            <img src={product.images[0]} alt={product.name}></img>
                                        </div>
                                        <div className={cx('more-product-info')}>
                                            <p className={cx('more-product-title')}>{product.name}</p>
                                            <p className={cx('more-product-price')}>{product.price}</p>
                                        </div>
                                    </div>
                                )
                            }
                            return result
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
