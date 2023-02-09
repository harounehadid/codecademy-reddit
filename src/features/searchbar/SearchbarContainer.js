import Searchbar from "./Searchbar";
import { searchPost } from "./searchbarSlice";
import { useDispatch } from "react-redux";

const SearchbarContainer = () => {
    const dispatch = useDispatch();
    
    const handleChange = event => {
        if (event.key === 'Enter') dispatch(searchPost(event.target.value));
    }

    const handleBlur = event => {
        if (event.target.value === '') dispatch(searchPost(''));
    }

    return (
        <Searchbar handleChange={handleChange} handleBlur={handleBlur} />
    );
}

export default SearchbarContainer;
