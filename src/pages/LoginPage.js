import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';








function Tag(props){
  return(
    <Typography variant='body2' color="text.secondary" align="center" {...props}>
           {"See what's going on at tft"}
           <Link color='inherit' href="./MarketPage.js">
            Trade Window
           </Link>
           {' '}
            {new Date().getFullYear()}
           {'.'}
    </Typography>
  );
}
const theme=createTheme({
  palette:{
    primary:{
      main: '#000000',
    }
  }
});

const LogIn=()=>{

    return(
     <ThemeProvider theme={theme}>
      <Container components="main" max-width="xs">
          <Paper elevation={2}/>
         <CssBaseline/>
          <Box
               sx={{marginTop:8, 
               display:'flex', 
               flexDirection: 'column', 
               alignItems:'center'
              }}
          >
             <Avatar sx={{
                m:1,
                bgcolor: 'secondary.main'
              }}>
               
             </Avatar>
             <Typography cmponent='h1' variant='h5'>
              Sign In
             </Typography>
             <Box component='form' noValidate sx={{mt:1}}>
                <TextField
                  margin="normal"
                  id="email"
                  required
                  fullWidth
                  label="email address"
                  name="name"
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  id='password'
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                />
                <FormControlLabel
                   control={<Checkbox value="remember" color="primary"/>}
                   label="Remember me"
                />
                <Button 
                   type="submit"
                   fullWidth
                   variant="contained"
                   sx={{mt:3 , mb:2}}
                > 
                  Sign In
                </Button>
                <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
             </Box>
          </Box>
          <Tag sx={{mt:8, mb: 4}} />
      </Container>
    </ThemeProvider>
    );

}

export default LogIn;