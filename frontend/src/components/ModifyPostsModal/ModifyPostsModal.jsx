import './ModifyPostsModal.css';
import editImg from '../../assets/images/profile/edit_btn.svg';
import deleteImg from '../../assets/images/profile/delete_btn.svg';

const ModifyPostsModal = ({id, call, onDestroy}) => {
    if (!call) {
        return null;
    }
    return(
        <div className="modify-post-modal">
            <div className="edit">
                <button>Edit <img src={editImg} alt="edit" /></button>
            </div>
            <div className="delete">
                <button>Delete <img src={deleteImg} alt="delete" /></button>
            </div>
        </div>
    )
}

export default ModifyPostsModal;