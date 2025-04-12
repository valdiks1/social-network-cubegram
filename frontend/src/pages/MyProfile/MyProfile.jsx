import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './MyProfile.css';
import { useState } from 'react';
import { getUser, getPosts } from '../../services/userProfileService';
import { useEffect } from 'react';

const MyPorfile = () => {
    const {authStatus} = useOutletContext();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    if(!authStatus){
        navigate('/');
    }

    useEffect(() => {
        getUser().then(userR => setUser(userR)).catch(e => console.log(e));
        getPosts().then(posts => setPosts(posts)).catch(e => console.log(e));
    },[])

    return(
        <main className="profile">
            <section className="info">
                <ProfileAvatar />
                <ProfileInfo userData={user} />
            </section>
            <section className="posts">
                <CreatePost setPosts={setPosts}/>
                {posts.map((post) => <Post 
                    key={post.id}
                    id={post.id}
                    content={post.text} 
                    date={post.date}
                    likes={0} />)}
            </section>
        </main>
    )
}

export default MyPorfile;