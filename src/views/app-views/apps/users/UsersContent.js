import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./profile";
import Setting from "./setting";
import Users from "./Users";

export class UsersContent extends Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={`${match.url}/users/:id`} component={Users} />
        <Route exact path={`${match.url}/viewuser/:id/:content`} component={Profile} />
        <Route exact path={`${match.url}/updateuser/:id/:content`} component={Setting} />
      </Switch>
    );
  }
}

export default UsersContent;
