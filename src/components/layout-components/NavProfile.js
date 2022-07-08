import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from "react-redux";
import { USER_ID, USER_NAME } from "redux/constants/Auth";
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Icon from "components/util-components/Icon";
import { signOut } from "redux/actions/Auth";
import UserAvatar from "components/shared-components/UserAvatar";
import TopBarAvatar from "components/shared-components/TopBarAvatar";

const menuItem = [
  {
    title: "Profile",
    icon: EditOutlined,
    path: `/app/apps/users/currentuser/${localStorage.getItem(USER_ID)}/${"viewprofile"}`,
  },

  // {
  //   title: "Account Setting",
  //   icon: SettingOutlined,
  //   path: `/app/apps/users/viewuser/${localStorage.getItem(USER_ID)}/${"details"}`,
  // },
  //   {
  // 	title: "Billing",
  // 	icon: ShopOutlined ,
  // 	path: "/"
  // },
  //   {
  // 	title: "Help Center",
  // 	icon: QuestionCircleOutlined,
  // 	path: "/"
  // }
];

export const NavProfile = ({ signOut }) => {
  const profileImg = "/img/avatars/thumb-1.jpg";
  const id = localStorage.getItem(USER_ID);
  const name = localStorage.getItem(USER_NAME);
  console.log("User name", name, id);
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          {/* <Avatar size={45} src={profileImg} /> */}
          <UserAvatar
              src={""}
              name={name}
              // subTitle={record.email}
            />
          {/* <div className="pl-3">
            <h4 className="mb-0 pb-0">{name}</h4>
          </div> */}
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={(e) => signOut()}>
            <span>
              <LogoutOutlined />
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <TopBarAvatar name={localStorage.getItem(USER_NAME)}/>
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default connect(null, { signOut })(NavProfile);
