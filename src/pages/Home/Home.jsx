import { Link } from 'react-router-dom';
import styleHome from './home.module.scss';
import styleCard from '../../components/Card/card.module.scss';
import bookmarkIcon from '../../assets/bookmark.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPost } from './actions';
import logo from '../../assets/Icon.png';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.homeReducer.posts)

    useEffect(() => {
        dispatch(getAllPost())
    })

    return (
        <div className={styleHome.container}>
            <div className={styleHome.header}>
                <div className={styleHome.navbar}>
                    <div className={styleHome.logo}>
                        <img src={logo} alt="The Journey" />
                    </div>
                    <div className={styleHome.auth}>
                        <Link to='/login'>
                            <button className={styleHome.login}>Login</button>
                        </Link>
                        <Link to='/register'>
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
                <i className={styleHome.title}>The Journey you ever dreamed of.</i>
                <p className={styleHome.desc}>We made a tool so you can easily keep & share your travel memories.
But there is a lot more</p>
            </div>
            <div className={styleHome.search}>
                <p>Journey</p>
                <div className={styleHome.inputSearch}>
                    <input type="text" placeholder='Search' />
                    <button>Search</button>
                </div>
            </div>
            {/* CARD */}
            <div className={styleHome.containerList}>
            {posts.map((post) => (
                <div className={styleCard.container} key={post.id}>
                <Link to={`/post/${post.id}`} className={styleCard.wrapper}>
                    <div className={styleCard.header}>
                    <img src={post.imageurl} alt={post.title} />
                    <div className={styleCard.bookmark}>
                        <img className={styleCard.icon} src={bookmarkIcon} alt="Bookmark" />
                    </div>
                    </div>
                    <h4>{post.title}</h4>
                    <h6>{post.date}, {post.author}</h6>
                    <p>{post.shortDescription}</p>
                </Link>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Home;