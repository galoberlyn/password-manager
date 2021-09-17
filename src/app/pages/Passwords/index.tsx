/**
 *
 * Passwords
 *
 */
import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

interface Props {}

export function Passwords(props: Props) {
  return (
    <div style={{ padding: 20 }}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Fab
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20,
            }}
            color="primary"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}
