import './Post.css';
import postSetings from '../../assets/images/profile/post_settings_button.png';
import like from '../../assets/images/profile/like.png';
import ModifyPostsModal from '../ModifyPostsModal/ModifyPostsModal';
import { useState, useEffect, useRef } from 'react';

const Post = ({id, content, date, likes}) => {
    const [modalState, setModalState] = useState(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [content]);

    return(
        <div className="post">
            <ModifyPostsModal 
                id={id}
                call={modalState}
                onDestroy={() => setModalState(false)} />
            <div className="post-body">
                
                <textarea 
                    ref={textareaRef} 
                    className='post-body-content' 
                    value={content} 
                    readOnly={true} />
                <button onClick={() => setModalState(!modalState)} className='post-body-btn'><img src={postSetings}/></button>
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