import React, { Fragment } from "react";

//css, library, package
import styled from "styled-components";

//Image
import KakaoLogin from "../assets/login/kakaoLogin.svg";

//elememtns
import { Grid, Text } from "../elements";

const Login = () => {
  return (
    <Fragment>
      <Grid display="flex" alignItems="center">
        <Grid display="flex" flexDirection="column" alignItems="center">
          <Grid
            bg="#D9D9D9"
            borderRadius="35px"
            width="250px"
            height="253px"
            margin="149px auto 18px auto"
          />
          <Text size="30px" margin="0 0 180px 0">
            백패킹의 이유
          </Text>
        </Grid>

        <KakaoBtn src={KakaoLogin} />
      </Grid>
    </Fragment>
  );
};

const KakaoBtn = styled.img`
  margin: 0 auto 24px auto;
`;

export default Login;
