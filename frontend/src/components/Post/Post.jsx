import './Post.css';
import postSetings from '../../assets/images/profile/post_settings_button.png';
import like from '../../assets/images/profile/like.png';

const Post = ({id, content, date, likes}) => {
    return(
        <div className="post">
            <div className="post-body">
                <p className='post-body-content'>{content}</p>
                <button className='post-body-btn'><img src={postSetings}/></button>
            </div>
            <div className="post-footer">
                <p className='post-footer-date'>{date}</p>
                <div className="like">
                    <button><img src={like}/></button>
                    <span>{likes}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Post;