import './Post.css';
import { Icons, Elements } from '../getResource';

const Post = props => {
    let { thumbnail, sbrNamePrefixed, authorName, time, title, ups, commentsNum } = props;

    const postURL = 'reddit.com';

    return (
        <div className='Post
                        flex-diplay'>

            <div className='Post-vote-section
                            flex-diplay
                            flex-vertical-center
                            flex-column-direction'>
                <img src={Icons.voteUp} alt='vote up' />
                <p>{ups}</p>
                <img src={Icons.voteDown} alt='vote down' />
            </div>

            <div className='Post-display-info'>
                
                <div className='flex-diplay
                                flex-vertical-center
                                Post-publishing-info'>
                    <img src={require('../../resources/subreddit-dpp.svg').default} 
                         alt='' 
                         className='Post-subreddit-pic'/>
                    <p className='Post-subreddit-name'>{sbrNamePrefixed}</p>
                    <p className='Post-publishing-extra-info'>.</p>
                    <p className='Post-publishing-extra-info'>Posted by u/{authorName}</p>
                    <p className='Post-publishing-extra-info'>13 hours ago</p>
                </div>

                <p className='Post-title'>{title}</p>

                <div className='Post-content'>
                    <p>
                        I have a mysql database which is accessed with php. My new idea is that I want to be able to send 
                        a database query without loading / reloading my page. (I have five boxes, and when I click on Box n, 
                        I want to query mysql without reloading the page. (There may be other information in Boxes !n that 
                        I am not ready to navigate away from.)<br></br><br></br>
                        What's the best way to do this? Javascript to open invisible iframes and load PHP pages with mysql 
                        queries in those iframes?
                    </p>

                    <img className='Post-fade' src={Elements.fade} alt='' />
                </div>

                <div className='Post-actions
                                flex-diplay
                                flex-vertical-center'>
                    <a href={postURL}
                       className='Post-comment
                                  flex-diplay
                                  flex-vertical-center'>
                        <img src={Icons.comment} alt='comment' />
                        <p>{commentsNum} comments</p>
                    </a>
                    <a href={postURL}
                       className='Post-share
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
