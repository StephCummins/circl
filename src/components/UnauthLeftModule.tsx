import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const UnauthLeftModule = () => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          p: 3
        }}
      >
        <Image src="/logo.png" alt="circl logo" width={100} height={100} />
      </Box>
      <Grid
        size={8}
        sx={{
          backgroundColor: 'var(--background-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          paddingBottom="100px"
          sx={{ color: 'var(--text-light)' }}
        >
          Social media broke.
          <br />
          We fixed it.
        </Typography>
        <Typography
          component="h2"
          variant="subtitle1"
          sx={{ color: 'var(--text-light)' }}
        >
          <Typography component="span" variant="subtitle2">
            No
          </Typography>{' '}
          influencers.
          <br />
          <Typography component="span" variant="subtitle2">
            No
          </Typography>{' '}
          followers.
          <br />
          <Typography component="span" variant="subtitle2">
            No
          </Typography>{' '}
          ads.
          <br />
          Just the people you actually{' '}
          <Typography component="span" variant="subtitle2">
            know
          </Typography>
          .
        </Typography>
      </Grid>
    </>
  );
};

export default UnauthLeftModule;
