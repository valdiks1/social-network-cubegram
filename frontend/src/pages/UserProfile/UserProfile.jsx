import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Post from "../../components/Post/Post";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getPostsByUserId, getUserById, getRecordsByUserId } from "../../services/userProfileService";
import { useState } from "react";

const UserProfile = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [records, setRecords] = useState({});

    useEffect(() => {
        getUserById(id).then(user => {
            setUser(user);
        }).catch(e => console.log(e));
        getPostsByUserId(id).then(posts => {
            setPosts(posts);
        }).catch(e => console.log(e));
        getRecordsByUserId(id).then(records => setRecords(records)).catch(e => console.log(e));
    },[])

    return(
        <main className="profile">
            <section className="info">
                <ProfileAvatar />
                <ProfileInfo userData={user} userRecords={records} />
            </section>
            <section className="posts">
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

export default UserProfile;