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
        </main>
    )
}

export default MyPorfile;