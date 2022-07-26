import React, { Component } from "react";
import UsersContent from "./UsersContent";

class Users extends Component {
  render() {
    return (
      <div>
        <UsersContent {...this.props}/>
      </div>
    );
  }
}

export default Users;
