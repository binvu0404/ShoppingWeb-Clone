import className from 'classnames/bind'
import styles from './Search.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const cx = className.bind(styles)

function Search() {

    const searchParams = new URLSearchParams(document.location.search)

    let querySearch = searchParams.get("q")

    const [productState, setProductState] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/data')
                setProductState(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getProducts()
    }, [])


    const [productList, setProductList] = useState([])
    const [notification, setNotification] = useState([])

    useEffect(() => {
        let newData = querySearch && querySearch.toLowerCase()
        let list = productState.filter((product) => product.name.toLowerCase().includes(newData))
        setProductList(list)
        let text = `Không tìm thấy nội dung với từ khóa "${querySearch}" .Vui lòng tìm kiếm với từ khóa khác.`
        let noti = [text]
        if (querySearch && list.length === 0) {
            setNotification(noti)
        } else {
            setNotification([])
        }

    }, [querySearch, productState])

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
                <div className="product-list">
                    <div className={cx('item-list')}>
                        <div className={cx('grid')}>
                            <div className={cx('grid__row')}>
                                {notification.map((item, index) => (
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

                                    if (productList.length > 0 && productIndex >= beginGet && productIndex <= endGet) {
                                        result = (
                                            <div className={cx('grid__col-4','grid__col-sm-2','grid__col-1-mb')} key={index}>
                                                <a className={cx('product-block')} href={item.slug}>
                                                    <div className={cx('product-item')} title={item.name}>
                                                        <img
                                                            className={cx('item-image')}
                                                            src={item.images}
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

export default Search
