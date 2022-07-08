import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';

export class SettingsContent extends Component {
	render() {
		const { match } = this.props
		console.log("Match url in settings content", match.url)
		return (
			<Switch>
				<Route path={`/app/apps/users/currentuser/:id/viewprofile`} component={EditProfile} />
				<Route path={`/app/apps/users/currentuser/:id/change-password`} component={ChangePassword} />
			</Switch>
		)
	}
}

export default SettingsContent
