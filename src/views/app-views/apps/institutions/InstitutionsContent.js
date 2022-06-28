import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Institutions from "./Institutions";
import UpdateInstitution from "./UpdateIntitution";
import ViewInstitution from "./ViewInstitution";

export class InstitutionsContent extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${match.url}/institutions`}
          component={Institutions}
        />
        <Route
          exact
          path={`${match.url}/viewinstitution/:id`}
          component={ViewInstitution}
        />
        <Route exact path={`${match.url}/updateinstitution/:id`} component={UpdateInstitution} />
      </Switch>
    );
  }
}

export default InstitutionsContent;
