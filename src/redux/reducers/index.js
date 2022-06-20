import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Messaging from './Messaging'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    messaging: Messaging,
});

export default reducers;