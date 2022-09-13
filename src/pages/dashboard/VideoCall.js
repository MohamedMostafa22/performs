/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";
import AppCard from "../../components/AppCard";
import AppList from "../../components/AppList";

const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginBottom: 20,
  [theme.breakpoints.up("xl")]: {
    marginBottom: 30,
  },
}));
const UserWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  "& .MuiAvatar-root": {
    border: `solid 5px ${theme.palette.background.paper}`,
    marginBottom: 10,
    width: 84,
    height: 84,
    marginTop: 16,
  },
}));

const AboutItem = ({ name, value }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2} />
      <Grid item xs={4}>
        {name}
      </Grid>
      <Grid item xs={6}>
        {value}
      </Grid>
    </Grid>
  );
};

const VideoCall = ({ playerData, shouldHaveBorder }) => {
  return (
    <AppCard
      sxStyle={{
        pb: 6,
        border: shouldHaveBorder && "1px solid",
        borderColor: "grey.200",
      }}
      contentStyle={{
        p: 0,
        "&:last-of-type": {
          pb: 0,
        },
      }}
    >
      <Box px={5} pb={4}>
        <UserInfo>
          <UserWrapper>
            <Avatar src={playerData?.icon_url} alt="User" />
          </UserWrapper>
          <Typography component="h3" variant="h3">
            {playerData?.name}
          </Typography>
          <Box component="p" color="text.secondary" mt={1}>
            {playerData?.title}
          </Box>
        </UserInfo>
        <AppList
          animation="transition.slideRightBigIn"
          data={
            playerData && [
              {
                name: "Gender",
                value: playerData?.gender,
              },
              {
                name: "Height",
                value: playerData?.height,
              },
              {
                name: "Weight",
                value: playerData?.weight,
              },
              {
                name: "Date of Birth",
                value: playerData?.dob,
              },
            ]
          }
          renderRow={(data) => (
            <AboutItem key={data.name} name={data.name} value={data.value} />
          )}
        />
      </Box>
    </AppCard>
  );
};

export default VideoCall;
