import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import NewRole from './NewRole';
import Permissions from './Permissions';
import Roles from './Roles';
import UpdateRole from './UpdateRole';
import ViewRole from './ViewRole';


export class RolesPermissionsContent extends Component {
	render() {
		const { match } = this.props
		return (
			<Switch>
				<Route exact path={`${match.url}/permissions`} component={Permissions} />
				<Route exact path={`${match.url}/viewrole/:id`} component={ViewRole} />
				<Route exact path={`${match.url}/updaterole/:id`} component={UpdateRole} />
				<Route exact path={`${match.url}/roles`} component={Roles} />
				<Route exact path={`${match.url}/newrole`} component={NewRole} />
			</Switch>
		)
	}
}

export default RolesPermissionsContent
