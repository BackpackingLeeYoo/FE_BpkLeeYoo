import React, { Fragment } from "react";
import { Grid, Text } from "../elements";

const LoginInfo = () => {
  return (
    <Fragment>
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="left"
        margin="65px auto 89px auto"
        width="70%"
      >
        <Text size="24px">
          사용하실 <br />
          닉네임을 입력해주세요
        </Text>
        <input type="text" placeholder="입력해주세요"></input>
        <button>확인</button>
      </Grid>
    </Fragment>
  );
};

export default LoginInfo;
