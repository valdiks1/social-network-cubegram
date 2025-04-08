import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './MyProfile.css';
import { useState } from 'react';
import { getUser } from '../../services/userProfileService';
import { useEffect } from 'react';

const MyPorfile = () => {
    const {authStatus} = useOutletContext();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    if(!authStatus){
        navigate('/');
    }

    useEffect(() => {
        getUser().then(userR => setUser(userR)).catch(e => console.log(e));
    },[])

    return(
        <main className="profile">
            <section className="info">
                <ProfileAvatar />
                <ProfileInfo userData={user} />
            </section>
            <section className="posts">
                <CreatePost />
                <Post 
                    content={"i like speedcubing"} 
                    date={"08.03.2025 22:56"}
                    likes={0} />
            </section>
        </main>
    )
}

export default MyPorfile;