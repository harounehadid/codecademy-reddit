export const Logo = {
    reddit: require('../resources/gdor-icon.png')
};

export const Icons = {
    home: require('../resources/home-icon.svg').default,
    searchbar: require('../resources/search-icon.svg').default,
    voteUp: require('../resources/vote-up-icon.svg').default,
    voteDown: require('../resources/vote-down-icon.svg').default,
    comment: require('../resources/comment-icon.svg').default,
    loading: require('../resources/loading-icon.svg').default
};

const subreddits = `{
    "data": [
        {
            "link": "https://www.reddit.com/r/pics.json",
            "name": "r/pics"
        },
        {
            "link": "https://www.reddit.com/r/funny.json",
            "name": "r/funny"
        },
        {
            "link": "https://www.reddit.com/r/meme.json",
            "name": "r/meme"
        }
    ]
}`;

export const getSubredditLink = index => {
    const subredditLinks = JSON.parse(subreddits);
    return subredditLinks['data'][index]['link'];
}

export const getAllSubreddits = () => {
    const subredditLinks = JSON.parse(subreddits);
    return subredditLinks['data'];
}
