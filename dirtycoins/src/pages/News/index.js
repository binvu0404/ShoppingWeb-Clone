import className from 'classnames/bind'
import styles from './News.module.scss'

const cx = className.bind(styles)

function News({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <title className={cx('title')}>News</title>
                <div className={cx('container')}>
                    <div className={cx('grid')}>
                        <div className={cx('grid__row')}>
                            {data.map((news, index) => {
                                return (
                                    <div className={cx('grid__col-3', 'grid__col-sm-2', 'grid__col-1-mb')} key={index}>
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
                                                <p className={cx('post__time')}>{news.timeUp}</p>
                                                <p className={cx('post__info')}>
                                                    {news.content.map((para) => {
                                                        let content = ''
                                                        return content + para
                                                    })}
                                                </p>
                                            </div>
                                            <div className={cx('post__footer')}>
                                                <a className={cx('post__button')} href={news.slug}>
                                                    Xem Thêm
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
