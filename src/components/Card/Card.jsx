import { Link } from 'react-router-dom';
import styleCard from './card.module.scss'
import bookmarkIcon from '../../assets/bookmark.png'

const Card = () => {
    return (
        <div className={styleCard.container}>
            <Link to='/' className={styleCard.wrapper}>
                <div className={styleCard.header}>
                    <img src="https://media.istockphoto.com/id/1223593967/id/foto/matahari-terbenam-yang-dramatis-di-atas-pura-gunung-lebah-temple-di-ubud.jpg?s=612x612&w=0&k=20&c=N0qwb35hXaAJV7amFFCm4_YFVpORi2NCTbufWfj9N5o=" alt="" />
                    <div className={styleCard.bookmark}>
                        <img className={styleCard.icon} src={bookmarkIcon} alt="" />
                    </div>
                </div>
                <h4>Bersemayam di tanah Dewata</h4>
                <h6>Time, Author</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores illo neque voluptatem alias amet explicabo libero aliquid. Cum, quisquam eum.</p>
            </Link>
        </div>
    )
}

export default Card;