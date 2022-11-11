import Post from "./post/Post";
import { useState, useEffect } from "react";

const Posts = () => {
    let url = `https://www.reddit.com/r/memes.json`;

    const handleScroll = () => {
        const atBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (atBottom) console.log("I'm at the bottom");
    }

    // Hold data about reddit posts
    let [postsData, setPostsData] = useState([]);
    // Fetch posts from the link
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(body => {
            let newPostsData = body.data.children.map(fetchedPost => {
                let data = {};

                data.id = fetchedPost.data.id;

                data.sbrNamePrefixed = fetchedPost.data.subreddit_name_prefixed;
                data.authorName = fetchedPost.data.author;
                data.time = fetchedPost.data.created_utc;

                data.thumbnail = fetchedPost.data.thumbnail;

                data.title = fetchedPost.data.title;
                
                data.ups = fetchedPost.data.ups;

                data.commentsNum = fetchedPost.data.num_comments;
                
                return data;
            });

            setPostsData(newPostsData);

            console.log(body.data.children[0]);
        })
        .catch(error => console.log(error));

        

    }, []);
    
    // Check if user hit the bottom of page
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex-diplay
                        flex-horizontal-center
                        flex-column-direction
                        margin-center'>

            {
                postsData.map(postData => <Post 
                                            key={postData.id} 
                                            id={postData.id}
                                            thumbnail={postData.thumbnail}
                                            sbrNamePrefixed={postData.sbrNamePrefixed}
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
