import Loading from '../../components/loading/Loading';
import styles from './Comment.module.css';

const Comment = props => {
    const {
        author,
        commentBody,
        time,
        status
    } = props;

    return (
        <div className={styles['container']}>
            {
                status === 'loading' ? <Loading /> :
                <>
                    <div className={styles['comment-details']}>
                    <p className={styles['author']}>{author}</p>
                    <span className={styles['time']}>{time}</span>
                    </div>
                    <p className={styles['comment-body']}>{commentBody}</p>
                </>
            }
        </div>
    );
}

export default Comment;
