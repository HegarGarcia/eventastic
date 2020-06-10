import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  signInButton: {
    color: '#fff'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Eventastic
        </Typography>
        <Button
          variant="outlined"
          size="large"
          className={classes.signInButton}
          startIcon={<AccountCircle />}
        >
          Sign in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
