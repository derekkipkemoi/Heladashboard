import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Settings from './Settings';
import UpdateSettings from './UpdateSettings';

class SettingsContent extends Component {
    state = {  } 
    render() { 
        const { match } = this.props
        return (
            <Switch>
				<Route path={`${match.url}/settings`} component={Settings} />
				<Route path={`${match.url}/updatesettings`} component={UpdateSettings} />
			</Switch>
        );
    }
}
 
export default SettingsContent;