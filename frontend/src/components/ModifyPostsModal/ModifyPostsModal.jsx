import './ModifyPostsModal.css';
import editImg from '../../assets/images/profile/edit_btn.svg';
import deleteImg from '../../assets/images/profile/delete_btn.svg';
import { deletePost, getPosts } from '../../services/userProfileService';

const ModifyPostsModal = ({id, call, onDestroy, setPosts}) => {
    if (!call) {
        return null;
    }

    async function handleDelete() {
        try {
            await deletePost(id);
            const updatedPosts = await getPosts();
            setPosts(updatedPosts);
        } catch (e) {
            console.log(e);
        } finally {
            onDestroy();
        }
    }
    return(
        <div className="modify-post-modal">
            <div className="edit">
                <button>Edit <img src={editImg} alt="edit" /></button>
            </div>
            <div className="delete">
                <button onClick={handleDelete}>Delete <img src={deleteImg} alt="delete" /></button>
            </div>
        </div>
    )
}

export default ModifyPostsModal;