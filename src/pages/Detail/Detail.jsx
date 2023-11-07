import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchPost } from './actions';
import styleDetail from './detail.module.scss';
import logo from '../../assets/Icon2.png';
import avatar from '../../assets/User.png';

const Detail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.detailReducer.post);
  const error = useSelector((state) => state.detailReducer.error);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styleDetail.container}>
      <div className={styleDetail.navbar}>
        <Link to='/' style={{textDecoration: 'none'}}>
            <p>The Journey</p>
        </Link>
        <Link to='/user'>
            <img src={avatar} alt="" />
        </Link>
      </div>
      <div className={styleDetail.contentWrapper}>
        <div className={styleDetail.header}>
          <i>{post.title}</i>
          <h5>{post.author}</h5>
        </div>
        <div className={styleDetail.content}>
            <h4>{post.date}</h4>
            <img src={post.imageurl} alt={post.title} />
            <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
