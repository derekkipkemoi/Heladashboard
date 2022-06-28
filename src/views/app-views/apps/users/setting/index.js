import React, { Component } from "react";
import InnerAppLayout from "layouts/inner-app-layout";
import SettingsMenu from "./SettingsMenu";
import SettingsContent from "./SettingsContent";

// const SettingOption = ({ match, location }) => {
//   return (
//     <Menu
//       defaultSelectedKeys={`${match.url}/updateuser`}
//       mode="inline"
//       selectedKeys={[location.pathname]}
//     >
//       <Menu.Item key={`${match.url}/updateuser`}>
//         <UserOutlined />
//         <span>Edit Profile</span>
//         <Link to={`${match.url}?id=updateuser`} />
//       </Menu.Item>
//       <Menu.Item key={`${match.url}/change-password`}>
//         <LockOutlined />
//         <span>Change Password</span>
//         <Link to={`${match.url}?id=change-password`} />
//       </Menu.Item>
//       {/* <Menu.Item key={`${match.url}/billing`}>
// 				<CreditCardOutlined />
// 				<span>Billing</span>
// 				<Link to={`${match.url}?id=billing`} />
// 			</Menu.Item>
// 			<Menu.Item key={`${match.url}/notification`}>
// 				<BellOutlined />
// 				<span>Notification</span>
// 				<Link to={`${match.url}?id=notification`} />
// 			</Menu.Item> */}
//     </Menu>
//   );
// };

// const SettingContent = (props) => {
//   const { match } = props;

//   const getSettingComponent = () => {
//     const val = new URLSearchParams(props.location.search).get("id");
//     switch (val) {
//       case "edit-profile":
//         return EditProfile;
//       case "change-password":
//         return ChangePassword;
//       // case 'billing':
//       // 	return Billing
//       // case 'notification':
//       // 	return Notification
//       default:
//         return EditProfile;
//     }
//   };

//   return (
//     <Switch>
//       <Route path={`${match.url}`} component={getSettingComponent()} />
//     </Switch>
//   );
// };

export class Setting extends Component {
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

export default Setting;
