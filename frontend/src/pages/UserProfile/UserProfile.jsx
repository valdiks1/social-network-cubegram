import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Post from "../../components/Post/Post";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getUserById } from "../../services/userProfileService";
import { useState } from "react";

const UserProfile = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    const posts = [
        {
            id:1,
            text: "text",
            date: "12.02.31"
        }
    ]

    const setPosts = () => {
        return;
    }

    useEffect(() => {
        getUserById(id).then(user => {
            setUser(user);
        }).catch(e => console.log(e));
    },[])

    return(
        <main className="profile">
            <section className="info">
                <ProfileAvatar />
                <ProfileInfo userData={user} />
            </section>
            <section className="posts">
                {posts.map((post) => <Post 
                    key={post.id}
                    id={post.id}
                    setPosts={setPosts}
                    content={post.text} 
                    date={post.date}
                    likes={0} />)}
            </section>
        </main>
    )
}

export default UserProfile;