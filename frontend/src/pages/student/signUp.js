// import * as React from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from 'react-router-dom';
// import {IconLabelTabs} from '../../components/tabPanel'
// import { deepPurple } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: deepPurple,

//   },
// });


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const defaultTheme = createTheme();

// export function StudentSignup(props) {
//   const [isSentOtp, setIsSentOtp] = React.useState("false");
//   React.useEffect(() => {
//     props.setValue(0);
//   },[])
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//       let firstName = data.get('firstName');
//       let lastName =  data.get('lastName');
//       let email = data.get('email');
//       let password =  data.get('password');
//       let rollNumber = data.get('rollNumber');
//       let branch =  data.get('branch');
//       let graduationYear =  data.get('graduationYear');
//       let major =  data.get('major');

//       await axios.post('http://localhost:3001/signup/student', {firstName, lastName, email, password, rollNumber, branch, graduationYear, major})    
//       .then(result => {
//         if(result.data === "You are already Registered") {alert("You are already Registered!");     navigate('/auth/login');}
//         else if(result.data.status === 400) alert(result.data.message);
//         else {console.log(result);     navigate('/auth/login');}
//       })
//       .catch(err => console.log(err));
//     };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <IconLabelTabs value={props.value} setValue={props.setValue}/>

//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="...@iiitg.ac.in"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="rollNumber"
//                   label="Rollnumber"
//                   name="rollNumber"
//                   autoComplete="rollNumber"
//                   inputProps={{ min: 1, max: 999999 }}
//                   type="number"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="branch"
//                   label="Branch"
//                   name="branch"
//                   autoComplete="branch"
//                   select
//                 >
//                   <MenuItem value="CSE">CSE</MenuItem>
//                   <MenuItem value="ECE">ECE</MenuItem>
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="graduationYear"
//                   label="Graduation Year"
//                   name="graduationYear"
//                   autoComplete="graduationYear"
//                   select
//                 >
//                   {Array.from({ length: 100 }, (_, i) => 2023 + i).map((year) => (
//                     <MenuItem key={year} value={year}>
//                       {year}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="major"
//                   label="Major"
//                   name="major"
//                   autoComplete="major"
//                   select
//                 >
//                   <MenuItem value="BTech">B Tech</MenuItem>
//                   <MenuItem value="MTech">M Tech</MenuItem>
//                   <MenuItem value="PHD">PHD</MenuItem>
//                 </TextField>
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }



// // if else condition to check isSentOtp condition for different Axios 

// // use ternary operator to render different page for registration and for otp verification 

// // build otp form



import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { deepPurple } from '@mui/material/colors';
import { IconLabelTabs } from '../../components/tabPanel'
import { PersistentDrawerLeft } from '../../components/student/navbar';
import { Navbar } from '../../components/navbar';

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function StudentSignup(props) {
  React.useEffect(() => {
    props.setValue(0);
  }, [])
  const [isSentOtp, setIsSentOtp] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!isSentOtp) {
      let firstName = data.get('firstName');
      let lastName = data.get('lastName');
      let email = data.get('email');
      let password = data.get('password');
      let rollNumber = data.get('rollNumber');
      let branch = data.get('branch');
      let batch = data.get('batch');
      let graduationYear = data.get('graduationYear');
      let program = data.get('program');

      await axios.post('http://localhost:3001/signup/student', { firstName, lastName, email, password, rollNumber, branch, batch, graduationYear, program })
        .then(result => {
          if (result.data.status === 500) alert(result.data.error);
          else if (result.data.status === 400 && result.data === "You have already Registered") {
            alert("You have already Registered!");
            navigate('/auth/login');
          } else if (result.data.status === 400) {
            alert(result.data);
          } else {
            setIsSentOtp(true);
          }
        })
        .catch(err => console.log(err));
    } else {
      let otp = data.get('otp');
      // Call API to verify OTP
      await axios.post('http://localhost:3001/signup/authenticate', { otp })
        .then(result => {
          console.log(result);
          // Handle success or failure based on the result
          navigate('/auth/login');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Navbar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconLabelTabs value={props.value} setValue={props.setValue} />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {!isSentOtp && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="...@iiitg.ac.in"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="rollNumber"
                    label="Rollnumber"
                    name="rollNumber"
                    autoComplete="rollNumber"
                    inputProps={{ min: 1, max: 999999 }}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="branch"
                    label="Branch"
                    name="branch"
                    autoComplete="branch"
                    select
                  >
                    <MenuItem value="CSE">CSE</MenuItem>
                    <MenuItem value="ECE">ECE</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="batch"
                    label="Batch"
                    name="batch"
                    autoComplete="batch"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="graduationYear"
                    label="Graduation Year"
                    name="graduationYear"
                    autoComplete="graduationYear"
                    select
                  >
                    {Array.from({ length: 100 }, (_, i) => 2023 + i).map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="program"
                    label="Program"
                    name="program"
                    autoComplete="program"
                    select
                  >
                    <MenuItem value="BTech">BTech</MenuItem>
                    <MenuItem value="MTech">MTech</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                  </TextField>

                </Grid>
              </Grid>
            )}
            {isSentOtp && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    name="otp"
                    autoComplete="otp"
                  />
                </Grid>
              </Grid>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSentOtp ? 'Verify OTP' : 'Sign Up'}
            </Button>
            {!isSentOtp && (
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}


