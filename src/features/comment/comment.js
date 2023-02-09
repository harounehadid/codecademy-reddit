import styles from './Comment.module.css';

const Comment = props => {
    const {
        author,
        commentBody,
        time
    } = props;

    return (
        <div className={styles['container']}>
            <div className={styles['comment-details']}>
                <p className={styles['author']}>{author}</p>
                <span className={styles['time']}>{time}</span>
            </div>
            <p className={styles['comment-body']}>{commentBody}</p>
        </div>
    );
}

export default Comment;
