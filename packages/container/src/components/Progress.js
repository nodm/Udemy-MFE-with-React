import React from 'react';
import { makeStyles, createStyles, Divider } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => createStyles({
  bar: {
    width: '100%',
    '& > * + *': {
      marginTp: theme.spacing(2),
    },
  },
}));

export const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
}
