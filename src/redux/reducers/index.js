import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Messaging from './Messaging'
import RolesPermissions from './RolesPermissions';
import Users from './Users';
import Institutions from './Institutions';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    messaging: Messaging,
    rolesPermissions: RolesPermissions,
    usersList: Users,
    institutions: Institutions
});

export default reducers;