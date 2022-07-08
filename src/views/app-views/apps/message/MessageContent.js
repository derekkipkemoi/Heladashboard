import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import MailItem from './MessageItem';
import MessageCompose from './MessageCompose';
import AllMessages from './AllMessages';
import ViewMessageDetails from './ViewMessageDetails';
import TemplateMessages from './TemplateMessages';
import ReminderMessage from './ReminderMessage';
import ViewReminder from './ViewReminder';
import ViewTemplate from './ViewTemplate';

export class MailContent extends Component {
	render() {
		const { match } = this.props
		return (
			<Switch>
				<Route path={`${match.url}/compose`} component={MessageCompose} />
				<Route exact path={`${match.url}/all-messages/:id`} component={ViewMessageDetails} />
				<Route exact path={`${match.url}/all-messages`} component={AllMessages} />
				<Route exact path={`${match.url}/template-messages`} component={TemplateMessages} />
				<Route exact path={`${match.url}/reminder-messages`} component={ReminderMessage} />
				<Route exact path={`${match.url}/reminder-messages/:id`} component={ViewReminder} />
				<Route exact path={`${match.url}/template-messages/:id`} component={ViewTemplate} />
				{/* <Route exact path={`${match.url}/:category`} component={MailItem} /> */}
			</Switch>
		)
	}
}

export default MailContent
