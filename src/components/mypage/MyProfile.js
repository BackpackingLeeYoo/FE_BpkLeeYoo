import React, { Fragment } from "react";
import { Grid, Text } from "../../elements";

const MyProfile = () => {
  return (
    <Fragment>
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="left"
        width="345px"
        height="100px"
        bg="#D9D9D9"
        borderRadius="12px"
        margin="30px auto"
      >
        <img
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          src="https://image.nbkorea.com/NBRB_PC/event/imc/nbxjeonhwangil/h01_on.jpg"
        ></img>
        <Grid>
          <Text>닉네임 님의</Text>
          <Text>14가지 이유가 기록되었습니다.</Text>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MyProfile;
