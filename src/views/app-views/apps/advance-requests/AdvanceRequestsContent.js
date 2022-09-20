import React, { Component } from "react";
import NormalRequests from "./NormalRequests";
import { Route, Switch } from "react-router-dom";
import TSCRequests from "./TSCRequests";
import TopUpsRequests from "./TopUpsRequests";
import StopOrdersRequests from "./StopOrdersRequests";
import RefundsRequests from "./RefundsRequests";
import MainMenu from "./MainMenu";
import RequestsDataTable from "./RequestsDataTable";
import ViewProfile from "./profile/ViewProfile";
import StopOrdersDataTables from "./StopOrdersDataTables";
import ViewStopOrdersProfile from "./profile/ViewStopOrdersProfile";
import GenerateStopOrder from "./GenerateStopOrder";
class AdvanceRequestsContent extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/advance-requests-menu`}
          component={MainMenu}
        />
        <Route
          exact
          path={`${match.url}/normal-requests`}
          component={NormalRequests}
        />
        <Route
          exact
          path={`${match.url}/tsc-requests`}
          component={TSCRequests}
        />
        <Route
          exact
          path={`${match.url}/topups-requests`}
          component={TopUpsRequests}
        />
        <Route
          exact
          path={`${match.url}/stop-orders-requests`}
          component={StopOrdersRequests}
        />
        <Route
          exact
          path={`${match.url}/refunds-requests`}
          component={RefundsRequests}
        />
        <Route
          exact
          path={`${match.url}/view-data/:id`}
          component={RequestsDataTable}
        />
        <Route
          exact
          path={`${match.url}/view-stop-orders/:id`}
          component={StopOrdersDataTables}
        />
        <Route
          exact
          path={`${match.url}/view-user-data/:id`}
          component={ViewProfile}
        />
        <Route
          exact
          path={`${match.url}/view-stop-order-user-data/:id`}
          component={ViewStopOrdersProfile}
        />
        <Route
          exact
          path={`${match.url}/generate-stop-order`}
          component={GenerateStopOrder}
        />
      </Switch>
    );
  }
}

export default AdvanceRequestsContent;
