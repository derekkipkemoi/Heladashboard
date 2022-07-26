import React, { Component } from 'react';
import NormalRequests from './NormalRequests';
import { Route, Switch } from 'react-router-dom';
import TSCRequests from './TSCRequests';
import TopUpsRequests from './TopUpsRequests';
import StopOrdersRequests from './StopOrdersRequests';
import RefundsRequests from './RefundsRequests';
import MainMenu from './MainMenu';
class AdvanceRequestsContent extends Component {
    state = {  } 
    render() { 
        const { match } = this.props
        return (
            <Switch>
                <Route path={`${match.url}/advance-requests-menu`} component={MainMenu} />
				<Route path={`${match.url}/normal-requests`} component={NormalRequests} />
                <Route path={`${match.url}/tsc-requests`} component={TSCRequests} />
                <Route path={`${match.url}/topups-requests`} component={TopUpsRequests} />
                <Route path={`${match.url}/stop-orders-requests`} component={StopOrdersRequests} />
                <Route path={`${match.url}/refunds-requests`} component={RefundsRequests} />
			</Switch>
        );
    }
}
 
export default AdvanceRequestsContent;