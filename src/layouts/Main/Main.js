import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Sidebar, Topbar, Footer } from './components';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  shiftContent: {
    paddingLeft: 60,
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const { children } = props;
  const open = useSelector(state => state.sidebarState)

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <div
      className={clsx({
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar/>
      <Sidebar/>
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
