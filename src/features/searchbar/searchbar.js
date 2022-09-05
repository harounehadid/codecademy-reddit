import './Searchbar.css';
import { Icons } from '../../components/getResource';

const Searchbar = () => {
    return (
        <div className='Searchbar'>
            <img src={Icons.searchbar} 
                 alt=''
                 className='Searchbar-icon' />

            <input type='text' />
            
        </div>
    );
}

export default Searchbar;
