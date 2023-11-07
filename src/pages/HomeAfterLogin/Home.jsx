import { Link } from 'react-router-dom';
import styleHome from './home.module.scss';
import styleCard from '../../components/Card/card.module.scss';
import bookmarkIcon from '../../assets/bookmark.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllPost } from './actions';
import logo from '../../assets/Icon.png';
import avatar from '../../assets/User.png';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.homeReducer.posts)

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filteredPosts);
    };

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    return (
        <div className={styleHome.container}>
            <div className={styleHome.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <p>The Journey</p>
                </Link>
                <Link to='/user'>
                    <img src={avatar} alt="" />
                </Link>
                <Link to='/add' style={{textDecoration: 'none'}}>
                    <p>New Journey</p>
                </Link>
            </div>
            <div className={styleHome.search}>
                <p>Journey</p>
                <div className={styleHome.inputSearch}>
                    <input 
                        type="text" 
                        placeholder='Search'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
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