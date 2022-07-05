import './Header.css';
import logo from '../../assets/icons/troll-face.png';

export default function Header () {
    return (
        <header className='header'>
            <div className='header--logo'>
                <img src={logo} alt='Troll Face' className='header--logo-icon' />
                <h1 className='header--logo-text'>Meme Generator</h1>
            </div>
            <div className='header--nav'>
                <p className='header--nav-text'>React Course - Project 3</p>
            </div>
        </header>
    );
}
