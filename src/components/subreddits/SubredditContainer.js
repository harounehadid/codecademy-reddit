import Subreddit from './Subreddit';
import { useDispatch } from 'react-redux';
import { getSubredditLink } from '../getResource';
import { updateEndpoint } from './subredditEndpointSlice';

const SubredditContainer = props => {
    const {
        id,
        name
    } = props;

    const dispatch = useDispatch();

    const handleClick = id => {
        const subRedLink = getSubredditLink(id);
        dispatch(updateEndpoint(subRedLink));
    }

    return (
        <>
            <Subreddit id={id} name={name} handleClick={handleClick} />
        </>
    );
}

export default SubredditContainer;
