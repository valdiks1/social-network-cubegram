import { useState, useRef } from "react";
import "./CreatePost.css";

const CreatePost = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    setText(event.target.value);
    
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

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
        <button>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
