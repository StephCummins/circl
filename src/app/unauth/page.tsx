'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import UnauthLeftModule from '../../components/UnauthLeftModule';

const UnauthPage = () => {
  const [unauthFormType, setUnauthFormType] = useState<
    null | 'login' | 'signup'
  >(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [first, setFirst] = useState<string>('');
  const [last, setLast] = useState<string>('');

  const handleToggleAuthForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === 'login-button') setUnauthFormType('login');
    if (e.currentTarget.id === 'signup-button') setUnauthFormType('signup');
  };

  const handleLoginAttempt = () => {};

  const handleCreateAccount = () => {};

  return (
    <Grid
      component="main"
      container
      sx={{
        height: '100vh',
        width: '100%'
      }}
    >
      <UnauthLeftModule />
      <Grid
        size={4}
        sx={{
          backgroundColor: 'var(--background-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Image
          src="/circl.png"
          alt="Welcome to circl"
          width={250}
          height={100}
        />
        <Typography
          component="h3"
          variant="body1"
          paddingBottom="100px"
          sx={{
            color: 'var(--text-light)',
            fontSize: '20px',
            paddingTop: '10px',
            textAlign: 'center'
          }}
        >
          connection on purpose
        </Typography>
        {!unauthFormType && (
          <>
            <Button
              id="login-button"
              onClick={handleToggleAuthForm}
              type="button"
              variant="contained"
              sx={{
                backgroundColor: 'var(--background-highlight)',
                borderRadius: '20px',
                color: 'var(--text-dark)',
                fontSize: '18px',
                height: '40px',
                width: '325px',
                marginBottom: '20px'
              }}
            >
              Login
            </Button>
            <Button
              id="signup-button"
              onClick={handleToggleAuthForm}
              type="button"
              variant="outlined"
              sx={{
                backgroundColor: 'var(--background-highlight)',
                borderRadius: '20px',
                color: 'var(--text-dark)',
                fontSize: '18px',
                height: '40px',
                width: '325px',
                marginBottom: '20px'
              }}
            >
              Create a New Account
            </Button>
          </>
        )}
        {unauthFormType === 'login' && (
          <Box className="content-center" component="form" noValidate>
            <TextField
              id="email"
              label="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              variant="outlined"
            />
            <TextField
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
              variant="outlined"
            />
            <Button
              onSubmit={handleLoginAttempt}
              type="submit"
              sx={{
                backgroundColor: 'var(--background-highlight)',
                color: 'var(--text-dark)'
              }}
              variant="contained"
            >
              Login
            </Button>
          </Box>
        )}
        {unauthFormType === 'signup' && (
          <Box className="content-center" component="form" noValidate>
            <TextField
              id="first"
              label="First Name"
              onChange={(e) => setFirst(e.target.value)}
              required
              value={first}
              variant="outlined"
            />
            <TextField
              id="last"
              label="Last Name"
              onChange={(e) => setLast(e.target.value)}
              required
              value={last}
              variant="outlined"
            />
            <TextField
              id="email"
              label="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              variant="outlined"
            />
            <TextField
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
              variant="outlined"
            />
            <Button
              onSubmit={handleCreateAccount}
              type="submit"
              sx={{
                backgroundColor: 'var(--background-highlight)',
                color: 'var(--text-dark)'
              }}
              variant="contained"
            >
              Create Account
            </Button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default UnauthPage;
