import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';

const defaultTheme = createTheme();

export const Home = () => {
  return (
    <div>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container>
          <h1>HOME PAGE</h1>
        </Container>
      </ThemeProvider>
    </div>

  );
};


