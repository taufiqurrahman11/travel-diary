import { Link, useNavigate } from 'react-router-dom';
import styleAdd from './add.module.scss';
import { useDispatch } from 'react-redux';
import { createPost } from './action';
import { useState } from 'react';
import { format } from 'date-fns';
import userIcon from '../../assets/User.png';

const AddPost = () => {
    const [post, setPost] = useState({
        title: '',
        imageurl: '',
        description: '',
        shortDescription: '',
        date: format(new Date(), "dd MMMM yyyy"),
        author: 'Raditya Dika',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!post.title || !post.imageurl || !post.description || !post.shortDescription) {
            alert("Semua field harus diisi.");
            return;
        }

        dispatch(createPost(post));
        alert("Journey berhasil ditambahkan")
        navigate("/")
    };

    return (
        <div className={styleAdd.container}>
            <div className={styleAdd.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <p>The Journey</p>
                </Link>
                <Link to='/user'>
                    <img src={userIcon} alt="" />
                </Link>
            </div>
            <h1>New Journey</h1>
            <div className={styleAdd.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setPost({...post, title: e.target.value})}
                    />
                </div>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="imageurl">Image Url</label>
                    <input
                        type="text"
                        id="imageurl"
                        name="imageurl"
                        onChange={(e) => setPost({...post, imageurl: e.target.value})}
                    />
                </div>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="shortDescription">Short Description</label>
                    <textarea 
                        id="description"
                        name="description"
                        rows={3}
                        onChange={(e) => setPost({...post, shortDescription: e.target.value})}
                    />
                </div>
                <div className={styleAdd.inputItem}>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description"
                        name="description"
                        rows={5}
                        onChange={(e) => setPost({...post, description: e.target.value})}
                    />
                </div>
                <button type="submit" className={styleAdd.addPost}>
                Post
                </button>
            </form>
            </div>
        </div>
    )
}

export default AddPost;