import CreatePost from '../../components/CreatePost/CreatePost';
import Post from '../../components/Post/Post';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import './MyProfile.css';

const MyPorfile = () => {
    return(
        <main className="profile">
            <section className="info">
                <ProfileAvatar />
                <ProfileInfo />
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