import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { TweetFormContainer } from "../containers/TweetFormContainer";

const logoImg = process.env.PUBLIC_URL + "/tweetLogo.png";

const Header = (state) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6" component="div">
            <div className="d-flex justify-content-between">
              <Avatar alt="Remy Sharp" src={logoImg} />
              <span>&nbsp; Twitter Application</span>
            </div>
          </Typography>
          {state.username !== "Not Signed In" ? (
            <TweetFormContainer />
          ) : (
            <span></span>
          )}
          <Stack>{state.username}</Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
