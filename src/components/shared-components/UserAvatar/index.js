import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";

const getHashOfString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  return hash;
};

const normalizeHash = (hash, min, max) => {
  return Math.floor((hash % (max - min)) + min);
};

const hRange = [100, 360];
const sRange = [100, 200];
const lRange = [0, 65];

const generateHSL = (name) => {
  const hash = getHashOfString(name);
  const h = normalizeHash(hash, hRange[0], hRange[1]);
  const s = normalizeHash(hash, sRange[0], sRange[1]);
  const l = normalizeHash(hash, lRange[0], lRange[1]);

  return `hsl(${h}, ${s}%, ${l}%)`;
};

const getInitials = (user) => {
  let name = user.replace(/ +(?= )/g, "");
  let firstName = name.split(" ")[0];
  let lastName = name.split(" ")[1];
  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
};

const renderAvatar = (props) => {
  const backgroundColor123 = {
    backgroundColor: props.color,
  };
  return (
    <Avatar
      {...props}
      className={`ant-avatar-${props.type}`}
      style={backgroundColor123}
    >
      {props.nameInitials}
    </Avatar>
  );
};

export const UserAvatar = (props) => {
  const {
    name,
    suffix,
    subTitle,
    id,
    type,
    src,
    icon,
    size,
    shape,
    gap,
    text,
    onNameClick,
  } = props;
  const color = generateHSL(name);
  const nameInitials = getInitials(name);
  return (
    <div className="avatar-status d-flex align-items-center">
      {renderAvatar({
        icon,
        src,
        type,
        size,
        shape,
        gap,
        text,
        color,
        nameInitials,
      })}
      <div className="ml-2">
        <div>
          {onNameClick ? (
            <div
              onClick={() => onNameClick({ name, subTitle, src, id })}
              className="avatar-status-name clickable"
            >
              {name}
            </div>
          ) : (
            <div className="avatar-status-name">{name}</div>
          )}
          <span>{suffix}</span>
        </div>
        <div className="text-muted avatar-status-subtitle">{subTitle}</div>
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  onNameClick: PropTypes.func,
};

export default UserAvatar;
