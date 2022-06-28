import React, { Component } from "react";
import InstitutionsContent from "./InstitutionsContent";

class Institutions extends Component {
  render() {
    return (
      <div>
        <InstitutionsContent {...this.props} />
      </div>
    );
  }
}

export default Institutions;
