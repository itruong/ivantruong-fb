import React from 'react';
import {
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { scrollTo } from "../utils";

const buttonStyles = makeStyles(theme => ({
  appBarButton: {
    margin: "0 10px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",   
    },
  },
  appBarButtonText: {
    transition: "opacity 0.2s",
    "&:hover": {
      opacity: "0.5",
    },
    fontWeight: "300",
    textTransform: "none",
  },
}));

export default function HeaderButton(props) {
  const classes = buttonStyles();

  return (
    <Button
      color="inherit"
      className={classes.appBarButton}
      disableTouchRipple
      onClick={ () => scrollTo(props.href) }
    >
      <Typography 
        variant='h6'
        className={classes.appBarButtonText}
      >
        {props.value}
      </Typography>
    </Button>
  );
}