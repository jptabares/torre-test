import React from 'react';
import Container from '@material-ui/core/Container';
import { Card, CardContent, CardActions, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  title: {
    fontSize: 14,
  }
});

export default function Search() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardContent>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button variant="contained" color="primary" component={Link} naked href="/">
            Go to the main page
          </Button>
        </Box>
        </CardContent>
      </Card>
    </Container>
  );
}