import { getAllSubreddits } from '../getResource';
import SubredditContainer from './SubredditContainer';
import styles from './Subreddits.module.css';

const Subreddits = () => {
    const subredditsArray = getAllSubreddits();

    return (
        <div className={styles['container']}>
            {
                subredditsArray.map((subreddit, index) => <SubredditContainer key={index}
                                                                         id={index}
                                                                         name={subreddit.name}
                                                     />)
            }
        </div>
    );
}

export default Subreddits;
