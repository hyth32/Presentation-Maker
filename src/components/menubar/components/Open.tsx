import styles from '../../common/barIcon/BarIcon.module.css';
import open_file from '../../../assets/images/barIcons/open_file.svg';

const Open = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={open_file} alt='Open file' />
    </div>
  );
}

export default Open;
