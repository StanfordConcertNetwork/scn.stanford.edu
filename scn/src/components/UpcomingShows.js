import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import posts from '../static/posts';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function UpcomingShows() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id='posts'>
      <ImageCard show={posts[1]} checked={checked} />
      <ImageCard show={posts[0]} checked={checked} />
    </div>
  );
}
