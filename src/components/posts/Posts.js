import styles from './posts.module.css';
import Post from "../post/Post";
import { useState, useEffect } from "react";

const Posts = () => {
    let url = `https://www.reddit.com/r/pics.json`;

    // Hold data about reddit posts
    let [postsData, setPostsData] = useState([]);
    // Fetch posts from the link
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(body => {
            // Get only posts with images
            const filteredPosts = body.data.children.filter(fetchedPost => fetchedPost.data.post_hint === 'image');

            const newPosts = filteredPosts.map(fetchedPost => {
                let data = {};

                // console.log(fetchedPost.data);

                data.id = fetchedPost.data.id;
                data.postURL = 'https://www.reddit.com' + fetchedPost.data.permalink;
                data.media = fetchedPost.data.url_overridden_by_dest;
                data.authorName = fetchedPost.data.author;
                data.time = fetchedPost.data.created_utc;
                data.title = fetchedPost.data.title;
                data.ups = fetchedPost.data.ups;
                data.commentsNum = fetchedPost.data.num_comments;
                
                return data;
            });

            setPostsData(newPosts);
        })
        .catch(error => console.log(error));
        
    }, []);

    return (
        <div className={`flex-diplay
                         flex-horizontal-center
                         flex-column-direction
                         margin-center
                         ${styles['posts']}`}>

            {
                postsData.map(postData => <Post 
                                            key={postData.id} 
                                            id={postData.id}
                                            postURL={postData.postURL}
                                            media={postData.media}
                                            authorName={postData.authorName}
                                            time={postData.time}
                                            title={postData.title} 
                                            ups={postData.ups}
                                            commentsNum={postData.commentsNum}
                                            />)
            }

        </div>
    );
}

export default Posts;
