import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import getAccessToken from "../services/getAccessToken";
import { saveTokenToSessionStorage } from "../services/tokenServices";
import getLoginUsernames from "../services/getLoginUsernames";

import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const options = getLoginUsernames();

const LoginListBox = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleChange = async (username) => {
    const {
      accessToken: token,
      user: { id: userId },
    } = await getAccessToken(username);
    loggedIn(token, username, userId);
    saveTokenToSessionStorage(token, username, userId);
    navigate("/tweets");
  };

  return (
    <Autocomplete
      onChange={(_event, newValue) => {
        handleChange(newValue);
      }}
      id="uncontrollable-list-box"
      options={options}
      sx={{ width: 300 }}
      disableClearable={true}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="User Emails" />
      )}
    />
  );
};

const mapDispatchToProps = {
  loggedIn,
};

export default connect(null, mapDispatchToProps)(LoginListBox);
