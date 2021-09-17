/**
 *
 * SignOn
 *
 */
import * as React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStyles } from './styled';
const bcrypt = require('bcryptjs');
interface Props {}

export function SignOn(props: Props) {
  const classes = useStyles();
  const SALTS = 10;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPasswordSet, setPasswordState] = React.useState(
    localStorage.getItem('isPasswordSet'),
  );
  const [vaultPw, setVaultPw] = React.useState('');
  const [invalid, setInvalid] = React.useState(false);
  const [masterPassword, setMasterPassword] = React.useState('');
  const [isFormSubmitted, setFormSubmitted] = React.useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
    if (!masterPassword) {
      return;
    }
    const hash = bcrypt.hashSync(masterPassword, SALTS);
    localStorage.setItem('isPasswordSet', '1');
    localStorage.setItem('masterPassword', hash);
    window.location.href = '/passwords';
  };

  const authenticate = () => {
    setFormSubmitted(true);
    if (!vaultPw) {
      return;
    }
    const masterPw = localStorage.getItem('masterPassword');
    const isMatch = bcrypt.compareSync(vaultPw, masterPw);
    if (isMatch) {
      window.location.href = '/passwords';
      return;
    }
    setInvalid(true);
  };

  return (
    <div id="sign-on">
      <Grid container className={classes.container}>
        {isPasswordSet && (
          <Grid item xs={12}>
            <LockIcon fontSize="large" />
            <br />
            <TextField
              onChange={e => {
                setFormSubmitted(false);
                setVaultPw(e.target.value)
              }}
              error={isFormSubmitted && invalid}
              helperText={isFormSubmitted && invalid && 'Invalid password'}
              type="password"
            />
            <br />
            <br />
            <Button variant="contained" onClick={authenticate}>
              Open vault
            </Button>
          </Grid>
        )}
        {!isPasswordSet && (
          <Grid item xs={12}>
            Set Master Password
            <br />
            <TextField
              onChange={e => {
                setMasterPassword(e.target.value);
                setFormSubmitted(false);
              }}
              error={isFormSubmitted && !masterPassword}
              type="password"
              helperText={isFormSubmitted && !masterPassword && 'Required'}
            />
            <br />
            <br />
            <Button variant="contained" onClick={handleSubmit}>
              Go
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
