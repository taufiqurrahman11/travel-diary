import { Link } from 'react-router-dom';
import styleProfile from './profile.module.scss';
import styleCard from '../../components/Card/card.module.scss';
import profile from '../../assets/profile.png';
import userIcon from '../../assets/User.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPost } from '../Home/actions';
import bookmarkIcon from '../../assets/bookmark.png'

const Profile = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.homeReducer.posts)

    useEffect(() => {
        dispatch(getAllPost())
    })

    return (
        <div className={styleProfile.container}>
            <div className={styleProfile.navbar}>
                <Link to='/home' style={{textDecoration: 'none'}}>
                    <p>The Journey</p>
                </Link>
                <Link to='/user'>
                    <img src={userIcon} alt="" />
                </Link>
            </div>
            <div className={styleProfile.profileWrapper}>
                <h1>Profile</h1>
                <div className={styleProfile.profile}>
                    <img src={profile} alt="" />
                    <h2>Fadhil</h2>
                    <i>fadhil@gmail.com</i>
                    <Link to='/add'>
                        <button>Add New Post</button>
                    </Link>
                </div>
                <div className={styleProfile.containerList}>
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
        </div>
    )
}

export default Profile;