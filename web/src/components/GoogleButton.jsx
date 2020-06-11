import React from 'react';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GoogleIcon from '../assets/google.svg';

const useStyles = makeStyles({
  white: {
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff'
    }
  }
});

const GoogleButton = ({ type = 'signin', onClick }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={onClick}
      variant="contained"
      startIcon={<img src={GoogleIcon} alt="google logo" />}
      className={classes.white}
      fullWidth
    >
      {type === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}
    </Button>
  );
};

export default GoogleButton;
