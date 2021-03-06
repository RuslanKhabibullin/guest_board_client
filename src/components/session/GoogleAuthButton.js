import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux"
import { googleSignIn } from "../../actions/userActions"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  googleButton: {
    backgroundColor: "#4285F4",
    textTransform: "none",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#4285F4",
      color: theme.palette.common.white
    }
  },
  googleIcon: {
    marginRight: theme.spacing(1),
    width: "24px",
    height: "24px"
  }
}))

const GoogleAuthButton = ({ googleSignIn }) => {
  const { googleButton, googleIcon } = useStyles()

  return (
    <Button
      fullWidth
      className={googleButton}
      variant="contained"
      onClick={googleSignIn}
    >
      <img alt="google icon" src="/g-logo.png" className={googleIcon} />
      Sign in with Google
    </Button>
  )
}

GoogleAuthButton.propTypes = {
  googleSignIn: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return { googleSignIn: () => dispatch(googleSignIn()) }
}

export default connect(null, mapDispatchToProps)(GoogleAuthButton)
