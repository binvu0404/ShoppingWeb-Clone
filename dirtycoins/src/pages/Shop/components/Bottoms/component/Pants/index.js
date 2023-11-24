import className from 'classnames/bind'
import styles from './Pants.module.scss'
import shopImage from '~/assets/images/Shop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const cx = className.bind(styles)

function Pants({ data }) {
    const title = 'Pants'

    const prevProducts = data.filter((product) => product.name.includes('Pants'))

    const [sort, setSort] = useState('Sắp xếp')

    const [productList, setProductList] = useState([])

    useEffect(() => {
        if (prevProducts.length !== 0) {
            setProductList(prevProducts)
        }
        // eslint-disable-next-line
    }, [data])

    const [state, setState] = useState([])

    const [filtersActive, setFiltersActive] = useState([])

    //-----------------------Dilter handlers------------------------

    const handlePriceDownList = (e) => {
        setProductList(prevProducts)
        setSort(e.target.innerText)
        setProductList(
            productList.sort((a, b) => -Number(a.price.replaceAll('.', '')) + Number(b.price.replaceAll('.', ''))),
        )
        setPageActive(1)
        setState([''])
    }

    const handlePriceUpList = (e) => {
        setSort(e.target.innerText)
        setProductList(
            productList.sort((a, b) => Number(a.price.replaceAll('.', '')) - Number(b.price.replaceAll('.', ''))),
        )
        setPageActive(1)
    }

    const handleNewList = (e) => {
        setSort(e.target.innerText)
        setProductList(productList.sort((a, b) => Date.parse(a.updateAt) - Date.parse(b.updateAt)))
        setPageActive(1)
    }

    //--------------------Price sorting ----------------------

    const handlePriceList = (event, number1, number2) => {
        let result
        let notifications = ['Không tìm thấy sản phẩm nào phù hợp']
        let unNotifications = ['']

        if (number2 === 0) {
            result = prevProducts.filter((product) => Number(product.price.replaceAll('.', '')) >= number1)
        } else if (!!number2) {
            const upList = prevProducts.filter((product) => Number(product.price.replaceAll('.', '')) >= number1)
            result = upList.filter((product) => Number(product.price.replaceAll('.', '')) <= number2)
        } else {
            result = prevProducts.filter((product) => Number(product.price.replaceAll('.', '')) <= number1)
        }
        setProductList(result)

        setFiltersActive([event.target.innerText])
        result.length === 0 ? setState(notifications) : setState(unNotifications)

        setSort('Sắp xếp')
        setPageActive(1)
    }

    //--------------------Size sorting ----------------------

    const handleSizeList = (event) => {
        let result
        let notifications = ['Không tìm thấy sản phẩm nào phù hợp']
        let unNotifications = ['']

        if (event.target.innerText === 'Size S') {
            result = prevProducts.filter((product) => product.size.includes('S'))
        } else if (event.target.innerText === 'Size M') {
            result = prevProducts.filter((product) => product.size.includes('M'))
        } else if (event.target.innerText === 'Size L') {
            result = prevProducts.filter((product) => product.size.includes('L'))
        } else if (event.target.innerText === 'Size XL') {
            result = prevProducts.filter((product) => product.size.includes('XL'))
        }
        setProductList(result)

        setFiltersActive([event.target.innerText])
        result.length === 0 ? setState(notifications) : setState(unNotifications)

        setSort('Sắp xếp')
        setPageActive(1)
    }

    // Remove filter and sort handler

    const handleRemoveFilter = (filterRemove) => {
        setProductList(prevProducts)
        setFiltersActive([])
        setState([""])
    }

    //Show page number select handler

    const pageNumber = Math.ceil(productList.length / 16)
    let page = []

    for (var i = 1; i <= pageNumber; i++) {
        page = [...page, i]
    }

    const [pageActive, setPageActive] = useState(1)
    const handleChangePage = (e) => {
        setPageActive(Number(e.target.innerText))
        window.scrollTo(0, 0)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <img src={shopImage.src} alt="shop" className={cx('shop-img')} />
                    <h2 className={cx('title')}>{title}</h2>
                </div>
                <div>
                    <div className={cx('grid')}>
                        <div className={cx('grid')}>
                            <div className={cx('grid__row', 'filter-active-list')}>
                                <ul className={cx('filter-actived')}>
                                    {filtersActive.map((filter, index) => {
                                        return (
                                            <li key={index}>
                                                {filter}
                                                <FontAwesomeIcon
                                                    icon={faXmark}
                                                    className={cx('filter-closed-icon')}
                                                    onClick={() => handleRemoveFilter(filter)}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={cx('grid__row', 'filters-list')}>
                                <div className={cx('filter-section')}>
                                    <div className={cx('filter')}>
                                        <p className={cx('filter-name')}>
                                            Lọc giá
                                            <FontAwesomeIcon icon={faAngleDown} className={cx('dropdown-icon')} />
                                        </p>
                                        <ul>
                                            <li onClick={(e) => handlePriceList(e, 100000)}>Giá dưới 100.000đ</li>
                                            <li onClick={(e) => handlePriceList(e, 100000, 200000)}>
                                                100.000đ - 200.000đ
                                            </li>
                                            <li onClick={(e) => handlePriceList(e, 200000, 300000)}>
                                                200.000đ - 300.000đ
                                            </li>
                                            <li onClick={(e) => handlePriceList(e, 300000, 500000)}>
                                                300.000đ - 500.000đ
                                            </li>
                                            <li onClick={(e) => handlePriceList(e, 500000, 0)}>Giá trên 500.000đ</li>
                                        </ul>
                                    </div>
                                    
                                    <div className={cx('filter')}>
                                        <p className={cx('filter-name')}>
                                            Kích thước
                                            <FontAwesomeIcon icon={faAngleDown} className={cx('dropdown-icon')} />
                                        </p>
                                        <ul>
                                            <li onClick={(e) => handleSizeList(e)}>Size S</li>
                                            <li onClick={(e) => handleSizeList(e)}>Size M</li>
                                            <li onClick={(e) => handleSizeList(e)}>Size L</li>
                                            <li onClick={(e) => handleSizeList(e)}>Size XL</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={cx('filter-section-right')}>
                                    <div className={cx('filter')}>
                                        <p className={cx('filter-name')}>
                                            {sort}
                                            <FontAwesomeIcon icon={faAngleDown} className={cx('dropdown-icon')} />
                                        </p>
                                        <ul>
                                            <li onClick={(e) => handleNewList(e)}>Mới nhất</li>
                                            <li onClick={(e) => handlePriceUpList(e)}>Giá tăng dần</li>
                                            <li onClick={(e) => handlePriceDownList(e)}>Giá giảm dần</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className={cx('item-list')}>
                        <div className={cx('grid')}>
                            <div className={cx('grid__row')}>
                                {state.map((item, index) => (
                                    <span key={index} className={cx('filter-notification')}>
                                        {item}
                                    </span>
                                ))}
                                {productList.map((item, index) => {
                                    let productIndex = index
                                    let limit = 16
                                    let beginGet = (pageActive - 1) * limit
                                    let endGet = pageActive * limit - 1
                                    let result

                                    if (productIndex >= beginGet && productIndex <= endGet) {
                                        result = (
                                            <div className={cx('grid__col-4','grid__col-sm-2','grid__col-1-mb')} key={index}>
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
                                    }
                                    return result
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cx('navigation-section')}>
                        {page.map((number, index) => {
                            return (
                                <p
                                    className={
                                        pageActive === number ? cx('nav-page', 'nav-page-active') : cx('nav-page')
                                    }
                                    key={index}
                                    onClick={(e) => handleChangePage(e)}
                                >
                                    {number}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pants
