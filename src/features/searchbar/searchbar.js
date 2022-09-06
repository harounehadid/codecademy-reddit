import './Searchbar.css';
import { Icons } from '../../components/getResource';

const Searchbar = () => {
    return (
        <div className='Searchbar
                        flex-diplay
                        flex-vertical-center'>

            <img src={Icons.searchbar} 
                 alt=''
                 className='Searchbar-icon' />

            <input type='text' 
                   name='searchbar' 
                   id='searchbar' 
                   placeholder='Search Reddit'
                   className='Searchbar-input'
                   />
            
        </div>
    );
}

export default Searchbar;
