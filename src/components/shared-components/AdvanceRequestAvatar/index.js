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

const renderAvatar = (props) => {
  const backgroundColor123 = {
    backgroundColor: props.color,
    top: "-40px",
    left: "0%",
  };
  return (
    <Avatar
      {...props}
      className={`ant-avatar-${props.type}`}
      style={backgroundColor123}
      shape="square"
      size={props.size}
    >
      <span style={{ fontSize: "30px" }}> {props.name}</span>
    </Avatar>
  );
};

export const AdvanceRequestAvatar = (props) => {
  const { name, size } = props;
  const color = generateHSL(name);

  return (
    <div className="avatar-status d-flex align-items-center">
      {renderAvatar({
        size,
        color,
        name,
      })}
    </div>
  );
};

AdvanceRequestAvatar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  onNameClick: PropTypes.func,
};

export default AdvanceRequestAvatar;
