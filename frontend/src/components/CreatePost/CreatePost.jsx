import { useState, useRef } from "react";
import { createPost, getPosts } from "../../services/userProfileService";
import "./CreatePost.css";

const CreatePost = ({setPosts}) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    setText(event.target.value);
    
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  async function handleCreatePost() {
    try {
      await createPost(text);
      const updatedPosts = await getPosts();
      setPosts(updatedPosts);
      setText('');
    } catch (e) {
      console.log(e);
    } finally{
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
      }
    }
  }

  return (
    <div className="create-post">
      <div className="create-post-body">
        <textarea
          ref={textareaRef}
          placeholder="Post something..."
          value={text}
          onChange={handleInput}
        ></textarea>
      </div>
      <div className="create-post-footer">
        <button onClick={handleCreatePost}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
