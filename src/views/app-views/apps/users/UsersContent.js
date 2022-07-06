import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NewUser from "./NewUser";
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
        <Route exact path={`${match.url}/newuser`} component={NewUser} />
      </Switch>
    );
  }
}

export default UsersContent;
