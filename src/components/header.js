import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { TweetFormContainer } from "../containers/TweetFormContainer";

/* 
const logoImg = process.env.PUBLIC_URL + "/navlogo-removebg-preview.png"; */

const Header = (state) => {
  console.log("username ", state);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6" component="div">
            Tweeter Application
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
