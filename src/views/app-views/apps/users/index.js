import InnerAppLayout from "layouts/inner-app-layout";
import React, { Component } from "react";
import UserMenu from "./UsersMenu";
import UsersContent from "./UsersContent";

class Users extends Component {
  // state = {
  //   printPdf: 0,
  // };

  // printPdf = (value) => {
  //   console.log("Print pdf", value);
  //   this.setState({
  //     printPdf: value,
  //   });
  // };
  render() {
    return (
      <div>
        <UsersContent {...this.props}/>
      </div>
    );
  }
}

export default Users;
