import styles from './Post.module.css';
import { Icons } from '../getResource';

const Post = props => {
    let { id,
          postURL,
          media,
          authorName, 
          time, 
          title, 
          ups, 
          commentsNum,
          handleClick } = props;

    return (
        <div className={`${styles['post']}
                        flex-diplay
                        margin-center`}

                        onClick={handleClick}
                        >

            <div className={`${styles['vote-section']}
                             flex-diplay
                             flex-vertical-center
                             ${styles['secondary-font-family']}`}>

                <img src={Icons.voteUp} alt='vote up' />
                <p>{ups}</p>
                <img src={Icons.voteDown} alt='vote down' />

            </div>

            <div className={`${styles['display-info']}`}>

                <p className={`${styles['title']}
                              secondary-font`}>
                    {title}
                </p>

                <img src={media} 
                     alt=''
                     className={`${styles['content']}
                                 flex-diplay`} />

                <div className={`${styles['actions']}
                                 flex-diplay
                                 flex-vertical-center
                                 ${styles['secondary-font-family']}`}>

                    <p className={`${styles['publishing-extra-info']}`}>
                        Posted by u/{authorName}
                    </p>
                    <p className={`${styles['publishing-extra-info']}`}>{time}</p>
                    <div
                       className={`${styles['comment']}
                                  flex-diplay
                                  flex-vertical-center`}>
                        <img src={Icons.comment} alt='comments icon' />
                        <p>{commentsNum} comments</p>
                    </div>

                </div>
                
            </div>

        </div>
    );
}

export default Post;
