import './Footer.css';
import inst from '../../assets/images/footer/instagram.svg';
import fb from '../../assets/images/footer/fb.svg';
import gmailI from '../../assets/images/footer/gmail.svg';
import tg from '../../assets/images/footer/telegram.svg';

const Footer = () => {
    return(
        <footer>
            <h3 className="footer-logo">Cubegram</h3>
            <p className="author">by Vladyslav Pehushyn</p>
            <p className="info">If you found any error - write me an email</p>
            
            <ul className='links'>
                <li><a href="https://www.instagram.com/valdikkks/" target="_blank"><img src={inst}/></a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&to=vlad.pegushyn@gmail.com" target="_blank"><img src={gmailI}/></a></li>
                <li><a href="https://t.me/valdikkks" target="_blank"><img src={tg}/></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61553816863218" target="_blank"><img src={fb}/></a></li>
            </ul>
            
        </footer>
    )
}

export default Footer;