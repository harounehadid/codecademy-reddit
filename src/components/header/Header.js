import Searchbar from '../../features/searchbar/Searchbar';
import { Logo, Icons } from '../getResource';
import './Header.css';

const Header = () => {
    return (
        <div className='Header
                        center
                        fill-screen-width
                        flex-diplay
                        flex-vertical-center'>

            <a href='reddit.com'>
                <img src={Logo.reddit} alt='Reddit Logo' className='Header-logo' />
            </a>

            <button alt='Home Button Drop Down'
                    className='Header-home-btn
                               flex-diplay
                               flex-vertical-center'>
                <img src={Icons.home} alt='' className='Header-home-btn-home-icon' />
                <p>Home</p>
                <img src={Icons.dropDown} alt='' className='Header-home-btn-dropdown-icon' />
            </button>
            
            {/*<Searchbar />*/}
        </div>
    );
}

export default Header;
