import './Searchbar.css';
import { Icons } from '../../components/getResource';

const Searchbar = props => {
    const { handleChange, handleBlur } = props;

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
                   onKeyDown={handleChange}
                   onBlur={handleBlur}
                   />
            
        </div>
    );
}

export default Searchbar;
