import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ width: '100%', left: 0, right: 0, top: 0}}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/auth/login" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
            <Button color="inherit">Log In</Button>
          </Link>
          <Link to="/signup/student" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
