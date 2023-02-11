import SearchbarContainer from '../../features/searchbar/SearchbarContainer';
import { Logo, Icons } from '../getResource';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles['header']}>

            <img src={Logo.reddit} alt='Reddit Logo' className={`${styles['logo']}`} />
            
            <SearchbarContainer />

            <nav className={`flex-diplay`}>
                <a href='/'
                   className={`${styles['btn']}
                               flex-diplay
                               flex-horizontal-center
                               flex-vertical-center`}
                               >
                    <img src={Icons.home} alt='' className={`${styles['home-btn-home-icon']}`} />
                    <p>Home</p>
                </a>

                <a href='https://www.reddit.com'
                   target='_blank'
                   rel='noreferrer'
                   className={`${styles['go-to-reddit']} 
                               ${styles['btn']}
                               flex-diplay
                               flex-horizontal-center
                               flex-vertical-center`}
                   >    
                    Go to Reddit
                </a>
            </nav>
        </div>
    );
}

export default Header;
