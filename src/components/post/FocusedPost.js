import Comments from '../../features/comments/Comments';
import styles from './FocusedPost.module.css';

const FocusedPost = props => {
    const { id, media, handleClick } = props;

    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <img src={media} 
                    alt=''
                    className={styles['media']}
                />
                <div className={styles['comments-section']}>
                    <Comments id={id} />
                </div>
                <button onClick={handleClick} className={styles['go-back-btn']} >Go Back</button>
            </div>
        </div>
    );
}

export default FocusedPost;
