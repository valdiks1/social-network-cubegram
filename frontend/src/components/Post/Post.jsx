import './Post.css';
import postSetings from '../../assets/images/profile/post_settings_button.png';
import like from '../../assets/images/profile/like.png';
import ModifyPostsModal from '../ModifyPostsModal/ModifyPostsModal';
import { useState, useEffect, useRef } from 'react';
import { editPost, getPosts } from '../../services/userProfileService';

const Post = ({id, content, date, likes, setPosts}) => {
    const [modalState, setModalState] = useState(false);
    const [editState, setEditState] = useState(false)
    const [postText, setPostText] = useState(content);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [content]);

    function handleCancel() {
        setPostText(content);
        setEditState(false);
    }

    function handleEdit(){
        editPost(id, postText).then(r => {
            setEditState(false);
            getPosts().then(posts => {
                setPosts(posts);
            }).catch(e => console.log(e));
        }).catch(e => console.log(e));
    }

    return(
        <div className="post">
            <ModifyPostsModal 
                id={id}
                call={modalState}
                setPosts={setPosts}
                setEditState={setEditState}
                onDestroy={() => setModalState(false)} />
            <div className="post-body">
                
                <textarea 
                    ref={textareaRef} 
                    className='post-body-content' 
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    readOnly={!editState} />
                <button onClick={() => setModalState(!modalState)} className='post-body-btn'><img src={postSetings}/></button>
            </div>
            <div className="post-footer">
                <p className='post-footer-date'>{date}</p>
                {!editState ? (<div className="like">
                    <button><img src={like}/></button>
                    <span>{likes}</span>
                </div>) : (<div className="edit-btns">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>)}
            </div>
        </div>
    )
}

export default Post;