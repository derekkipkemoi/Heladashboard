import React, { Component } from 'react'
import InnerAppLayout from 'layouts/inner-app-layout';
import MessageMenu from './MessageMenu';
import MessageContent from './MessageContent';

export class Mail extends Component {
	render() {
		return (
			<div className="mail">
				<InnerAppLayout 
					sideContent={<MessageMenu {...this.props}/>}
					mainContent={<MessageContent {...this.props}/>}
					border
				/>
			</div>
		)
	}
}

export default Mail
