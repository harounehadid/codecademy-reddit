import styles from './Subreddit.module.css';

const Subreddit = props => {
    const {
        id,
        name,
        handleClick
    } = props

    return (
        <button className={styles['main']} onClick={() => handleClick(id)}>{name}</button>
    );
}

export default Subreddit;
