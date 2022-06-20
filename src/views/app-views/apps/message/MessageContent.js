import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import MailItem from './MessageItem';
import MailDetail from './MessageDetail';
import MailCompose from './MessageCompose';
import AllMessages from './AllMessages';
import ViewMessageDetails from './ViewMessageDetails';

export class MailContent extends Component {
	render() {
		const { match } = this.props
		return (
			<Switch>
				<Route path={`${match.url}/compose`} component={MailCompose} />
				<Route path={`${match.url}/:all-messages/:id`} component={ViewMessageDetails} />
				<Route exact path={`${match.url}/all-messages`} component={AllMessages} />
				<Route exact path={`${match.url}/:category`} component={MailItem} />
			</Switch>
		)
	}
}

export default MailContent
