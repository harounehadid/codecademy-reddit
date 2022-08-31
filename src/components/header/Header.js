import Searchbar from '../../features/searchbar/Searchbar';
import { Logo } from '../getResource';
import './Header.css';

const Header = () => {
    return (
        <div className='Header center
                        fill-container-width
                        flex-diplay
                        flex-vertical-center'>
            <a className='Header-logo' href='reddit.com'>
                <img
                    src={Logo.reddit} 
                    alt='Reddit Logo' 
                    className='fill-container-height'    
                />
            </a>
            <button className='Header-home-btn
                               fill-container-height'>
                
            </button>
            {/*<Searchbar />*/}
        </div>
    );
}

export default Header;
