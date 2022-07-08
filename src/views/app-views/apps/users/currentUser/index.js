import React, { Component } from "react";
import InnerAppLayout from "layouts/inner-app-layout";
import SettingsMenu from "./SettingsMenu";
import SettingsContent from "./SettingsContent";


export class CurrentUser extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log("Id", id);
    return (
      <InnerAppLayout
        sideContent={<SettingsMenu {...this.props} />}
        mainContent={<SettingsContent {...this.props} />}
      />
    );
  }
}

export default CurrentUser;
