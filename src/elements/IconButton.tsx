import React from "react";
import styled from "styled-components";
import { AiOutlineCamera } from "react-icons/ai";
import { GiBackpack } from "react-icons/gi";
import { VscAccount, VscComment } from "react-icons/vsc";

const IconButton = (props: any) => {
  const { _onClick, size, camera, backpack, my, review } = props;

  //아이콘 작동
  if (camera) {
    return (
      <React.Fragment>
        <AiOutlineCamera color={props.color} size={size} onClick={_onClick}></AiOutlineCamera>
      </React.Fragment>
    );
  }

  if (backpack) {
    return (
      <React.Fragment>
        <GiBackpack color={props.color} size={size} onClick={_onClick}></GiBackpack>
      </React.Fragment>
    );
  }

  if (my) {
    return (
      <React.Fragment>
        <VscAccount color={props.color} size={size} onClick={_onClick}></VscAccount>
      </React.Fragment>
    );
  }

  if (review) {
    return (
      <React.Fragment>
        <VscComment color={props.color} size={size} onClick={_onClick}></VscComment>
      </React.Fragment>
    );
  }

  return <React.Fragment></React.Fragment>;
};

IconButton.defaultProps = {
  delete: false,
  size: "24px",
  height: "24px",
  margin: null,
  padding: null,
  _onClick: () => {},
  likeIcon: false,
  unLikeIcon: false,
  commentIcon: false,
  plusIcon: false,
  checkIcon: false,
  leftArrowIcon: false,
  moreView: false,
  width: "100%",
  color: "white",
  zIndex: null,
  position: null,
  cursor: null,
};

// const Icon = styled.div`
//   cursor: ${(props) => props.cursor};
//   margin: ${(props) => props.margin};
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   padding: ${(props) => props.padding};
//   ${(props) => (props.color ? `color:${props.color};` : "")}
//   z-index: ${(props) => props.zIndex};
//   position: ${(props) => props.relative};
// `;

export default IconButton;
