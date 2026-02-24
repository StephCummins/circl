'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Form from 'next/form';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
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
          height: '100vh',
          position: 'relative' // Keeps the logo inside this column
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '240px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            width: '100%',
            pointerEvents: 'none'
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
        </Box>
        {!unauthFormType && (
          <>
            <Button
              className="btn-animate"
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
              className="btn-animate"
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
          <Form action={handleLoginAttempt}>
            <Stack spacing={2}>
              <TextField
                className="custom-text-field"
                id="email"
                label="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                variant="outlined"
              />
              <TextField
                className="custom-text-field"
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
                variant="outlined"
              />
              <Button
                className="btn-animate"
                type="submit"
                sx={{
                  backgroundColor: 'var(--background-highlight)',
                  borderRadius: '20px',
                  color: 'var(--text-dark)',
                  fontSize: '18px',
                  height: '40px',
                  width: '325px',
                  marginBottom: '20px'
                }}
                variant="contained"
              >
                Login
              </Button>
              <Typography
                component="h3"
                variant="body1"
                onClick={() => setUnauthFormType('signup')}
                paddingBottom="100px"
                sx={{
                  color: 'var(--text-light)',
                  fontSize: '16px',
                  textAlign: 'center',
                  textDecoration: 'underline'
                }}
              >
                Need to create an account instead?
              </Typography>
            </Stack>
          </Form>
        )}
        {unauthFormType === 'signup' && (
          <Form action={handleCreateAccount}>
            <Stack spacing={2}>
              <TextField
                className="custom-text-field"
                id="first"
                label="First Name"
                onChange={(e) => setFirst(e.target.value)}
                required
                value={first}
                variant="outlined"
              />
              <TextField
                className="custom-text-field"
                id="last"
                label="Last Name"
                onChange={(e) => setLast(e.target.value)}
                required
                value={last}
                variant="outlined"
              />
              <TextField
                className="custom-text-field"
                id="email"
                label="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                variant="outlined"
              />
              <TextField
                className="custom-text-field"
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
                variant="outlined"
              />
              <Button
                className="btn-animate"
                type="submit"
                sx={{
                  backgroundColor: 'var(--background-highlight)',
                  borderRadius: '20px',
                  color: 'var(--text-dark)',
                  fontSize: '18px',
                  height: '40px',
                  width: '325px',
                  marginBottom: '20px'
                }}
                variant="contained"
              >
                Create Account
              </Button>
            </Stack>
          </Form>
        )}
      </Grid>
    </Grid>
  );
};

export default UnauthPage;
