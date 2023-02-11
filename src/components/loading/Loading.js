import styles from './Loading.module.css';
import { Icons } from '../getResource';

const Loading = () => {
    return (
        <img src={Icons.loading} alt='' className={styles['main']} />
    );
}

export default Loading;
