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
            let newPostsData = body.data.children.map(postData => {
                let data = {};

                data.title = postData.data.title;
                data.id = postData.data.id;
                
                return data;
            });

            setPostsData(newPostsData);
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
                postsData.map(postData => <Post key={postData.id} title={postData.title} />)
            }

        </div>
    );
}

export default Posts;
