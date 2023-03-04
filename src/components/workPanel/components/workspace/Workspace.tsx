import styles from './Workspace.module.css';
import {Canvas} from '../canvas/Canvas';
import {useDispatch, useSelector} from 'react-redux';
import store from '../../../../store/store';
import {getSlidesBySelection} from '../../../../common/functions/slides';
import {Presentation} from '../../../../types/presentation';
import {Slide} from '../../../../types/slides';
import {clearSelectedBlocks} from '../../../../store/actionCreators/selectedSlides';

function Workspace() {
    useSelector((state: Presentation) => state.slides);
    useSelector((state: Presentation) => state.selectedSlides);
    const dispatch = useDispatch();

    const currentSlide: Slide = getSlidesBySelection(store.getState().slides, store.getState().selectedSlides)[0];

    return (
        <div className={styles.wrapper}
             onClick={() => {
                 dispatch(clearSelectedBlocks());
             }}
        >
            <Canvas slide={currentSlide} isFilmstrip={false}/>
        </div>
    );
}

export default Workspace;