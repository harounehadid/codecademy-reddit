import './Post.css';
import { Icons, Elements } from '../getResource';

const Post = props => {
    let { postType, 
          thumbnail, 
          selftext,
          url,
          media, 
          sbrNamePrefixed, 
          authorName, 
          time, 
          title, 
          ups, 
          commentsNum } = props;

    const postURL = 'reddit.com';

    return (
        <div className='Post
                        flex-diplay
                        margin-center'>

            <div className='vote-section
                            flex-display
                            flex-vertical-center
                            secondary-font-family'>

                <img src={Icons.voteUp} alt='vote up' />
                <p>{ups}</p>
                <img src={Icons.voteDown} alt='vote down' />

            </div>

            <div className='display-info'>
                
                <div className='publishing-info
                                flex-display
                                flex-vertical-center
                                secondary-font-family'>

                    <img src={require('../../resources/subreddit-dpp.svg').default} 
                         alt='subreddit icon' 
                         className='subreddit-pic'/>
                    <p className='subreddit-name'>{sbrNamePrefixed}</p>
                    <p className='publishing-extra-info'>.</p>
                    <p className='publishing-extra-info'>Posted by u/{authorName}</p>
                    <p className='publishing-extra-info'>13 hours ago</p>

                </div>

                <p className='title
                              secondary-font'>
                    {title}
                </p>

                <div className='content
                                flex-diplay'>
                    {media && <a href={url}>{media}</a>}
                    {selftext && <p>{selftext}</p>}

                    {selftext && <img className='text-fade' src={Elements.fade} alt='' />}
                </div>

                <div className='actions
                                flex-diplay
                                flex-vertical-center
                                secondary-font-family'>

                    <a href={postURL}
                       className='comment
                                  flex-diplay
                                  flex-vertical-center'>
                        <img src={Icons.comment} alt='comment' />
                        <p>{commentsNum} comments</p>
                    </a>
                    <a href={postURL}
                       className='share
                                  flex-diplay
                                  flex-vertical-center'>
                        <img src={Icons.share} alt='share' />
                        <p>share</p>
                    </a>

                </div>
                
            </div>

        </div>
    );
}

export default Post;
