import './Post.css';
import { Icons } from '../getResource';

const Post = () => {
    return (
        <>
            <div className='Post'>

                <div className='Post-vote-section
                                flex-diplay
                                flex-vertical-center
                                flex-column-direction'>
                    <img src={Icons.voteUp} alt='Vote up' />
                    <p>300</p>
                    <img src={Icons.voteDown} alt='Vote down' />
                </div>

                <div className='Post-display-info'>

                </div>

            </div>
        </>
    );
}

export default Post;
