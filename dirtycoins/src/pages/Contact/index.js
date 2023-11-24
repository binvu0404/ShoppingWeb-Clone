import className from 'classnames/bind'
import styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
const cx = className.bind(styles)

function Contact({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__col-75', 'main-post-section')}>
                            <div className={cx('main')}>
                                <title className={cx('post-title')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('post-icon')} />
                                    THÔNG TIN HỆ THỐNG CỬA HÀNG DIRTYCOINS
                                </title>
                                <div className={cx('post-info')}>Đăng bởi : Billy | 03/02/2023</div>
                                <div className={cx('post-content')}>
                                    <h3 className={cx('post-title')}>HỆ THỐNG CỬA HÀNG</h3>
                                    <div className={cx('addresses-section')}>
                                        <h4 className={cx('addresses-name')}>CHI NHÁNH HỒ CHÍ MINH:</h4>
                                        <ul className={cx('addresses-list')}>
                                            <li className={cx('addresses-item')}>
                                                561 Sư Vạn Hạnh, Phường 13, Quận 10
                                            </li>
                                            <li className={cx('addresses-item')}>
                                                160 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh, Quận 1
                                            </li>
                                            <li className={cx('addresses-item')}>
                                                The New Playground 26 Lý Tự Trọng, Phường Bến Nghé, Quận 1
                                            </li>
                                            <li className={cx('addresses-item')}>
                                                Gian 36 Central Market 4 Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1
                                            </li>
                                            <li className={cx('addresses-item')}>
                                                326 Quang Trung,Phường 10, Quận Gò Vấp
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('addresses-section')}>
                                        <h4 className={cx('addresses-name')}>CHI NHÁNH HÀ NỘI:</h4>
                                        <ul className={cx('addresses-list')}>
                                            <li className={cx('addresses-item')}>
                                                49-51 Hồ Đắc Di, Phường Nam Đồng, Quận Đống Đa
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('addresses-section')}>
                                        <h4 className={cx('addresses-name')}>CHI NHÁNH HÀ NỘI:</h4>
                                        <ul className={cx('addresses-list')}>
                                            <li className={cx('addresses-item')}>
                                                49-51 Hồ Đắc Di, Phường Nam Đồng, Quận Đống Đa
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('addresses-section')}>
                                        <h4 className={cx('addresses-name')}>CHI NHÁNH BIÊN HÒA:</h4>
                                        <ul className={cx('addresses-list')}>
                                            <li className={cx('addresses-item')}>
                                                151A Phan Trung, Phường Tân Mai, Tp. Biên Hòa, Tỉnh Đồng Nai
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('addresses-section')}>
                                        <h4 className={cx('addresses-name')}>CHI NHÁNH BÌNH DƯƠNG:</h4>
                                        <ul className={cx('addresses-list')}>
                                            <li className={cx('addresses-item')}>
                                                28 Yersin, Phường Hiệp Thành., TP. Thủ Dầu Một, Tỉnh Bình Dương
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('addresses-section')}>
                                        <h4 className={cx('addresses-name')}>CHI NHÁNH CẦN THƠ:</h4>
                                        <ul className={cx('addresses-list')}>
                                            <li className={cx('addresses-item')}>
                                                52 Mậu Thân, Phường An Phú, Quận Ninh Kiều, Tp. Cần Thơ
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('post-share-section')}>
                                <p className={cx('post-share-title')}>Chia sẻ bài viết</p>
                                <div className={cx('share-section')}>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faFacebookF} className={cx('share-fb-icon')} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faGoogle} className={cx('share-gg-icon')} />
                                    </a>
                                </div>
                            </div>
                            <div className={cx('more-posts')}>
                                <div className={cx('more-posts-title', 'grid__row')}>
                                    <p>BÀI VIẾT LIÊN QUAN</p>
                                </div>
                                <div className={cx('grid__row','more-posts-section')}>
                                    {data.map((news, index) => {
                                        return (
                                            <div
                                                className={cx('grid__col-3', 'grid__col-sm-2', 'grid__col-1-mb')}
                                                key={index}
                                            >
                                                <div className={cx('news-post')}>
                                                    <a className={cx('post__img-block')} href={news.slug}>
                                                        <img
                                                            className={cx('post__img')}
                                                            src={news.imgPost}
                                                            alt={news.name}
                                                        ></img>
                                                    </a>
                                                    <div className={cx('post__content')}>
                                                        <a className={cx('post__title')} href={news.slug}>
                                                            {news.title}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={cx('grid__col-25', 'side-section')}>
                            <div className={cx('side')}>
                                <div className={cx('search-section')}>
                                    <p className={cx('search-name')}>Tìm Kiếm</p>
                                    <div className={cx('search-block')}>
                                        <input type="text" className={cx('search-input')}></input>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                                    </div>
                                </div>
                                <div className={cx('news-list-container')}>
                                    <ul className={cx('news-list')}>
                                        {data.map((post, index) => {
                                            return (
                                                <li className={cx('news-list__post')} key={index}>
                                                    <a href={post.slug}>{post.title}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
