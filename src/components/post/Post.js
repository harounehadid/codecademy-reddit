import styles from './Post.module.css';
import { Icons } from '../getResource';
import shorthandNumber from '../shorthand-numbers/shorthandNumbers';
import timeSince from '../time-converter/timeConverter';

const Post = props => {
    let { postURL,
          media,
          authorName, 
          time, 
          title, 
          ups, 
          commentsNum } = props;

    return (
        <div className={`${styles['post']}
                        flex-diplay
                        margin-center`}>

            <div className={`${styles['vote-section']}
                             flex-diplay
                             flex-vertical-center
                             ${styles['secondary-font-family']}`}>

                <img src={Icons.voteUp} alt='vote up' />
                <p>{shorthandNumber(ups)}</p>
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
                    <p className={`${styles['publishing-extra-info']}`}>{timeSince(time)}</p>
                    <div
                       className={`${styles['comment']}
                                  flex-diplay
                                  flex-vertical-center`}>
                        <img src={Icons.comment} alt='comments icon' />
                        <p>{shorthandNumber(commentsNum)} comments</p>
                    </div>

                </div>
                
            </div>

        </div>
    );
}

export default Post;
