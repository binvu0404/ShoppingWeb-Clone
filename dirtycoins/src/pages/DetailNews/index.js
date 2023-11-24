import className from 'classnames/bind'
import styles from './DetailNews.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
const cx = className.bind(styles)

function DetailNews({ post, postList }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__col-75', 'main-post-section')}>
                            <div className={cx('main')}>
                                <title className={cx('post-title')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('post-icon')} />
                                    {post.title}
                                </title>
                                <div className={cx('post-info')}>
                                    Đăng bởi : {post.author} | {post.timeUp}
                                </div>
                                <div className={cx('post-content')}>
                                    {post.content.map((para, index) => {
                                        let result
                                        if (post.images[index]) {
                                            result = (
                                                <>
                                                    <img
                                                        className={cx('post-img')}
                                                        src={post.images[index].path}
                                                        alt={post.images[index].disc}
                                                    ></img>
                                                    <p className={cx('post-img-sub')}></p>
                                                </>
                                            )
                                        }
                                        return (
                                            <div key={index}>
                                                <p>{para}</p>
                                                {result}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={cx('post-share-section')}>
                                <p className={cx("post-share-title")}>Chia sẻ bài viết</p>
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
                                <div className={cx('grid__row')}>
                                    {postList.map((news, index) => {
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
                                        {postList.map((post, index) => {
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

export default DetailNews
