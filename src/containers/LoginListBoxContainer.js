import { connect } from "react-redux";
import LoginListBox from "../components/loginListBox";
import { loggedIn } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = {
  loggedIn,
};

export const LoginListBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginListBox);
