import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Messaging from './Messaging'
import RolesPermissions from './RolesPermissions';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    messaging: Messaging,
    rolesPermissions: RolesPermissions
});

export default reducers;