import styles from './Refresh.module.css';

const Refresh = props => {
    const { onClick } = props;

    const handleClick = () => {
        onClick();
    }

    return (
        <button onClick={handleClick} className={styles['main']} >Refresh</button>
    );
}

export default Refresh;
