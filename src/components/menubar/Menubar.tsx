import styles from './Menubar.module.css';
import Open from './components/Open';
import Save from './components/Save';
import View from './components/View';
import AddNewSlide from './components/AddNewSlide';
import DeleteSlide from './components/DeleteSlide';
import Undo from './components/Undo';
import Redo from './components/Redo';

const Menubar = () => {
  return (
    <div className={styles.actionMenu}>
      Action
      <Open />
      <Save />
      <View />
      <AddNewSlide />
      <DeleteSlide />
      <Undo />
      <Redo />
    </div>
  );
}

export default Menubar;
