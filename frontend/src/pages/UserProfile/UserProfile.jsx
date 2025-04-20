import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Post from "../../components/Post/Post";
import { useParams } from "react-router";

const UserProfile = () => {
    const {id} = useParams();
    console.log(id);
    const user = {
        name: "name",
        country: "country",
        sex: "wasn't"
    }

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