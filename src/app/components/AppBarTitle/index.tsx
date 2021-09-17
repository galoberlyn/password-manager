/**
 *
 * AppBarTitle
 *
 */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

interface Props {}

export function AppBarTitle(props: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Password Manager</Typography>
      </Toolbar>
    </AppBar>
  );
}
