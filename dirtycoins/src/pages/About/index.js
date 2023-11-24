import styles from './About.module.scss'
import classNames from 'classnames/bind'
import { images } from '~/assets/images/About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles)

function About({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('grid')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__col-75', 'main-post-section')}>
                            <div className={cx('main')}>
                                <header>
                                    <p className={cx('header')}>About</p>
                                </header>
                                <img src={images[11].src} alt="" />
                                <img src={images[0].src} alt="" />
                                <p>
                                    Con đường chinh phục Streetwear của thương hiệu DirtyCoins được bắt đầu từ 2017 tại
                                    Sài Gòn - Việt Nam, xuất phát ý tưởng về một thương hiệu Việt mang văn hóa đường
                                    phố. Với những kinh nghiệm gói ghém từ thương hiệu tiền thân The Yars Shop, anh Khoa
                                    Sen đã đã bắt đầu cuộc hành trình DirtyCoins cùng những người bạn GenZ đầy nhiệt
                                    huyết và sáng tạo.
                                </p>
                                <p>
                                    Không quá ồn ào hay phô trương, "DirtyCoins" tượng trưng cho những giá trị nguyên
                                    bản nhất của cuộc sống: đó là hiện thực gai góc của những "đồng tiền xương máu", của
                                    giá trị lao động đầy mồ hôi, bụi bẩn và nước mắt. DirtyCoins trở thành một thương
                                    hiệu của tinh thần thời trang mạnh mẽ, táo bạo nhưng vẫn gần gũi và dễ tiếp cận rộng
                                    rãi. Không dừng lại ở đó, DirtyCoins muốn vượt qua giới hạn của một thương hiệu thời
                                    trang đơn thuần và trở thành một biểu tượng về văn hóa và phong cách sống của những
                                    con người trẻ tuổi.
                                </p>
                                <img src={images[10].src} alt="" />
                                <p>Hãy cùng chúng tôi nhìn lại những dấu ấn trong chặng đường vừa qua.</p>
                                <img src={images[2].src} alt="" />
                                <p>
                                    Thương hiệu DirtyCoins chính thức ra đời, với cửa hàng đầu tiên tại đường Điện Biên
                                    Phủ, quận Bình Thạnh, Thành phố Hồ Chí Minh.
                                </p>
                                <p>Cửa hàng thứ 2 tại đường Bắc Hải, quận 10, thành phố Hồ Chí Minh.</p>
                                <img src={images[1].src} alt="" />
                                <p>
                                    Cửa hàng thứ 3 tại quận 1, thành phố Hồ Chí Minh. Cửa hàng thứ 4 tại đường phố Huế,
                                    quận Hai Bà Trưng, Hà Nội.
                                </p>
                                <p>Cửa hàng thứ 4 tại đường phố Huế, quận Hai Bà Trưng, Hà Nội.</p>
                                <img src={images[9].src} alt="" />
                                <p>Cửa hàng thứ 5 tại số 15 Phan Trung, Biên Hoà.</p>
                                <p>Cửa hàng thứ 6 tại 49 Hồ Đắc Di, Hà Nội.</p>
                                <p>Cửa hàng thứ 7 tại Nguyễn Sơn, quận Tân Phú, thành phố Hồ Chí Minh.</p>
                                <p>Cửa hàng thứ 8 tại Khúc Thừa Dụ, quận Cầu Giây, Hà Nội.</p>
                                <p>Cửa hàng thứ 9 tại 52 Mậu Thân, Thành phố Cần Thơ.</p>
                                <p>Cửa hàng thứ 10 tại 41 Quang Trung, Gò Vấp, Thành phố Hồ Chí Minh.</p>
                                <p>Cửa hàng thứ 11 tại Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh.</p>
                                <p>Cửa hàng thứ 12 tại Lê Lai, Quận 1, Thành phố Hồ Chí Minh.</p>
                                <img src={images[3].src} alt="" />
                                <p>Cửa hàng thứ 13 được mở tại Vincom Bà Triệu, quận hai Bà Trưng, Hà Nội.</p>
                                <p>
                                    Chúng tôi tự hào được vinh danh Thương hiệu Thời trang Được Yêu thích Nhất tại Lễ
                                    trao giải WECHOICE AWARD năm 2020.
                                </p>
                                <p>
                                    Là thương hiệu thời trang Việt Nam đầu tiên đạt 1 triệu người theo dõi trên 2 nền
                                    tảng mạng xã hội Facebook và Instagram.
                                </p>
                                <img src={images[5].src} alt="" />
                                <p>
                                    Trải qua giai đoạn giãn cách xã hội suốt hơn 4 tháng do đại dịch Covid-19, để duy
                                    trì hoạt động ở giai đoạn khó khăn này kèm với nhiều thay đổi và biến chuyển khó
                                    lường của thị trường, nên lãnh đạo công ty quyết định rút gọn số lượng cửa hàng còn
                                    8. Giai đoạn cuối 2021 cho đến Quý 2 - 2022 là giai đoạn chúng tôi biến chuyển tích
                                    cực về mặt cơ cấu sản phẩm và tuyển dụng nhân sự.
                                </p>
                                <img src={images[7].src} alt="" />
                                <p>Khai trương cửa hàng thứ 9 tại 28 Yersin, Bình Dương.</p>
                                <p>Cửa hàng Flagship tại 561 Sư Vạn Hạnh được đầu tư với một diện mạo hoàn toàn mới.</p>
                                <img src={images[4].src} alt="" />
                                <p>
                                    {' '}
                                    Với sứ mệnh “DirtyCoins là nơi thể hiện cái tôi và đóng góp giá trị cho văn hoá thời
                                    trang đường phố” chúng tôi đã nâng tầm thương hiệu dựa trên những giá trị cốt lõi và
                                    bền vững nhất, hướng đến đến mục tiêu trở thành TOP 1 VIETNAMESE STREETWEAR BRAND.
                                </p>
                                <img src={images[6].src} alt="" />
                                <p>
                                    Chúng tôi khuyến khích sự sáng tạo không ngừng của từng thành viên trong doanh
                                    nghiệp, giải quyết việc làm cho hơn hàng trăm nhân sự mỗi năm với môi trường làm
                                    việc năng động, đội ngũ đoàn kết và đầy nhiệt huyết.
                                </p>
                                <p>
                                    Những sản phẩm của DirtyCoins mang đậm dấu ấn kết hợp giữa văn hóa phương Tây và
                                    Phương Đông, xác lập một ngôn ngữ sáng tạo rất riêng, đầy mạo hiểm và mới mẻ. Chất
                                    liệu cảm hứng được DirtyCoins chắt lọc từ sự đa sắc, đa diện của dòng chảy cuộc sống
                                    hàng ngày; pha trộn cùng cảm hứng nghệ thuật đương đại để tạo nên một tiểu vùng văn
                                    hóa rất riêng của DirtyCoins.
                                </p>
                                <img src={images[8].src} alt="" />
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
                                <div className={cx('grid__row')}>
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

export default About
