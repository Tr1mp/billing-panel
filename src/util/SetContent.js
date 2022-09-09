import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage.js';

const SetContent = (action, Component, data = null) => {
    const findProcess = {
        'loading': <Spinner/>,
        'loaded': <Component list={data}/>,
        'error': <ErrorMessage/>,
    }
    return findProcess[action];
}

export default SetContent;